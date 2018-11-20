import productService from '../../shared/services/product'
import EventEmitter from '../../shared/utils/EventEmitter'
import { ACTIONS, LOCALSTORAGE_ITEM, SHIPPING_FEE } from './config'

export default {
  eventBus: new EventEmitter(),
  cart: [],
  initCart() {
    let cartItems = []
    try {
      cartItems = JSON.parse(localStorage.getItem(LOCALSTORAGE_ITEM)) || []
    } catch (e) {}

    if (cartItems.length === 0) {
      this.eventBus.emit(ACTIONS.CART_PRODUCTS_LOADED, cartItems)
      this.setItems(cartItems)
      return
    }

    const cartItemsIds = cartItems.map(item => item.id)

    this.eventBus.emit(ACTIONS.CART_PRODUCTS_LOADING)

    productService.fetchAll(products => {
      const productIds = products.map(({ id }) => id)
      cartItems = cartItems
        .filter(item => productIds.includes(item.id))
        .map((item, index, cart) => {
          const product = products.find(p => p.id === item.id)
          return {
            ...item,
            ...product
          }
        })
      this.eventBus.emit(ACTIONS.CART_PRODUCTS_LOADED, cartItems)
      this.setItems(cartItems)
    }, 1500)
  },
  setItems(cart) {
    this.cart = [...cart]
    localStorage.setItem(LOCALSTORAGE_ITEM, JSON.stringify(this.cart))
    this.eventBus.emit(ACTIONS.CART_UPDATED, this.cart)
  },
  getMiniCart() {
    return this.cart.map(({ id, quantity }) => ({ id, quantity }))
  },
  countItems() {
    return this.cart.reduce(
      (currentValue, currentItem) => currentValue + currentItem.quantity,
      0
    )
  },
  total() {
    return (
      this.cart.reduce(
        (currentValue, currentItem) =>
          currentValue + currentItem.price * currentItem.quantity,
        0
      ) + SHIPPING_FEE
    )
  },
  totalByProduct(id) {
    const item = this.cart.find(item => item.id === id)
    if (item) {
      return item.price * item.quantity
    }
    return 0
  },
  add({ id, quantity }, sumQuantities = true) {
    const cartItem = this.cart.find(product => product.id === id)
    if (!cartItem) {
      this.setItems([...this.cart, { id, quantity }])
    } else {
      if (sumQuantities) {
        cartItem.quantity += quantity
      } else {
        cartItem.quantity = quantity
      }
      this.setItems(this.cart.map(item => (item.id === id ? cartItem : item)))
    }
  },
  remove(id) {
    this.setItems(this.cart.filter(item => item.id !== id))
  },
  clear() {
    this.setItems([])
  }
}

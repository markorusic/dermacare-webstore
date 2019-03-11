import productService from '../product/productService'
import EventEmitter from '../../shared/utils/EventEmitter'
import { ACTIONS, LC_CART_KEY, SHIPPING_FEE } from './config'

export default {
  eventBus: new EventEmitter(),
  cart: [],
  initCart() {
    let cartItems = []
    try {
      cartItems = JSON.parse(localStorage.getItem(LC_CART_KEY)) || []
    } catch (e) {}

    if (cartItems.length === 0) {
      this.eventBus.emit(ACTIONS.CART_PRODUCTS_LOADED, cartItems)
      this.setItems(cartItems)
      return
    }

    this.eventBus.emit(ACTIONS.CART_PRODUCTS_LOADING)

    productService.fetchAll().then(products => {
      const productIds = products.map(({ id }) => id)
      cartItems = cartItems
        .filter(item => productIds.includes(item.id))
        .map(item => {
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
    localStorage.setItem(LC_CART_KEY, JSON.stringify(this.cart))
    this.eventBus.emit(ACTIONS.CART_UPDATED, this.cart)
  },
  getMiniCart() {
    return this.cart.map(({ id, quantity }) => ({ id, quantity }))
  },
  countItems() {
    return this.cart.reduce((acc, curr) => acc + curr.quantity, 0)
  },
  total() {
    return (
      this.cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0) +
      SHIPPING_FEE
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

import toaster from './shared/utils/toaster'
import utils from './shared/utils'
import product from './modules/product/index'
import cart from './modules/cart/index'
import productData from './mockupData'

export default {
  init() {
    product.view.render(productData.slice(0, 4), '#home-product-group-1 .row')
    product.view.render(productData.slice(4, 8), '#home-product-group-2 .row')
    product.view.render(productData, '#product-list')
    utils.init()
    product.init()
    cart.init()
  }
}

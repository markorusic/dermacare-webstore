import toaster from './shared/utils/toaster'
import utils from './shared/utils'
import urlUtil from './shared/utils/url'
import product from './modules/product'
import cart from './modules/cart'
import category from './modules/category'
import productService from './modules/product/productService'
import categoryService from './modules/category/categoryService'

const app = {
  load() {
    const slug = urlUtil.getParam('slug')
    return Promise.all([
      productService.fetchFeatured(),
      productService.fetchByCategory(slug),
      categoryService.fetchAll()
    ])
  },
  init() {
    app.load().then(([featuredProducts, categoryProducts, categories]) => {
      product.view.renderList(
        featuredProducts.slice(0, 4),
        '#home-product-group-1 .row'
      )
      product.view.renderList(
        featuredProducts.slice(4, 8),
        '#home-product-group-2 .row'
      )
      product.view.renderList(categoryProducts, '#product-list')
      category.view.renderList(categories, '#collection-row')
      utils.init()
      product.init()
      cart.init()
    })
  }
}

export default app

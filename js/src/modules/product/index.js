import productOrdering from './ordering'
import view from './view'

export default {
  view,
  init({ featuredProducts, categoryProducts }) {
    view.renderList(featuredProducts.slice(0, 4), '#home-product-group-1 .row')
    view.renderList(featuredProducts.slice(4, 8), '#home-product-group-2 .row')
    view.renderList(categoryProducts, '#product-list')
    productOrdering.init()
  }
}

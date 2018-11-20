import productData from '../../mockup/products.json'
import wait from '../../shared/utils/wait'

export default {
  fetchAll: () => wait(productData, 500),
  fetchFeatured: () => wait(productData.slice(0, 8)),
  fetchByCategory: cateogrySlug =>
    wait(productData.filter(({ category }) => category.slug === cateogrySlug)),
  checkout: () => wait(true, 1500)
}

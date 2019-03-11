import { wait } from '../../shared/utils'

const state = {
  items: [],
  isLoading: false,
  isLoaded: false,
  error: null,
  loadingPromise: null
}

export default {
  fetchAll() {
    if (state.isLoaded) {
      return Promise.resolve(state.items)
    }
    if (!state.isLoading) {
      state.isLoading = true
      state.loadingPromise = fetch('/api/products.json')
        .then(res => res.json())
        .then(products => {
          state.items = products
          state.isLoaded = true
          return state.items
        })
        .catch(error => {
          console.warn('Error fetching products data!')
          console.log(error)
          state.error = error
          return Promise.reject(error)
        })
        .finally(() => {
          state.isLoading = false
        })
    }
    return state.loadingPromise
  },
  fetchFeatured() {
    return this.fetchAll().then(products =>
      products.filter(product => product.featured)
    )
  },
  fetchByCategory(cateogrySlug) {
    return this.fetchAll().then(products =>
      products.filter(({ category }) => category.slug === cateogrySlug)
    )
  },
  checkout() {
    return wait(true, 1500)
  }
}

import { wait } from '../../shared/utils'

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  isLoaded: false,
  error: null,
  loadingPromise: null
}

let state = INITIAL_STATE
const setState = newState => {
  state = { ...state, ...newState }
}

export default {
  fetchAll() {
    if (state.isLoaded) {
      return Promise.resolve(state.items)
    }
    if (!state.isLoading) {
      setState({
        isLoading: true,
        loadingPromise: fetch('/api/products.json')
          .then(res => res.json())
          .then(products => {
            setState({
              items: products,
              isLoaded: true,
              isLoading: false,
              error: null
            })
            return state.items
          })
          .catch(error => {
            setState({
              isLoading: false,
              error
            })
            console.warn('Error fetching products data!')
            console.log(error)
            return Promise.reject(error)
          })
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

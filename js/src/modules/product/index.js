import productOrdering from './ordering'
import view from './view'

export default (() => {
  return {
    init() {
      productOrdering.init()
    },
    view
  }
})()

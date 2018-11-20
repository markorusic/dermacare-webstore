import categoriesData from '../../mockup/categories.json'
import wait from '../../shared/utils/wait'

export default {
  fetchAll: () => wait(categoriesData)
}

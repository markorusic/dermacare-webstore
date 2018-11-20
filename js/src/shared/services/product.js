import productData from '../../mockupData'

const wait = (data, time = 1500) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, time)
  })

export default {
  fetchAll: () => wait(productData),
  checkout: () => wait(true)
}

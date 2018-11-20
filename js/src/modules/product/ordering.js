import pagination from '../../shared/utils/pagination'

export default (() => {
  const orderingTypes = {
    createdAt: 'date',
    priceAsc: 'price',
    priceDesc: 'price-desc'
  }

  const $dom = {}

  function _cacheDom() {
    $dom.root = $('#product-list')
    $dom.ordering = $('.product-ordering')
    _cacheProducts()
  }

  function _cacheProducts() {
    $dom.products = $dom.root.children()
  }

  function _bindEvents() {
    $dom.ordering.on('change', _handleOrderingChange)
  }

  function _getById(id) {
    return $dom.root.find(`[data-product=${id}]`).get(0).outerHTML
  }

  function _handleOrderingChange(event) {
    event.preventDefault()
    const orderBy = $(event.target).val()
    let $sortedProducts = null
    switch (orderBy) {
      case orderingTypes.createdAt:
        $sortedProducts = _getSortedDomElements('createdAt', true)
        break
      case orderingTypes.priceAsc:
        $sortedProducts = _getSortedDomElements('price', false)
        break
      case orderingTypes.priceDesc:
        $sortedProducts = _getSortedDomElements('price', true)
        break
      default:
    }
    _render($sortedProducts)
  }

  function _render($products) {
    $dom.root.append($products)

    const visible = pagination.countVisible()

    $dom.root.children().each((index, element) => {
      if (index > visible - 1) {
        $(element).hide()
      } else {
        $(element).show()
      }
    })

    pagination.handleLoadMoreButton()
    _cacheProducts()
  }

  function _getSortedDomElements(prop, desc) {
    return $dom.products.sort((current, next) => {
      const currentData = $(current).data()
      const nextData = $(next).data()
      if (currentData[prop] < nextData[prop]) {
        return desc ? 1 : -1
      }
      if (currentData[prop] > nextData[prop]) {
        return desc ? -1 : 1
      }
      return 0
    })
  }

  return {
    init() {
      _cacheDom()
      _bindEvents()
    }
  }
})()

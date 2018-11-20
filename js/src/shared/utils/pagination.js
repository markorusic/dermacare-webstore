export default (() => {
  const SHOW_PER_CLICK = 8

  const $dom = {
    loadMore: null,
    all: null,
    hidden: null,
    counter: null,
    api: {
      setAll() {
        $dom.all = $('[data-pageable]')
      },
      setHidden() {
        $dom.hidden = $('[data-pageable]:hidden')
      }
    }
  }

  function _cacheDom() {
    $dom.loadMore = $('#loadMore')
    $dom.loadMoreWrapper = $dom.loadMore.parent().parent()
    $dom.counter = $('.currently-showing')
    $dom.counterTotal = $('.total')
    $dom.api.setAll()
    $dom.api.setHidden()
  }

  function _bindEvents() {
    $dom.loadMore.on('click', _handleShowMore)
  }

  function _handleShowMore(event) {
    $dom.api.setHidden()
    event.preventDefault()
    $dom.hidden.slice(0, SHOW_PER_CLICK).slideDown()
    $dom.api.setHidden()
    if ($dom.hidden.length <= 0) {
      $dom.loadMoreWrapper.hide()
    }
    _updateCounter()
  }

  function _updateCounter() {
    if ($dom.counter.length > 0) {
      $dom.counter.text($dom.all.length - $dom.hidden.length)
      $dom.counterTotal.text($dom.all.length)
    }
  }

  return {
    init() {
      _cacheDom()
      _bindEvents()
      _updateCounter()
    },
    countAll() {
      $dom.api.setAll()
      return $dom.all.length
    },
    countAll() {
      $dom.api.setHidden()
      return $dom.hidden.length
    },
    countVisible() {
      $dom.api.setAll()
      $dom.api.setHidden()
      return $dom.all.length - $dom.hidden.length
    },
    handleLoadMoreButton() {
      if ($dom.hidden.length > 0) {
        $dom.loadMoreWrapper.show()
      } else {
        $dom.loadMoreWrapper.hide()
      }
    }
  }
})()

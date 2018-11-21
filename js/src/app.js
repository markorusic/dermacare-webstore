import { wait, toaster, url as urlUtil, pagination } from './shared/utils'
import { product, cart, category } from './modules'
import { CURRENCY } from './modules/cart/config'
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
  initVideoModal() {
    const $videoModal = $('#videoModal')
    const $videoIframe = $videoModal.find('iframe')
    $videoModal
      .on('show.bs.modal', event => {
        const videoId = $(event.relatedTarget)
          .data()
          .video.split('?')[1]
          .slice(2)
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`
        $videoIframe.attr('src', embedUrl)
      })
      .on('hide.bs.modal', () => {
        $videoIframe.attr('src', '')
      })
  },
  initContactForm() {
    $('#contact-form').on('submit', event => {
      event.preventDefault()
      const $form = $(event.target)
      const $btn = $form.find('button[type="submit"]')
      const $formWrapper = $form.parent()
      $btn.css({ 'pointer-events': 'none' }).text('Molimo Vas da sačekate...')
      wait({}, 1000).then(() => {
        $form.fadeOut(() => {
          $formWrapper.html(
            `<div><p class="font-size-21">Thank you. You have successfully sent a message. Soon we'll answer.</p></div>`
          )
        })
      })
    })
  },
  showCurrency() {
    $('.currency').text(CURRENCY)
  },
  init() {
    app.initContactForm()
    app.initVideoModal()
    app.load().then(([featuredProducts, categoryProducts, categories]) => {
      category.init({ categories })
      product.init({ featuredProducts, categoryProducts })
      cart.init()
      app.showCurrency()
      pagination.init()
    })
  }
}

export default app

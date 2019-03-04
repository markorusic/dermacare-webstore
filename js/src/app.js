import { wait, FormValidation, url, pagination } from './shared/utils'
import { product, cart, category } from './modules'
import { CURRENCY } from './modules/cart/config'
import productService from './modules/product/productService'
import categoryService from './modules/category/categoryService'

const app = {
  load() {
    const slug = url.getParam('slug')
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
    const $form = $('#contact-form')
    const validator = new FormValidation({ $form })
    $form.on('submit', event => {
      event.preventDefault()
      if (!validator.validate()) {
        return
      }
      const $btn = $form.find('button[type="submit"]')
      const $formWrapper = $form.parent()
      $btn.css({ 'pointer-events': 'none' }).text('Please wait...')
      wait({}, 1000).then(() => {
        $form.fadeOut(() => {
          $formWrapper.html(
            `<div><p class="font-size-21">Thank you. You have successfully sent a message. We'll answer soon.</p></div>`
          )
        })
      })
    })
  },
  initNewsletterForm() {
    const $form = $('#newsletter-form')
    const validator = new FormValidation({ $form })
    $form.on('submit', event => {
      event.preventDefault()
      if (!validator.validate()) {
        return
      }
      const $formWrapper = $form.parent()
      wait({}, 100).then(() => {
        $form.fadeOut(() => {
          $formWrapper.append(
            `<div><p class="font-size-18 text-center">You have successfully singed up for newsletter.</p></div>`
          )
        })
      })
    })
  },
  showCurrency() {
    $('.currency').text(CURRENCY)
  },
  init() {
    app.initNewsletterForm()
    app.initContactForm()
    app.initVideoModal()
    app.load().then(([featuredProducts, categoryProducts, categories]) => {
      product.init({ featuredProducts, categoryProducts })
      category.init({ categories })
      cart.init()
      pagination.init()
      app.showCurrency()
    })
  }
}

export default app

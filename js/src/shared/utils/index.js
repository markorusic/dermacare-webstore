import http from '../services/fakeHttp'
import pagination from './pagination'

export default (() => {
  const helpers = {
    getPhotoFromBg: element =>
      element
        .css('background-image')
        .replace(/.*\s?url\([\'\"]?/, '')
        .replace(/[\'\"]?\).*/, '')
  }

  const gallery = {
    getInitialState: photos => {
      const state = {
        photos,
        current: photos.length > 0 ? photos[0] : null,
        next: null,
        prev: null
      }
      return gallery.updateGalleryState(state, state.current)
    },
    updateGalleryState: (state, current) => {
      const len = state.photos.length
      const i = state.photos.indexOf(current)
      state.current = current
      state.next = state.photos[(i + 1) % len]
      state.prev = state.photos[(i + len - 1) % len]
      return state
    }
  }

  const $dom = {}

  function _cacheDom() {
    // Media photo
    $dom.photoModal = $('#photoModal')
    $dom.photoModalLeft = $dom.photoModal.find('.arr-left')
    $dom.photoModalRight = $dom.photoModal.find('.arr-right')
    // Media video
    $dom.videoModal = $('#videoModal')
    $dom.videoIframe = $dom.videoModal.find('iframe')
    // Contact form
    $dom.contactForm = $('#contact-form')
  }

  function _initContactForm() {
    $dom.contactForm.on('submit', event => {
      event.preventDefault()
      const $form = $(event.target)
      const $btn = $form.find('button[type="submit"]')
      const $formWrapper = $form.parent()
      $btn.css({ 'pointer-events': 'none' }).text('Molimo Vas da sačekate...')
      const data = {}
      http.post(`${window.location.origin}/contact/send`, data).then(() => {
        $form.fadeOut(() => {
          $formWrapper.html(
            `<div><p class="font-size-21">Hvala. Uspešno ste poslali poruku. Uskoro ćemo vam odgovoriti.</p></div>`
          )
        })
      })
    })
  }

  function _initMediaVideoModal() {
    $dom.videoModal
      .on('show.bs.modal', event => {
        const videoId = $(event.relatedTarget)
          .data()
          .video.split('?')[1]
          .slice(2)
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`
        $dom.videoIframe.attr('src', embedUrl)
      })
      .on('hide.bs.modal', () => {
        $dom.videoIframe.attr('src', '')
      })
  }

  return {
    init() {
      _cacheDom()
      _initContactForm()
      _initMediaVideoModal()
      pagination.init()
    },
    gallery,
    helpers
  }
})()

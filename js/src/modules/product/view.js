import { CURRENCY } from '../cart/config'
import View from '../../shared/utils/View'

export default new View(
  ({ id, name, price, slug, main_photo, category, created_at }, index) => `
    <div
      class="col-6 col-md-4 col-lg-3"
      data-pageable
      data-product-id="${id}"
      data-price="${price}"
      data-created-at="${created_at}"
      style="display:${index > 7 ? 'none' : 'block'};"
    >
      <article class="product-preview-article">
          <div class="product-image-preview position-relative">
              <a href="/product.php?slug=${slug}">
                  <img src="${main_photo}" alt="${name}" class="img-fluid">
              </a>
              <button data-product-id="${id}" class="btn-add-to-cart d-flex justify-content-between preview-product-atc">
                <span>Dodaj u korpu</span>
                <span class="btn-add-to-cart-plus"><img src="img/plus.svg" alt="Dodaj u korpu"></span>
              </button>
          </div>
          <div class="d-flex flex-column justify-content-md-between flex-md-row">
              <h4><a href="/product.php?slug=${slug}">${name}</a></h4>
              <h4>${price}  ${CURRENCY}</h4>
          </div>
          ${category &&
            (() => `
              <h6 class="pb-1">
                <a style="color: inherit;" href="/collection.php?slug=${
                  category.slug
                }">
                  ${category.name}
                </a>
              </h6>
          `)()}
      </article>
    </div>
  `
)

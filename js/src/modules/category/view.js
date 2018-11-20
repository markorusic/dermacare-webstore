import View from '../../shared/utils/View'

export default new View(
  ({ id, name, slug, main_photo }) => `
    <div class="col-6 col-md-4 col-lg-3">
      <article class="product-preview-article">
          <div class="position-relative product-image-preview d-flex justify-content-center align-items-center flex-column">
              <img src="${main_photo}" alt="${name}" class="img-fluid">
              <div class="image-overlay position-absolute"></div>
              <div class="position-absolute box-block d-flex justify-content-center align-items-center flex-column">
                  <a class="text-center full-wh flex-center-col" href="collection.php?slug=${slug}">
                    ${name}
                  </a>
              </div>
          </div>
          <div class="text-center">
              <h4><a href="collection.php?slug=${slug}">${name}</a></h4>
          </div>
      </article>
    </div>
    `
)

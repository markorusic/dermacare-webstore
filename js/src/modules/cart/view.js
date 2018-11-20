import { CURRENCY } from './config'

const templates = {
  cartProduct({ id, name, main_photo, price, quantity }) {
    return `
            <tr data-product-id="${id}">
                <td data-th="Proizvod">
                    <div class="row">
                        <div class="col-sm-4 hidden-xs">
                            <div class="card-product-img"
                                style="background-image: url('${main_photo}');"></div>
                        </div>
                        <div class="col-sm-8 d-flex align-items-center">
                        
                            <h4>${name}</h4>
                        </div>
                    </div>
                </td>
                <td data-th="Cena">${price} ${CURRENCY}</td>
                
                <td data-th="Količina">
                    <input value="${quantity}" class="change-product-quantity input-number" type="number" step="1" min="1" name="quantity">
                </td>
                <td data-th="Ukupno">
                    <span class="single-product-total">${price *
                      quantity}</span> ${CURRENCY}
                </td>
                <td class="actions" data-th="Ukloni">
                    <button class="remove-from-cart btn btn-sm"><img src="${
                      window.location.origin
                    }/img/x.svg" alt=""></button>
                </td>
            </tr>
        `
  },
  cartProductsWrapper(productsHTML) {
    return `
            <div class="col-md-8">
                <h6>Izabrani proizvodi (<span class="cart-items-count"></span> kom)</h6>
                <hr>
                <div class="table-responsive">
                    <table id="cart" class="table table-hover table-condensed">
                        <thead>
                        <tr>
                            <th>Proizvod</th>
                            <th>Cena</th>
                            <th>Količina</th>
                            <th>Ukupno</th>
                            <th>&nbsp;</th>
                        </tr>
                        </thead>
                        <tbody>
                            ${productsHTML}
                        </tbody>
                    </table>
                </div>

            </div>
        `
  },
  cartSum() {
    return `
            <div class="col-md-4 info-box">
                <h6>Ukupno</h6>
                <hr>
                <p class="d-flex flex-column justify-content-md-between flex-md-row">
                    <span>Ukupna vrednost proizvoda</span>
                    <span><span class="cart-items-total"></span> ${CURRENCY}</span>
                </p>

                <p class="d-flex flex-column justify-content-md-between flex-md-row font-weight-bold mt-3 mb-5">
                    <span>Ukupno</span>
                    <span><span class="cart-items-total-with-shipping"></span> ${CURRENCY}</span>
                </p>
                <button type="submit"
                        class="btn-add-to-cart-look d-flex justify-content-between"
                        data-toggle="modal"
                        data-target="#orderModal">
                    <span>Nastavi</span>
                    <span class="btn-add-to-cart-plus"><img src="img/check.svg" alt=""></span>
                </button>
            </div>
        `
  },
  emptyCart: `
        <div class="col-12 col-md-6 offset-md-3">
            <div class="flex-center-col pt-4">
                <h3 class="uc font-size-21">Vaša korpa je trenutno prazna</h3>
                <p class="small-p">Niste ubacili proizvod u vašu korpu</p>
                <a href="/collections.php" class="uc btn btn-derma">
                    Vrati se u prodavnicu
                </a>
            </div>
        </div>
    `,
  loader: `
        <div class="cart-loader-wrapper">
            <div class="lds-ripple"><div></div><div></div></div>
        </div>
    `,
  successfulyCheckout: `
        <div class="flex-center-col" style="height: 100%;">
            <h3 class="uc font-size-21">Hvala na kupovini nasih porizvoda!</h3>
            <p>Proverite mail, kako biste završili kupovinu</p>
        </div>
    `
}

export default {
  $cartWrapper: document.querySelector('#cart-wrapper .row'),
  ...templates,
  renderEmptyCart() {
    this.$cartWrapper.innerHTML = this.emptyCart
  },
  renderLoader() {
    this.$cartWrapper.innerHTML = this.loader
  },
  initialRender(cart) {
    if (cart.length === 0) {
      this.renderEmptyCart()
      return false
    }
    const productsHTML = cart.map(product => this.cartProduct(product)).join('')
    const cartTableHTML = this.cartProductsWrapper(productsHTML)
    const cartSumHTML = this.cartSum()
    this.$cartWrapper.innerHTML = cartTableHTML + cartSumHTML
    return true
  }
}

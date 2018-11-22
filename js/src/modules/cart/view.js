import { CURRENCY } from './config'

const templates = {
  cartProduct({ id, name, main_photo, price, quantity }) {
    return `
            <tr data-product-id="${id}">
                <td data-th="Product">
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
                <td data-th="Price">${price} ${CURRENCY}</td>
                
                <td data-th="Quantity">
                    <input value="${quantity}" class="change-product-quantity input-number" type="number" step="1" min="1" name="quantity">
                </td>
                <td data-th="Total">
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
                <h6>Selected products (<span class="cart-items-count"></span>)</h6>
                <hr>
                <div class="table-responsive">
                    <table id="cart" class="table table-hover table-condensed">
                        <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
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
                <h6>Total</h6>
                <hr>
                <p class="d-flex flex-column justify-content-md-between flex-md-row">
                    <span>Total value of the products</span>
                    <span><span class="cart-items-total"></span> ${CURRENCY}</span>
                </p>

                <p class="d-flex flex-column justify-content-md-between flex-md-row font-weight-bold mt-3 mb-5">
                    <span>Total</span>
                    <span><span class="cart-items-total-with-shipping"></span> ${CURRENCY}</span>
                </p>
                <button type="submit"
                        class="btn-add-to-cart-look d-flex justify-content-between"
                        data-toggle="modal"
                        data-target="#orderModal">
                    <span>Continue</span>
                    <span class="btn-add-to-cart-plus"><img src="img/check.svg" alt="Add to cart"></span>
                </button>
            </div>
        `
  },
  emptyCart: `
        <div class="col-12 col-md-6 offset-md-3">
            <div class="flex-center-col pt-4">
                <h3 class="uc font-size-21 text-center">Your cart is currently empty.</h3>
                <p class="small-p">You did not insert the product into your cart.</p>
                <a href="/collections.php" class="uc btn btn-derma">
                    Back to shop
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
            <h3 class="uc font-size-21 text-center">Thank you for purchasing our products!</h3>
            <p>Check your mail to complete your purchase</p>
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

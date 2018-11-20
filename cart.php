<?php include 'partials/header.php' ?>
    <!-- Main Container -->
    <main class="contact">
            <!-- Page title -->
        <div class="page-title-strip">
            <div class="container">
                <h1 class="text-uppercase">Korpa</h1>
                <div class="breadcrumb-top">
                  <a href="index.php" class="breadcrumb-item">Dermacare</a> <span class="mlr">></span> <a href="cart.php" class="breadcrumb-item">Korpa</a>
                </div>
            </div>
        </div>

        <div id="cart-wrapper" class="container mt-4">
            <div class="row"></div>
        </div>

    </main>
    <!-- Main Container END -->    
    
    <!-- Order modal-->
    <div class="modal fade" id="orderModal">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <!-- Modal body -->
                <div class="modal-body position-relative">
                    <form id="checkout-form" action="">
                        <div class="form-group">
                            <label for="name">Ime</label>
                            <input type="text"
                                   name="name"
                                   id="name"
                                   class="form-control"
                                   required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email"
                                   name="email"
                                   id="email"
                                   class="form-control"
                                   required>
                        </div>
                        <div class="form-group">
                            <label for="address">Adresa za isporuku</label>
                            <input type="text"
                                   name="address"
                                   id="address"
                                   class="form-control"
                                   required>
                        </div>
                        <div class="form-group">
                            <label for="city">Grad</label>
                            <input type="text"
                                   name="city"
                                   id="city"
                                   class="form-control"
                                   required>
                        </div>
                        <div class="form-group">
                            <label for="contact">Broj telefona</label>
                            <input type="tel"
                                   name="contact"
                                   id="contact"
                                   class="form-control"
                                   required>
                        </div>
                        <div class="form-group">
                            <label for="additionalInfo">Dodatne informacije</label>
                            <textarea class="form-control" id="additionalInfo" name="additionalInfo" rows="3"></textarea>
                        </div>
    
                        <button type="submit" class="btn-derma btn-add-to-cart-look d-flex justify-content-between">
                            <span>Poruči</span>
                            <span class="btn-add-to-cart-plus"><img src="img/check.svg" alt="Poruči"></span>
                        </button>
                    </form>
                </div>
            </div>
    
        </div>
    </div>
<?php include 'partials/footer.php' ?>
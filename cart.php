<?php
    $page_title = 'Cart';
	$page_description = 'Cart page.';
    include 'partials/header.php';
?>
    <!-- Main Container -->
    <main class="contact">
            <!-- Page title -->
        <div class="page-title-strip">
            <div class="container">
                <h1 class="text-uppercase">Cart</h1>
                <div class="breadcrumb-top">
                  <a href="index.php" class="breadcrumb-item">Dermacare</a> <span class="mlr">></span> <a href="cart.php" class="breadcrumb-item">Cart</a>
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
                            <label for="name">Name</label>
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
                            <label for="address">Address</label>
                            <input type="text"
                                   name="address"
                                   id="address"
                                   class="form-control"
                                   required>
                        </div>
                        <div class="form-group">
                            <label for="city">City</label>
                            <input type="text"
                                   name="city"
                                   id="city"
                                   class="form-control"
                                   required>
                        </div>
                        <div class="form-group">
                            <label for="contact">Phone number</label>
                            <input type="tel"
                                   name="contact"
                                   id="contact"
                                   class="form-control"
                                   required>
                        </div>
                        <div class="form-group">
                            <label for="additionalInfo">Additional info</label>
                            <textarea class="form-control" id="additionalInfo" name="additionalInfo" rows="3"></textarea>
                        </div>
    
                        <button type="submit" class="btn-derma btn-add-to-cart-look d-flex justify-content-between">
                            <span>Order</span>
                            <span class="btn-add-to-cart-plus"><img src="img/check.svg" alt="Order"></span>
                        </button>
                    </form>
                </div>
            </div>
    
        </div>
    </div>
<?php include 'partials/footer.php' ?>
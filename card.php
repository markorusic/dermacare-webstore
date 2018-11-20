<?php include 'partials/header.php' ?>

<!-- Main Container -->
<main>
    <!-- Page title -->
    <div class="page-title-strip">
        <div class="container">
            <h1 class="text-uppercase">Korpa</h1>
            <div class="breadcrumb-top">
                <a href="index.php" class="breadcrumb-item">Dermaceutical</a> <span class="mlr">></span> <a
                        href="glow-edition.php" class="breadcrumb-item">Korpa</a>
            </div>
        </div>
    </div>


    <!-- Card Form -->
    <div class="container shopping-cart">
        <div class="row">
            <div class="col-md-8">
                <h6>Izabrani proizvodi (3 kom)</h6>
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
                        <tr>
                            <td data-th="Proizvod">
                                <div class="row">
                                    <div class="col-sm-4 hidden-xs">
                                        <div class="card-product-img"
                                             style="background-image: url('img/gold-2.jpg');"></div>
                                    </div>
                                    <div class="col-sm-8 d-flex align-items-center">
                                        <h4>24k premium Gold Mask</h4>
                                    </div>
                                </div>
                            </td>
                            <td data-th="Cena">18 €</td>
                            <td data-th="Količina">
                                <input type="number" step="1" min="1" name="quantity" value="1" class="input-number">
                            </td>
                            <td data-th="Ukupno">18 €</td>
                            <td class="actions" data-th="Ukloni">
                                <button class="btn btn-sm"><img src="img/x.svg" alt=""></button>
                            </td>
                        </tr>
                        <tr>
                            <td data-th="Proizvod">
                                <div class="row">
                                    <div class="col-sm-4 hidden-xs">
                                        <div class="card-product-img"
                                             style="background-image: url('img/gold-2.jpg');"></div>
                                    </div>
                                    <div class="col-sm-8 d-flex align-items-center">
                                        <h4>24k premium Gold Mask</h4>
                                    </div>
                                </div>
                            </td>
                            <td data-th="Cena">18 €</td>
                            <td data-th="Količina">
                                <input type="number" step="1" min="1" name="quantity" value="1" class="input-number">
                            </td>
                            <td data-th="Ukupno">18 €</td>
                            <td class="actions" data-th="Ukloni">
                                <button class="btn btn-sm"><img src="img/x.svg" alt=""></button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <div class="col-md-4 info-box">
                <h6>Ukupno</h6>
                <hr>
                <p class="d-flex flex-column justify-content-md-between flex-md-row">
                    <span>Ukupna vrednost proizvoda</span>
                    <span>540 din.</span>
                </p>
                <p class="d-flex flex-column justify-content-md-between flex-md-row">
                    <span>Poštarina</span>
                    <span>250 din.</span>
                </p>

                <p class="cart-sum d-flex flex-column justify-content-md-between flex-md-row font-weight-bold mt-4 mb-5">
                    <span>Ukupno</span>
                    <span>790 din.</span>
                </p>
                <button type="submit"
                        class="btn-add-to-cart d-flex justify-content-between mb-5"
                        data-toggle="modal"
                        data-target="#orderModal">
                    <span>Nastavi</span>
                    <span class="btn-add-to-cart-plus"><img src="img/check.svg" alt=""></span>
                </button>
            </div>
        </div>
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
                <form action="">
                    <div class="form-group">
                        <label for="senderName">Ime</label>
                        <input type="text"
                               name="senderName"
                               id="senderName"
                               class="form-control"
                               required>
                    </div>
                    <div class="form-group">
                        <label for="senderEmail">Email</label>
                        <input type="email"
                               name="senderEmail"
                               id="senderEmail"
                               class="form-control"
                               required>
                    </div>
                    <div class="form-group">
                        <label for="senderAddress">Adresa za isporuku</label>
                        <input type="text"
                               name="senderAddress"
                               id="senderAddress"
                               class="form-control"
                               required>
                    </div>
                    <div class="form-group">
                        <label for="senderAddress">Grad</label>
                        <input type="text"
                               name="senderAddress"
                               id="senderAddress"
                               class="form-control"
                               required>
                    </div>
                    <div class="form-group">
                        <label for="senderTel">Broj telefona</label>
                        <input type="tel"
                               name="senderTel"
                               id="senderTel"
                               class="form-control"
                               required>
                    </div>
                    <div class="form-group">
                        <label for="senderMessage">Dodatne informacije</label>
                        <textarea class="form-control" id="senderMessage" rows="3"></textarea>
                    </div>

                    <button type="submit" class="btn-add-to-cart d-flex justify-content-between">
                        <span>Poruči</span>
                        <span class="btn-add-to-cart-plus"><img src="img/check.svg" alt=""></span>
                    </button>
                </form>
            </div>
        </div>

    </div>
</div>

<?php include 'partials/footer.php' ?>

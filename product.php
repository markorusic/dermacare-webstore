<?php
    include 'utils.php';
    if (!isPresent('slug')) {
        abort(400);
    }

    $slug = get('slug');
    $product = findBySlug($slug, $products);
    if (is_null($product)) {
        abort(404);
    }

    $page_title = $product['name'];
    $page_description = $product['description'];
    include 'partials/header.php';
?>

<!-- Main Container -->
<main>
    <!-- Page title -->
    <div class="page-title-strip">
        <div class="container">
            <h1 class="text-uppercase"><?= $product['name'] ?></h1>
            <div class="breadcrumb-top">
                <a href="index.php" class="breadcrumb-item">Dermacare</a> 
                <span class="mlr">></span>
                <a href="collection.php?slug=<?= $product['category']['slug'] ?>" class="breadcrumb-item"><?= $product['category']['name'] ?></a>
                <span class="mlr">></span>
                <a href="product.php?slug=<?= $product['slug'] ?>" class="breadcrumb-item"><?= $product['name'] ?></a>
            </div>
        </div>
    </div>

    <!-- Single product -->
    <div class="container">
        <div class="single-product">
            <div class="row">
                <div class="col-md-6">
                    <div class="product-image-preview">
                        <span>
                            <img src="<?= $product['main_photo'] ?>" alt="<?= $product['name'] ?>" class="img-fluid">
                        </span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex justify-content-between">
                        <h2 class="product-price"><?= $product['price'] ?> <span class="currency"></span> </h2>
                    </div>

                    <hr>

                    <div class="add-to-cart-block">
                        <form action="">
                            <input
                                id="add-to-cart-quantity"
                                class="input-number"
                                type="number"
                                step="1"
                                min="1"
                                name="quantity"
                                value="1"
                            >
                            <div class="d-inline-block">
                                <button data-product-id="<?= $product['id'] ?>" type="submit" class="btn-add-to-cart d-flex justify-content-between">
                                    <span>Add to cart</span>
                                    <span class="btn-add-to-cart-plus"><img src="img/plus.svg" alt="Dodaj u korpu"></span>
                                </button>
                            </div>

                        </form>
                    </div>

                    <hr>

                    <div class="product-description">
                        <h4 class="mt-4 mb-4">Product description</h4>
                        <p><?= $product['description'] ?></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</main>
<!-- Main Container END -->

<?php include 'partials/footer.php' ?>

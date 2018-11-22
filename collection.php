<?php
    include 'utils.php';
    if (!isPresent('slug')) {
        abort(400);
    }
    $slug = get('slug');
    $category = findBySlug($slug, $categories);
    if (is_null($category)) {
        abort(404);
    }

    $page_title = $category['name'];
    $page_description = $category['description'];
    include 'partials/header.php';
?>

<!-- Main Container -->
<main>
    <!-- Page title -->
    <div class="page-title-strip">
        <div class="container">
            <h1 class="text-uppercase"><?= $category['name'] ?></h1>
            <div class="breadcrumb-top">
                <a href="index.php" class="breadcrumb-item">Dermacare</a>
                <span class="mlr">></span>
                <a href="collection.php?slug=<?= $category['slug'] ?>" class="breadcrumb-item"><?= $category['name'] ?></a>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="product-filter d-flex flex-column justify-content-md-between flex-md-row num-of-showed-products">
            <p>Shown <span class="currently-showing"></span> of total <span class="total"></span> products</p>

            <div>
                <form class="product-ordering">
                    <select name="orderby" class="orderby">
                        <option value="date" selected="selected">Sort by creation date</option>
                        <option value="price">Sort by price: ascending</option>
                        <option value="price-desc">Sort by price: descending</option>
                    </select>
                </form>
            </div>
        </div>
    </div>


    <!-- Product list -->
    <section class="product-section">
        <div class="container">
            <div class="row" id="product-list"></div>
            <div class="heading-wrap text-center lmb-wrap" style="display: none;">
                <h3 class="d-inline-block bg-white"><a id="loadMore" class="load-more-btn">Show more</a></h3>
            </div>
        </div>
    </section>
</main>
<!-- Main Container END -->

<?php include 'partials/footer.php' ?>

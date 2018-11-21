<?php
    $page_title = 'Collections';
	$page_description = 'Dermacare product collections.';
    include 'partials/header.php';
?>

<!-- Main Container -->
<main>
    <!-- Page title -->
    <div class="page-title-strip">
        <div class="container">
            <h1 class="text-uppercase">Collection</h1>
            <div class="breadcrumb-top">
                <a href="index.php" class="breadcrumb-item">Dermacare</a> <span class="mlr">></span> <a
                        href="collections.php" class="breadcrumb-item">Collection</a>
            </div>
        </div>
    </div>

    <!-- Product categories -->
    <section class="product-section category-section">
        <div class="container">
            <div id="collection-row" class="row"></div>
        </div>
    </section>
</main>
<!-- Main Container END -->

<?php include 'partials/footer.php' ?>

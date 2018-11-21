<?php
    $page_title = 'Contact';
	$page_description = 'Contact us.';
    include 'partials/header.php';
?>

<!-- Main Container -->
<main class="contact">
    <!-- Page title -->
    <div class="page-title-strip">
        <div class="container">
            <h1 class="text-uppercase">Contact</h1>
            <div class="breadcrumb-top">
                <a href="index.php" class="breadcrumb-item">Dermacare</a> <span class="mlr">></span> <a
                        href="glow-edition.php" class="breadcrumb-item">Contact</a>
            </div>
        </div>
    </div>

    <!-- Contact Form -->

    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h6>Have a question?</h6>
                <hr>
                <form id="contact-form">
                    <div class="form-group">
                        <label for="senderName">Name</label>
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
                        <label for="senderSubject">Title</label>
                        <input type="text"
                               name="senderSubject"
                               id="senderSubject"
                               class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="senderMessage">Content</label>
                        <textarea class="form-control" id="senderMessage" rows="3"></textarea>
                    </div>

                    <button type="submit" class="btn-add-to-cart-look d-flex justify-content-between">
                        <span>Send</span>
                        <span class="btn-add-to-cart-plus"><img src="img/check.svg" alt=""></span>
                    </button>
                </form>
            </div>
            <div class="col-md-4 info-box">
                <h6>Dermacare</h6>
                <hr>
                <p class="lh2">
                    Adresa 312<br>
                    11000 Beograd<br>
                    marko.rusic.22.17@ict.edu.rs
                </p>
            </div>
        </div>
    </div>

</main>
<!-- Main Container END -->


<?php include 'partials/footer.php' ?>


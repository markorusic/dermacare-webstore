<?php
    $page_title = 'Welcome';
	$page_description = 'Dermacare is skin care shop you allways wanted!';
    include 'partials/header.php';
?>

    <!-- Main Container -->
    <main>

        <!-- First Main Section .home-top -->
        <section class="home-top">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <article class="d-flex justify-content-center align-items-center flex-column">
                            <div class="box-block d-flex justify-content-center align-items-center flex-column">
                                <a href="collection.php?slug=glow-edition">
                                    <span>GLOW</span>
                                    <span class="hr-line"></span>
                                    <span>edition</span>
                                </a>
                            </div>
                        </article>
                    </div>
                    <div class="col-md-6">
                        <article class="d-flex justify-content-center align-items-center flex-column video pointer"
                                 data-toggle="modal"
                                 data-target="#videoModal"
                                 data-video="https://www.youtube.com/watch?v=oFxEN_o2AUQ">
                            <div class="box-block d-flex justify-content-center align-items-center flex-column">
                                <img src="img/play.svg" alt="play">
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>

        <!-- Glow Edition -->
        <section class="product-section" id="home-product-group-1">
            <div class="container">
                <div class="heading-wrap text-center">
                    <h3 class="d-inline-block bg-white">GLOW edition</h3>
                </div>
                <div class="row"></div>
            </div>
        </section>

        <!-- Glow Edition -->
        <section class="product-section" id="home-product-group-2">
            <div class="container">
                <div class="heading-wrap text-center">
                    <h3 class="d-inline-block bg-white text-uppercase">Best sellers</h3>
                </div>
                <div class="row"></div>
            </div>
        </section>

        <!-- Testimonials -->
        <div class="testimonials">
            <div class="container">
                <h3 class="text-uppercase text-center">Testimonials</h3>
                <span class="hr-line-heading"></span>

                <div id="testimonials" class="carousel slide" data-ride="carousel">
                    <!-- The slideshow -->
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <p class="text-center">
                                We have no regrets! Demacare did exactly what you said it does. I am completely blown away.
                            </p>
                            <h6 class="text-center">Elizabeth H</h6>
                        </div>
                        <div class="carousel-item">
                            <p class="text-center">
                            I can't say enough about Demacare. I am so pleased with this product. Demacare is worth much more than I paid. I would like to personally thank you for your outstanding product.
                            </p>
                            <h6 class="text-center">Romonda H</h6>
                        </div>
                        <div class="carousel-item">
                            <p class="text-center">
                                I will refer everyone I know. I don't know what else to say. We can't understand how we've been living without Demacare.
                            </p>
                            <h6 class="text-center">Che X</h6>
                        </div>
                    </div>

                    <!-- Left and right controls -->
                    <a class="carousel-control-prev" href="#testimonials" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#testimonials" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        </div>
    </main>
    <!-- Main Container END -->


<!-- Modals -->
<div class="modal fade" id="videoModal">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <!-- Modal body -->
            <div class="modal-body">
                <div class="videoWrapper">
                    <!-- YT iframe -->
                    <iframe width="100%" height="350" src="" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</div>


<?php include 'partials/footer.php' ?>
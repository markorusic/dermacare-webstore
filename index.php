<?php include 'partials/header.php' ?>

    <!-- Main Container -->
    <main>

        <!-- First Main Section .home-top -->
        <section class="home-top">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <article class="d-flex justify-content-center align-items-center flex-column">
                            <div class="box-block d-flex justify-content-center align-items-center flex-column">
                                <a href="collections.php?slug=glow-edition">
                                    <span>GLOW</span>
                                    <span class="hr-line"></span>
                                    <span>edition</span>
                                </a>
                            </div>
                        </article>
                    </div>
                    <div class="col-md-6">
                        <article class="d-flex justify-content-center align-items-center flex-column video"
                                 data-toggle="modal"
                                 data-target="#videoModal" style="cursor: pointer;"
                                 data-video="https://www.youtube.com/watch?v=ixPFJe4wobM">
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
                    <h3 class="d-inline-block bg-white text-uppercase">Najprodavaniji proizvodi</h3>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                                Sed
                                cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                                sagittis ipsum.
                            </p>
                            <h6 class="text-center">Ana Popovic, 27 godina, Beograd</h6>
                        </div>
                        <div class="carousel-item">
                            <p class="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                                Sed
                                cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                                sagittis ipsum.
                            </p>
                            <h6 class="text-center">Ana Popovic, 27 godina, Beograd</h6>
                        </div>
                        <div class="carousel-item">
                            <p class="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                                Sed
                                cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                                sagittis ipsum.
                            </p>
                            <h6 class="text-center">Ana Popovic, 27 godina, Beograd</h6>
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
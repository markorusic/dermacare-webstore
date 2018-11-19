<?php include 'header.php' ?>

<!-- Main Container -->
<main>
    <!-- Page title -->
    <div class="page-title-strip">
        <div class="container">
            <h1 class="text-uppercase">Blog</h1>
            <div class="breadcrumb-top">
                <a href="index.php" class="breadcrumb-item">Dermaceutical</a> <span class="mlr">></span> <a
                        href="blog.php" class="breadcrumb-item">Blog</a>
            </div>
        </div>
    </div>

    <!-- Blog articles -->
    <div class="container">
        <section class="blog">
            <article>
                <div class="row">
                    <div class="col-md-5">
                        <div class="blog-img-preview" style="background-image: url('img/blog-entry.jpg');">

                        </div>
                    </div>
                    <div class="col-md-7">
                        <h3><a href="blog-entry.php" class="mb-3">Zlatna maska za lice je tajni adut svih Viktorijinih
                                anđela.</a></h3>
                        <time datetime="2018-05-27" class="d-block mb-3">May 27, 2018.</time>
                        <p>Ako ste se pitale kako su Viktorijini nađeli uvek tako negovani sa blistavom kožom i tenom
                            koji nema mane, donosimo njihovo instant rešenje! Poput većine običnih žena i one muku muče
                            sa problematičnom kožom, ali imaju kec u rukavu...</p>
                        <div class="lmb-wrap">
                            <a href="blog-entry.php" class="load-more-btn read-more-btn">Pročitaj više</a>
                        </div>
                    </div>
                </div>
            </article>

            <hr>

            <article>
                <div class="row">
                    <div class="col-md-5">
                        <div class="blog-img-preview" style="background-image: url('img/blog-image.jpg');">

                        </div>
                    </div>
                    <div class="col-md-7">
                        <h3><a href="blog-entry.php" class="mb-3">Curabitur sodales ligula in libero</a></h3>
                        <time datetime="2018-05-27" class="d-block mb-3">May 27, 2018.</time>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                            sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
                            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos. </p>
                        <div class="lmb-wrap">
                            <a href="blog-entry.php" class="load-more-btn read-more-btn">Pročitaj više</a>
                        </div>
                    </div>
                </div>
            </article>

            <!-- Prikazuje se AKKO ima više od 8 članaka.
                Prikazuje se narednih 8 ili < 8
                Kad se prikažu svi članci, treba da nestane-->
            <div class="heading-wrap text-center lmb-wrap">
                <h3 class="d-inline-block bg-white"><a id="loadMore" class="load-more-btn">Učitaj još</a></h3>
            </div>
        </section>
    </div>

</main>
<!-- Main Container END -->


<?php include 'footer.php' ?>


<!-- Main Footer -->
<footer>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div>
                    <div class="heading-wrap text-center">
                        <span>Dermacare</span>
                    </div>

                    <p class="text-center">
                        <span class="mb-1 d-block">Adresa 213a, Beograd</span>
                        <span><a href="mailto:marko.rusic.22.17@ict.edu.rs" style="color:white;">marko.rusic.22.17@ict.edu.rs</a></span>
                    </p>
                </div>
            </div>

            <div class="col-md-4">
                <div>
                    <div class="heading-wrap text-center">
                        <h5 class="d-inline-block bg-white text-uppercase">Follow us on social meida</h5>
                    </div>

                    <ul class="list-reset text-center">
                        <li class="d-inline-block mr-40"><a href="#"><img src="img/fb.svg" alt="facebook icon"></a></li>
                        <li class="d-inline-block mr-40"><a href="#"><img src="img/insta.svg" alt="instagram icon"></a></li>
                       <li class="d-inline-block"><a href="#"><img src="img/twitter.svg" alt="twitter icon"></a></li>
                    </ul>
                </div>
            </div>

            <div class="col-md-4">
                <div>
                    <div class="heading-wrap text-center">
                        <h5 class="d-inline-block bg-white text-uppercase">Sing up for our Newsletter</h5>
                    </div>

                    <form id="newsletter-form">
                        <input
                            type="text"
                            placeholder="Enter your email address"
                            data-validate
                            data-required="Email is required"
                            data-pattern="\S+@\S+\.\S+"
                            data-pattern-message="Invalid email format"
                        />
                        <button><img src="img/newsletter.svg" alt="Sing up for newletter"></button>
                    </form>
                </div>
            </div>
        </div>

    </div>
    <div class="copyright">
        <div class="container text-center">
            <small class="text-center">
                Dermacare © <?= date("Y") ?>. <a href="/dokumentacija.pdf" target="_blank">Docs</a>
            </small>
            <p class="text-center">Site designed & developed by <a href="about.php">Marko Rusic</a></p>
        </div>
    </div>
</footer>
<!-- Main Footer END -->

<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
<!-- Repozitorijum ovog sajta: https://github.com/markorusic/wp1 -->
<script src="js/dist/index.js"></script>
</body>
</html>
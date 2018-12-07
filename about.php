<?php
    $page_title = 'About me';
	$page_description = 'Imam 20 godina, iz Beograda sam, student druge godine Visoke ICT skole, smer Internet tehnologije. Aktivno se bavim veb programiranjem od treceg razreda srenje skole. Privi programski jezik koji me je ozbiljno zaniteresovao bio je Javascript, tako da sam se u pocetku fokusirao na front end, sve do trenutka u kom sam otkrio Node.js i uopste sve benefite vezane za bekend programiranje. Danas mogu reci za sebe da posedujem znanje u mnogim klijentskim i serverskim tehnologijama.';
    include 'partials/header.php';
?>

    <main id="about-me">
		<div class="container py-5">
    		<div class="content-wrapper flex-center-col">
	            <img class="circle mb-2" src="https://avatars1.githubusercontent.com/u/25515080?s=460&amp;v=4" alt="Avatar photo of website author.">	           
	            <p class="author-info">
	                <span class="bold uc">Marko Rusic</span>
	                </p><p><i class="fa fa-envelope-o" aria-hidden="true"></i> marko.rusic.22.17@ict.edu.rs</p>
	                <p><i class="fa fa-id-card-o" aria-hidden="true"></i> Broj indeksa: 22/17</p>
	            <p></p>
	            <p class="text-center author-text"><?= $page_description ?> </p>
	            <div class="author-more-info text-center mt-3">
                    <p>Korisini linkovi:</p>
                    <div class="useful-links">
                        <a href="https://github.com/markorusic" class="btn btn-derma" style="width: 250px;" target="_blank">
							<i class="fa fa-github"></i> Github
						</a> 
                        <a href="https://codepen.io/marko123/" class="btn btn-derma" style="width: 250px;" target="_blank">
							<i class="fa fa-codepen"></i> Codepen
						</a> 
                    </div>
                    <hr>
                    <p>
						Repozitorijum ovog sajta: <a class="repo black" href="https://github.com/markorusic/wp1" target="_blank">https://github.com/markorusic/wp1</a>
					</p>
					<p>
						<a href="/dokumentacija.pdf" target="_blank">Dokumentacija sajta</a>
					</p>
					<p>
						<a href="/sitemap.xml" target="_blank">Sitemap</a>
					</p>
                </div>
	        </div>	        
    	</div>
	</main>

<?php include 'partials/footer.php' ?>
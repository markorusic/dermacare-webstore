/** autoplay & autostop on clik yt video **/

$(function () {
    $(".video").click(function () {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-video"),
            videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
        $(theModal + '#videoModal').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
});


/** carousel product imgs **/

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        margin: 15,
        items: 4
    });
});

/** load more js **/

$(function () {
    $(".col-6").slice(0, 8).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("div:hidden").slice(0, 12).slideDown();
        if ($("div:hidden").length == 4) {
            $("#load").fadeOut('slow');
        }
    });


});
$(document).ready(function(){
    /*docslider*/
    docSlider.init();

    /*slick slider*/
    $(".main-slide").slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 6000
    });

    $(".campaign-slide").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000
    });
});


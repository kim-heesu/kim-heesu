$(document).ready(function(){
    /*aos*/
    AOS.init({
        easing: 'ease-in-out-sine',
        startEvent: 'load'
    });

    /*slick slider*/
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

    /*top button*/
    $('.go-top').click(function(){
        $('html').scrollTop(0);
    });
});


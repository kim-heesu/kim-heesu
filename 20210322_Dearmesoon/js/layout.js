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

    /*mobile menu*/
    $(".btn-mobile-menu").on('click',function(){
        $(".mobile-menu").addClass('menu-open');
        $('body').append('<div class="overlay"></div>');
    });
    $(".btn-menu-close").on('click',function(){
        $(".mobile-menu").removeClass('menu-open');
        $('div').remove('.overlay');
    });
});


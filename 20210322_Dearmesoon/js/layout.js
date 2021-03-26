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

    /*tab*/
    $(".tab-content:first-of-type").addClass('open')
    $(".tab-title li").on('click',function(){
        var tabName = $(this).attr('data-name');
        $(this).addClass('active').siblings().removeClass('active');
        $("#"+tabName).addClass('open').siblings().removeClass('open');
    });

    /*suitable effect*/
    $('.sub-page.sub01_03 .suitable-list > li').on('click mouseover',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    /*modal*/
    $('.modal-open').on('click',function(){
        var modalName = $(this).attr('data-name');
        $("#"+modalName).addClass('open');

        var modalHeight = $('.modal-content').outerHeight() * -1 /2;
        $('.modal-content').css('margin-top',modalHeight);
    });
    $('.modal-close').on('click',function(){
        $(this).parents('.modal').removeClass('open');
    });
});

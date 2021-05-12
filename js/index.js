$(document).ready(function(){
    $('.header-burger').click(function(event) {
        $('.header-burger,.header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    })

    $('.main__sliders').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});
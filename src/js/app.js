$('.header-button').on('click', function(){
    $(this).toggleClass('active');
    $('.header-nav').toggleClass('show');
    $('body').toggleClass('shadow');
})
$('.main_gallery').slick({
    dots: true,
    slidesToShow: 3,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});

$('input[type="tel"]').mask('+38 (000) 000-00-00');
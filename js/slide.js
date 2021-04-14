$(document).ready(function(){
  $("#slide1").owlCarousel({
    loop: true,
    autoplay:true,
    autoplayTimeout:8000,

    dots:false,
    items:1,
    nav:true,
    navText: ['<i class="fas fa-chevron-left"></i>'
              , '<i class="fas fa-chevron-right"></i>']
  });

  $("#slide2").owlCarousel({
    loop: true,
    dots:false,
    items:3,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    nav:true,
    navText: ['<i class="fas fa-chevron-left"></i>'
              , '<i class="fas fa-chevron-right"></i>']
  });
});
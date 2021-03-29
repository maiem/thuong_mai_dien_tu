$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay:true,
    autoplayTimeout:8000,

    dots:false,
    items:1,
    nav:true,
    navText: ['<i class="fas fa-chevron-left"></i>'
              , '<i class="fas fa-chevron-right"></i>']
  });
});
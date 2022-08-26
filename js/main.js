// Owl Carousel
$(".owl-carousel").owlCarousel({
  center: true,
  items: 1,
  loop: true,
  nav: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

// Counter up
jQuery(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
// Wow js
new WOW().init();
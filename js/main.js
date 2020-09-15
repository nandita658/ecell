$(document).ready(function (){
  /* Scrolling Effects */
  $('.js--scroll-to-about').click(function(){
    $('html, body').animate({scrollTop:$('.js--section-about').offset().top}, 1000);
  });
  $('.js--scroll-to-events').click(function(){
    $('html, body').animate({scrollTop:$('.js--section-event').offset().top}, 1000);
  });
  $('.js--scroll-to-team').click(function(){
    $('html, body').animate({scrollTop:$('.js--section-team').offset().top}, 1000);
  });
  $('.js--scroll-to-contact').click(function(){
    $('html, body').animate({scrollTop:$('.js--section-contact').offset().top}, 1000);
  });
});

$(document).ready(function() {
  $(".js--scroll-about").click(function() {
    $('html, body').animate({scrollTop: $(".js--section-about").offset().top}, 1000);
  });
  $(".js--scroll-events").click(function() {
    $('html, body').animate({scrollTop: $(".js--section-event").offset().top}, 1000);
  });
  $(".js--scroll-team").click(function() {
    $('html, body').animate({scrollTop: $(".js--section-team").offset().top}, 1000);
  });
});

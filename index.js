$(document).ready(function() {

  $("#menuHamburguesa").click(function() {
    $(".links-principales").slideToggle(400);
    $(".bar1").toggleClass("change-bar1");
    $(".bar2").toggleClass("change-bar2");
    $(".bar3").toggleClass("change-bar3");
  });
  
});
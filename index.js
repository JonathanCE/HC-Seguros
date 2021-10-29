$(document).ready(function() {

  $("#menuHamburguesa").click(function() {
    $(".links-principales").slideToggle(400);
    $(".bar1").toggleClass("change-bar1");
    $(".bar2").toggleClass("change-bar2");
    $(".bar3").toggleClass("change-bar3");
  });

  $(".boton-seguros").click(function() {
    $(".extra-seguros").slideToggle();
    $(".ver-mas-seguros").toggle();
    $(".ver-menos-seguros").toggle();
  });
  $(".boton-ahorros").click(function() {
    $(".extra-ahorro").slideToggle();
    $(".ver-mas-ahorros").toggle();
    $(".ver-menos-ahorros").toggle();
  });
  $(".boton-inversiones").click(function() {
    $(".extra-inversiones").slideToggle();
    $(".ver-mas-inversiones").toggle();
    $(".ver-menos-inversiones").toggle();
  });
  
});
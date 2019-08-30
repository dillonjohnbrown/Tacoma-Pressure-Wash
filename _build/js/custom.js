var cities = [
  $("#Tacoma"),
  $("#Gig-Harbor"),
  $("#Steilacoom"),
  $("#Fircrest"),
  $("#Lakewood"),
  $("#Fife"),
  $("#Federal-Way"),
  $("#Milton")
];
var animationTime = 1500;

$(function() {
  wordmarkHack();
});
window.onscroll = function() {
  hideNav();
  map();
};
window.onresize = function() {
  wordmarkHack();
};


// Hide word part of logo on scroll
// Show nav links on scroll
function hideNav() {
  var wordmarkBackground  = $("#wordmarkBackground").outerHeight();
  var logoHeight          = $("#navLogo").outerHeight();
  var showNavHeight = wordmarkBackground - logoHeight;

  if (document.body.scrollTop > showNavHeight || document.documentElement.scrollTop > showNavHeight) {
    // Show nav after scroll
    $("#navLink1, #navLink2, #navLink3").addClass("fadeInUp");
  }
}

function map() {
  var element           = $("#more");
  var top_of_element    = element.offset().top;
  var bottom_of_element = top_of_element + element.outerHeight();
  var top_of_screen     = $(window).scrollTop();
  var bottom_of_screen  = top_of_screen + $(window).innerHeight();


    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        // Show each city graphic
        $("#WSDOT__City_Limits path").each(function(index) {
          $(this).delay(animationTime * index).fadeTo(animationTime, 0.1);
        });
        // Show each city text
        $("#city-list li").each(function(index) {
          $(this).delay(animationTime * index).fadeTo(animationTime, 1);
        });
    }
}

function wordmarkHack() {
  if ($(window).width() > 550) {
    var headerHeight = $("header").outerHeight();

    $("#wordmarkBackground, #wordmarkBackground ~ div").css({top: -headerHeight});
  }
}

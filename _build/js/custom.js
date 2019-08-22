var cities = [
  $("#Tacoma"),
  $("#Gig-Harbor"),
  $("#Steilacoom"),
  $("#Fircrest"),
  $("#Lakewood"),
  $("#Puyallup"),
  $("#Fife"),
  $("#Federal-Way"),
  $("#University-Place"),
  $("#Milton"),
  $("#Ruston")
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
  var wordmarkBackground = $("#wordmarkBackground").outerHeight();

  if (document.body.scrollTop > wordmarkBackground || document.documentElement.scrollTop > wordmarkBackground) {
    // Show nav after scroll
    $("#navLink1, #navLink2, #navLink3").addClass("fadeInUp");
  } else {
    // Hide nav
    $("#navLink1, #navLink2, #navLink3").removeClass("fadeInUp");
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
          $(this).delay(animationTime * index).fadeIn(animationTime);
        });
        // Show each city text
        $("#city-list li").each(function(index) {
          $(this).delay(animationTime * index).fadeIn(animationTime);
        });
    }
}

function wordmarkHack() {
  if ($(window).width() > 550) {
    var headerHeight = $("header").outerHeight();

    $("#wordmarkBackground, #wordmarkBackground ~ div").css({top: -headerHeight});
  }
}

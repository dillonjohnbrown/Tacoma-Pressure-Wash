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

window.onscroll = function() {
  hideWordMark();
  map();
};

// Hide word part of logo on scroll
// Show nav links on scroll
function hideWordMark() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $("#navLink1, #navLink2, #navLink3").addClass("fadeInUp");
    $("#wordmark").addClass("fadeOutUp");
  } else {
    $("#navLink1, #navLink2, #navLink3").removeClass("fadeInUp");
    $("#wordmark").removeClass("fadeOutUp");
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

window.onscroll = function() {
  hideWordMark()
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

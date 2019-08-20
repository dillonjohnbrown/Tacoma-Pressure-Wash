window.onscroll = function() {
  hideWordMark()
};

// Hide word part of logo on scroll
function hideWordMark() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $("#navLogo").addClass("scrolled");
    $("#navLink1, #navLink2, #navLink3").addClass("scrolled");
  } else {
    $("#navLogo").removeClass("scrolled");
    $("#navLink1, #navLink2, #navLink3").removeClass("scrolled");
  }
}

window.onscroll = function() {
  hideWordMark()
};

//
function hideWordMark() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $("#navLogo").addClass("scrolled");
  } else {
    $("#navLogo").removeClass("scrolled");
  }
}

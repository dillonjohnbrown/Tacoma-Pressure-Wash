window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $("#navLogo").addClass("scrolled");
  } else {
    $("#navLogo").removeClass("scrolled");
  }
}

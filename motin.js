window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").classList.add("scrolled");
  } else {
    document.getElementById("navbar").classList.remove("scrolled");
  }
}
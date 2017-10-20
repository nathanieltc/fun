// JavaScript Document

var navbar = document.getElementById("navbar");
var sticky = nc_navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nc_navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

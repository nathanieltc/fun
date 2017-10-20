// JavaScript Document

var nc_navbar = document.getElementById("navbar");
var sticky = nc_navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nc_navbar.classList.add("sticky")
  } else {
    nc_navbar.classList.remove("sticky");
  }
}

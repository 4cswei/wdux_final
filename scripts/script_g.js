//--- Burger Menu when screen size is less than 700
const navLinks = document.getElementById("navLinks");
// Show the entire menu
function showMenu(){
  navLinks.style.right = "0";
}
// Hide the entire menu
function hideMenu(){
  navLinks.style.right = "-150px";
}
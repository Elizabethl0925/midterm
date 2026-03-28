const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", function(e) {
  e.preventDefault();
  menu.classList.toggle("active");
});

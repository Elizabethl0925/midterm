window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.style.background = window.scrollY > 50
    ? "rgba(10,12,18,0.95)"
    : "rgba(10,12,18,0.7)";
});

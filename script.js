const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

/* Create overlay */
const overlay = document.createElement("div");
overlay.id = "overlay";
document.body.appendChild(overlay);

/* Toggle menu */
menuToggle.addEventListener("click", function (e) {
  e.preventDefault();
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

/* Close menu */
overlay.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

/* Scroll reveal */
const posts = document.querySelectorAll(".post");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

posts.forEach((post, index) => {
  post.style.transitionDelay = `${index * 0.1}s`;
  observer.observe(post);
});

/* Header scroll behavior */
let lastScroll = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});

/* PRELOAD ANIMATION */
window.addEventListener("load", () => {
  const preload = document.getElementById("preload");
  const page = document.getElementById("page");

  setTimeout(() => {
    preload.classList.add("hidden");
    page.classList.add("loaded");
  }, 500);
});

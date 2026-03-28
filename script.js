const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

/* Toggle Menu */
menuToggle.addEventListener("click", function (e) {
  e.preventDefault();
  menu.classList.toggle("active");
});

/* Close menu when clicking outside */
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
    menu.classList.remove("active");
  }
});

/* Scroll reveal animation */
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

/* Header hide/show on scroll */
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

/* Smooth scrolling */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

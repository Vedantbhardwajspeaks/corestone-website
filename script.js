document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");

menu?.addEventListener("click", () => {
  const open = nav.dataset.open === "true";
  nav.dataset.open = String(!open);
  nav.style.display = open ? "" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "70px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "25px 7vw";
  nav.style.background = "#080808";
  nav.style.flexDirection = "column";
  nav.style.margin = "0";
});

const reveal = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      reveal.unobserve(entry.target);
    }
  });
}, {threshold: .08});

document.querySelectorAll(".service-card, .cities div, .mini-grid div").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity .7s ease, transform .7s ease";
  reveal.observe(el);
});

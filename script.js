const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// Toggle light/dark theme
let dark = false;
toggleBtn.addEventListener("click", () => {
  dark = !dark;
  body.classList.toggle("dark", dark);
  toggleBtn.textContent = dark ? "☀️" : "🌙";
});

// Click to enlarge image
const images = document.querySelectorAll(".clickable");
images.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.remove("hidden");
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.add("hidden");
  lightboxImg.src = "";
});

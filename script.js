// === script.js ===
// Optional: click-to-enlarge image effect

document.querySelectorAll('.click-to-enlarge').forEach(img => {
  img.addEventListener('click', () => {
    img.style.transform = img.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)';
  });
});

// Light/Dark theme toggle
const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

// Detect system preference on load
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  root.classList.add("dark");
  toggleBtn.innerHTML = '<i class="fas fa-sun text-lg"></i>'; // show sun in dark mode
} else {
  root.classList.remove("dark");
  toggleBtn.innerHTML = '<i class="fas fa-moon text-lg"></i>'; // show moon in light mode
}

// Toggle button click
toggleBtn.addEventListener("click", () => {
  if (root.classList.contains("dark")) {
    root.classList.remove("dark");
    toggleBtn.innerHTML = '<i class="fas fa-moon text-lg"></i>';
  } else {
    root.classList.add("dark");
    toggleBtn.innerHTML = '<i class="fas fa-sun text-lg"></i>';
  }
});

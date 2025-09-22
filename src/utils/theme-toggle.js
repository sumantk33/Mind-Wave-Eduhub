import { createIcons, Sun, Moon } from "lucide";

// Theme toggle functionality
const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

if (toggleBtn) {
  const renderIcon = (icon) => {
    toggleBtn.innerHTML = `<i data-lucide="${icon}"></i>`;
    createIcons({
      icons: { Sun, Moon },
    });
  };

  toggleBtn.addEventListener("click", () => {
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      renderIcon("moon");
    } else {
      root.classList.add("dark");
      renderIcon("sun");
    }
  });

  // Initial render
  renderIcon(root.classList.contains("dark") ? "sun" : "moon");
}

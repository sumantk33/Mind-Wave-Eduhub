import { createIcons, Sun, Moon } from "lucide";

// Theme toggle functionality
const root = document.documentElement;
const desktopBtn = document.getElementById("theme-toggle-desktop");
const mobileBtn = document.getElementById("theme-toggle");

const renderIconInto = (buttonEl, icon) => {
  if (!buttonEl) return;
  buttonEl.innerHTML = `<i data-lucide="${icon}"></i>`;
  createIcons({ icons: { Sun, Moon } });
};

const toggleTheme = () => {
  if (root.classList.contains("dark")) {
    root.classList.remove("dark");
    renderIconInto(desktopBtn, "moon");
    renderIconInto(mobileBtn, "moon");
  } else {
    root.classList.add("dark");
    renderIconInto(desktopBtn, "sun");
    renderIconInto(mobileBtn, "sun");
  }
};

if (desktopBtn) desktopBtn.addEventListener("click", toggleTheme);
if (mobileBtn) mobileBtn.addEventListener("click", toggleTheme);

// Initial render state
const initial = root.classList.contains("dark") ? "sun" : "moon";
renderIconInto(desktopBtn, initial);
renderIconInto(mobileBtn, initial);

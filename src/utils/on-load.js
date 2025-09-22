// Navigation and scroll animations
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const hash = this.getAttribute("href");
      const target = document.querySelector(hash);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Update the URL hash (without jumping)
        history.pushState(null, "", hash);
      }
    });
  });

  // Add scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in");
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });

  // Mobile menu: top sheet open/close
  const hamburgerBtn = document.getElementById("hamburger-menu-cta");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileOverlay = document.getElementById("mobile-menu-overlay");
  const mobileClose = document.getElementById("mobile-menu-close");

  const openMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("-translate-y-full");
    mobileMenu.setAttribute("aria-hidden", "false");
    if (mobileOverlay) mobileOverlay.classList.remove("hidden");
  };

  const closeMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.add("-translate-y-full");
    mobileMenu.setAttribute("aria-hidden", "true");
    if (mobileOverlay) mobileOverlay.classList.add("hidden");
  };

  if (hamburgerBtn) hamburgerBtn.addEventListener("click", openMenu);
  if (mobileClose) mobileClose.addEventListener("click", closeMenu);
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeMenu);

  // Close menu when clicking a nav link (mobile)
  document.querySelectorAll('#mobile-menu a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });
});

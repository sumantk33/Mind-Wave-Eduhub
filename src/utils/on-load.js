document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const hamburgerBtn = document.getElementById("hamburger-menu-cta");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileOverlay = document.getElementById("mobile-menu-overlay");
  const mobileClose = document.getElementById("mobile-menu-close");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("main section[id]");

  const headerOffset = () => (header ? header.offsetHeight : 0);

  const sectionTop = (target) => {
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset();
    return Math.max(0, Math.round(top));
  };

  const decodeImages = () =>
    Promise.all(
      [...document.images].map((img) => {
        if (img.complete && img.naturalHeight > 0) return Promise.resolve();
        if (img.decode) return img.decode().catch(() => {});
        return new Promise((resolve) => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", resolve, { once: true });
        });
      })
    );

  const scrollToHash = async (hash, instant = false) => {
    const target = document.querySelector(hash);
    if (!target) return;

    await decodeImages();

    const top = sectionTop(target);
    window.scrollTo({ top, behavior: instant ? "auto" : "smooth" });
    history.pushState(null, "", hash);

    // Lazy images above the target can still expand after the first paint.
    requestAnimationFrame(() => {
      const corrected = sectionTop(target);
      if (Math.abs(corrected - window.scrollY) > 8) {
        window.scrollTo({ top: corrected, behavior: instant ? "auto" : "smooth" });
      }
    });
  };

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.querySelector(hash);
      if (!target) return;
      event.preventDefault();
      scrollToHash(hash);
      closeMenu();
    });
  });

  const openMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.setAttribute("aria-hidden", "false");
    hamburgerBtn?.setAttribute("aria-expanded", "true");
    mobileOverlay?.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
    mobileClose?.focus();
  };

  const closeMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.add("translate-x-full");
    mobileMenu.setAttribute("aria-hidden", "true");
    hamburgerBtn?.setAttribute("aria-expanded", "false");
    mobileOverlay?.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  };

  hamburgerBtn?.addEventListener("click", openMenu);
  mobileClose?.addEventListener("click", closeMenu);
  mobileOverlay?.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("is-active", href === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target?.id) setActiveLink(visible.target.id);
    },
    {
      rootMargin: `-${headerOffset() + 24}px 0px -45% 0px`,
      threshold: [0.15, 0.35, 0.6],
    }
  );

  sections.forEach((section) => observer.observe(section));

  if (window.location.hash) {
    requestAnimationFrame(() => scrollToHash(window.location.hash, true));
  }
});

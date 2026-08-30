(() => {
  "use strict";

  /* ---------- Theme (Dark / Light) ---------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const THEME_KEY = "abazr-theme";

  const applyTheme = (theme) => {
    root.setAttribute("data-theme", theme);
  };

  const savedTheme = localStorage.getItem(THEME_KEY);
  applyTheme(savedTheme === "light" ? "light" : "dark");

  themeToggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });

  /* ---------- Mobile Navigation ---------- */
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");
  const navOverlay = document.getElementById("nav-overlay");
  const navLinks = document.querySelectorAll(".nav-link");

  const closeMenu = () => {
    mainNav.classList.remove("open");
    navOverlay.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "فتح القائمة");
  };

  const openMenu = () => {
    mainNav.classList.add("open");
    navOverlay.classList.add("active");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "إغلاق القائمة");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.contains("open");
    isOpen ? closeMenu() : openMenu();
  });

  navOverlay.addEventListener("click", closeMenu);
  navLinks.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  /* ---------- Header scroll state ---------- */
  const header = document.getElementById("site-header");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll Reveal ---------- */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealEls = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("in-view"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  }

  /* ---------- Contact Form ---------- */
  const contactForm = document.getElementById("contact-form");
  const formNote = document.getElementById("form-note");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!contactForm.checkValidity()) {
      formNote.textContent = "من فضلك أكمل جميع الحقول بشكل صحيح.";
      formNote.style.color = "#f87171";
      return;
    }

    formNote.style.color = "";
    formNote.textContent = "تم إرسال رسالتك بنجاح، سأتواصل معك في أقرب وقت ممكن.";
    contactForm.reset();

    window.setTimeout(() => {
      formNote.textContent = "";
    }, 6000);
  });
})();

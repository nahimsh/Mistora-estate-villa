/**
 * Mistora Estate Villa — Site Interactions
 * Vanilla ES6, no dependencies.
 */
(() => {
  "use strict";

  /* ---------- Sticky header ---------- */
  const header = document.querySelector(".site-header");
  const hasHero = !document.body.classList.contains("no-hero");
  const onScroll = () => {
    if (!hasHero) return;
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.getElementById("main-nav");

  const closeMenu = () => {
    header.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };
  const openMenu = () => {
    header.classList.add("menu-open");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  navToggle?.addEventListener("click", () => {
    header.classList.contains("menu-open") ? closeMenu() : openMenu();
  });

  mainNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  /* ---------- Scroll reveal animations ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Back to top ---------- */
  const backToTop = document.querySelector(".back-to-top");
  const toggleBackToTop = () => {
    backToTop?.classList.toggle("is-visible", window.scrollY > 640);
  };
  document.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();
  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- Gallery lightbox ---------- */
  const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = lightbox?.querySelector("img");
  const lightboxCaption = lightbox?.querySelector(".lightbox-caption");
  let currentIndex = 0;

  const showImage = (index) => {
    currentIndex = (index + galleryItems.length) % galleryItems.length;
    const item = galleryItems[currentIndex];
    const img = item.querySelector("img");
    const caption = item.querySelector("figcaption");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = caption ? caption.textContent : img.alt;
  };

  const openLightbox = (index) => {
    showImage(index);
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
    lightbox.querySelector(".lightbox-close")?.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  galleryItems.forEach((item, index) => {
    item.style.cursor = "zoom-in";
    item.setAttribute("tabindex", "0");
    item.setAttribute("role", "button");
    item.setAttribute("aria-label", "Open image in full screen");
    item.addEventListener("click", () => openLightbox(index));
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(index);
      }
    });
  });

  lightbox?.querySelector(".lightbox-close")?.addEventListener("click", closeLightbox);
  lightbox?.querySelector(".lightbox-prev")?.addEventListener("click", () => showImage(currentIndex - 1));
  lightbox?.querySelector(".lightbox-next")?.addEventListener("click", () => showImage(currentIndex + 1));
  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox?.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showImage(currentIndex + 1);
    if (e.key === "ArrowLeft") showImage(currentIndex - 1);
  });

  /* ---------- Reviews carousel controls ---------- */
  const reviewTrack = document.querySelector(".review-track");
  const prevBtn = document.querySelector(".review-controls .prev");
  const nextBtn = document.querySelector(".review-controls .next");
  const scrollByCard = (direction) => {
    if (!reviewTrack) return;
    const card = reviewTrack.querySelector(".review-card");
    const distance = card ? card.getBoundingClientRect().width + 24 : 320;
    reviewTrack.scrollBy({ left: distance * direction, behavior: "smooth" });
  };
  prevBtn?.addEventListener("click", () => scrollByCard(-1));
  nextBtn?.addEventListener("click", () => scrollByCard(1));

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

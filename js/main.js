// Santa's Magic Footprints — site behavior

// Ordering is on hold for the 2026 season. Flip to false to resume checkout
// once Stripe is wired up and ready to reopen.
const ORDERING_PAUSED = true;

// TODO: Replace each placeholder below with the real Stripe Payment Link
// for that product (Stripe Dashboard -> Payment Links). Each link already
// supports a quantity adjuster on Stripe's hosted checkout page, so no
// backend is required for this static site.
const STRIPE_PAYMENT_LINKS = {
  santa: "https://buy.stripe.com/REPLACE_WITH_SANTA_LINK",
  elf: "https://buy.stripe.com/REPLACE_WITH_ELF_LINK",
  reindeer: "https://buy.stripe.com/REPLACE_WITH_REINDEER_LINK",
  bundle: "https://buy.stripe.com/REPLACE_WITH_BUNDLE_LINK",
  fairy: "https://buy.stripe.com/REPLACE_WITH_FAIRY_LINK",
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initMobileNav();
  initGallery();
  initAddToCart();
  initContactForm();
  initFaqAccordion();
  initScrollReveal();
  if (!prefersReducedMotion) initSnow();
});

function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  if (!toggle || !mobileNav) return;
  toggle.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    toggle.textContent = open ? "✕" : "☰";
    toggle.setAttribute("aria-expanded", String(open));
  });
}

function initGallery() {
  const mainImg = document.querySelector(".gallery-main img");
  const thumbs = document.querySelectorAll(".gallery-thumbs img");
  if (!mainImg || !thumbs.length) return;
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      if (thumb.classList.contains("active")) return;
      mainImg.style.opacity = "0";
      window.setTimeout(() => {
        mainImg.src = thumb.src;
        mainImg.alt = thumb.alt;
        mainImg.style.opacity = "1";
      }, 150);
      thumbs.forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });
}

function initAddToCart() {
  const button = document.querySelector(".add-to-cart");
  if (!button) return;

  if (ORDERING_PAUSED) {
    const qtyInput = document.querySelector(".qty-input");
    button.textContent = "Ordering Paused";
    button.disabled = true;
    if (qtyInput) qtyInput.disabled = true;

    const note = document.createElement("p");
    note.className = "order-paused-note";
    note.textContent =
      "Ordering for 2026 has been put on hold — we'll be back in the New Year!";
    button.closest(".buy-box")?.insertAdjacentElement("afterend", note);
    return;
  }

  const product = button.dataset.product;
  button.addEventListener("click", () => {
    const link = STRIPE_PAYMENT_LINKS[product];
    if (!link || link.includes("REPLACE_WITH")) {
      alert(
        "This product isn't connected to Stripe yet. Add the real Stripe Payment Link in js/main.js before launch."
      );
      return;
    }
    const qtyInput = document.querySelector(".qty-input");
    const qty = qtyInput ? Math.max(1, parseInt(qtyInput.value, 10) || 1) : 1;
    window.location.href = `${link}?quantity=${qty}`;
  });
}

function initContactForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;
  const status = form.querySelector(".form-status");
  const submitBtn = form.querySelector("button[type=submit]");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const accessKey = form.querySelector('[name="access_key"]')?.value;
    if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
      if (status) {
        status.textContent =
          "This form isn't connected yet — add your Web3Forms access key in contact.html.";
      }
      return;
    }

    if (submitBtn) submitBtn.disabled = true;
    if (status) status.textContent = "Sending...";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        if (status) status.textContent = "Thanks! Your message has been sent.";
        form.reset();
      } else {
        if (status)
          status.textContent =
            "Something went wrong sending that — please try again or call us instead.";
      }
    } catch (err) {
      if (status)
        status.textContent =
          "Something went wrong sending that — please try again or call us instead.";
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

function initFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");
  if (!items.length) return;
  items.forEach((item, index) => {
    const question = item.querySelector(".question");
    if (!question) return;
    question.setAttribute("role", "button");
    question.setAttribute("tabindex", "0");
    const toggle = () => item.classList.toggle("open");
    question.addEventListener("click", toggle);
    question.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
    if (index === 0) item.classList.add("open");
  });
}

function initScrollReveal() {
  const targets = document.querySelectorAll(
    ".hero-content, .section-label, .page-intro, .product-card, .text-page img, .text-page p, .text-page blockquote, .product-layout, .faq-item, .contact-form"
  );
  if (!targets.length) return;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("reveal", "is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${Math.min(i % 4, 3) * 80}ms`;
    observer.observe(el);
  });
}

function initSnow() {
  const canvas = document.createElement("canvas");
  canvas.id = "snow-canvas";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  let width, height, flakes;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function makeFlakes() {
    const count = Math.round((width * height) / 34000);
    flakes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.6,
      speed: Math.random() * 0.5 + 0.15,
      drift: Math.random() * 0.4 - 0.2,
      alpha: Math.random() * 0.4 + 0.25,
    }));
  }

  resize();
  makeFlakes();
  window.addEventListener("resize", () => {
    resize();
    makeFlakes();
  });

  function tick() {
    ctx.clearRect(0, 0, width, height);
    for (const flake of flakes) {
      ctx.beginPath();
      ctx.fillStyle = `rgba(247,241,230,${flake.alpha})`;
      ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
      ctx.fill();
      flake.y += flake.speed;
      flake.x += flake.drift;
      if (flake.y > height + 4) {
        flake.y = -4;
        flake.x = Math.random() * width;
      }
      if (flake.x > width + 4) flake.x = -4;
      if (flake.x < -4) flake.x = width + 4;
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

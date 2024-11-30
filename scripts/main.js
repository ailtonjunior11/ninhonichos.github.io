// Config menu mobile
let btnMenu = document.getElementById("btn-menu");
let menuMobile = document.getElementById("menu-mobile");
let overlayMenu = document.getElementById("overlay-menu");

// Adicionando classe
btnMenu.addEventListener("click", () => {
  menuMobile.classList.add("abrir-menu");
});

// Removendo classe
menuMobile.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu");
});

overlayMenu.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu");
});

// =================================================================================

// Config slider
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

// =================================================================================

// Config scroll reveal
window.sr = ScrollReveal({ reset: true });

sr.reveal(".home__container", { distance: "100px", duration: 1700 });

sr.reveal(".home__logo", {
  distance: "20px",
  origin: "top",
  opacity: 0,
  duration: 1500,
  delay: 400,
  rotate: {
    x: 220,
    z: 0,
  },
});

sr.reveal("#card-left", {
  distance: "120px",
  origin: "top",
  opacity: 0,
  duration: 1300,
  delay: 300,
});

sr.reveal("#card-right", {
  distance: "120px",
  origin: "bottom",
  opacity: 0,
  duration: 1300,
  delay: 300,
});

sr.reveal(".products__cards", {
  distance: "50px",
  opacity: 0,
  delay: 300,
  duration: 1200,
});

sr.reveal(".swiper-wrapper", {
  opacity: 0,
  duration: 1200,
  delay: 300,
});

sr.reveal(".contacts__container", {
  opacity: 0,
  origin: "top",
  distance: "50px",
  delay: 300,
  duration: 1200,
});

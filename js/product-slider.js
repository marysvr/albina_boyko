document.addEventListener("DOMContentLoaded", () => {
  const sliderEl = document.querySelector(".product__slider");
  if (!sliderEl || typeof Swiper === "undefined") return;

  new Swiper(sliderEl, {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    grabCursor: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: ".product__slider-button--prev",
      nextEl: ".product__slider-button--next",
    },
  });
});

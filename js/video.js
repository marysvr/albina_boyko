document.addEventListener("DOMContentLoaded", () => {
  // Инициализация слайдера
  if (
    document.querySelector(".video__slider") &&
    typeof Swiper !== "undefined"
  ) {
    new Swiper(".video__slider", {
      navigation: {
        nextEl: ".product--video .product__slider-button--next",
        prevEl: ".product--video .product__slider-button--prev",
      },
      slidesPerView: 1,
      spaceBetween: 20,
    });
  }

  // Клик по превью — получаем прямую ссылку и вставляем видео
  document.querySelectorAll(".video__preview").forEach((preview) => {
    preview.addEventListener("click", async () => {
      const yandexUrl = preview.dataset.yandex;
      if (!yandexUrl) return;

      // Защита от повторных кликов
      if (preview.dataset.loading === "true") return;
      preview.dataset.loading = "true";

      try {
        // Запрос к API Яндекс.Диска для получения прямой ссылки
        const apiUrl = `https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key=${encodeURIComponent(yandexUrl)}`;
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (!data.href) {
          throw new Error("API не вернул ссылку на видео");
        }

        // Заменяем превью на видео-плеер
        preview.innerHTML = `
          <video
            src="${data.href}"
            controls
            autoplay
            playsinline
            style="position:absolute; inset:0; width:100%; height:100%; background:#000; object-fit:contain;"
          ></video>
        `;
      } catch (err) {
        console.error("Ошибка загрузки видео:", err);
        alert("Не удалось загрузить видео. Открываю в новой вкладке.");
        window.open(yandexUrl, "_blank");
        preview.dataset.loading = "false";
      }
    });
  });
});

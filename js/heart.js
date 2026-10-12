document.addEventListener("DOMContentLoaded", function () {
  const heartBtn = document.getElementById("heartBtn");
  const heartIcon = heartBtn.querySelector(".heart-icon");
  const heartsContainer = document.getElementById("heartsContainer");
  let isLiked = false;
  let heartTimeout;

  // Функция создания падающих сердец
  function createFallingHearts(x, y) {
    const heartSymbols = ["♥", "❤", "💕", "💗", "💖", "❤️"];
    const count = 20; // Количество сердец

    for (let i = 0; i < count; i++) {
      const heart = document.createElement("div");
      heart.className = "falling-heart";

      // Случайный символ сердца
      heart.textContent =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

      // Случайный размер
      const size = Math.random() * 3 + 1;
      const sizeClasses = ["small", "medium", "large"];
      heart.classList.add(
        sizeClasses[Math.floor(Math.random() * sizeClasses.length)],
      );

      // Случайное начальное положение (относительно кнопки)
      const offsetX = (Math.random() - 0.5) * 150;
      const offsetY = (Math.random() - 0.5) * 50;

      heart.style.left = x + offsetX + "px";
      heart.style.top = y + offsetY + "px";

      // Случайная длительность анимации
      const duration = Math.random() * 2 + 2; // от 2 до 4 секунд
      heart.style.animationDuration = duration + "s";

      // Случайная задержка
      const delay = Math.random() * 0.5;
      heart.style.animationDelay = delay + "s";

      // Случайный поворот
      const rotation = Math.random() * 360;
      heart.style.setProperty("--rotation", rotation + "deg");

      heartsContainer.appendChild(heart);

      // Удаляем сердце после окончания анимации
      setTimeout(
        () => {
          heart.remove();
        },
        (duration + delay) * 1000 + 500,
      );
    }
  }

  // Обработчик клика по сердцу
  heartBtn.addEventListener("click", function (e) {
    // Получаем позицию кнопки
    const rect = heartBtn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Переключаем состояние
    isLiked = !isLiked;

    if (isLiked) {
      // Заполняем сердце
      heartIcon.classList.add("active");

      // Создаем дождь из сердец
      createFallingHearts(x, y);
    } else {
      // Убираем заполнение
      heartIcon.classList.remove("active");
    }
  });

  // Добавляем hover эффект для "пульсации"
  heartBtn.addEventListener("mouseenter", function () {
    if (!isLiked) {
      heartIcon.style.transform = "scale(1.1)";
    }
  });

  heartBtn.addEventListener("mouseleave", function () {
    if (!isLiked) {
      heartIcon.style.transform = "scale(1)";
    }
  });
});

// Дополнительный эффект - при двойном клике везде на странице
document.addEventListener("dblclick", function (e) {
  const heartsContainer = document.getElementById("heartsContainer");

  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.className = "falling-heart";
    heart.textContent = ["♥", "❤", "💕", "💗", "💖", "❤️"][
      Math.floor(Math.random() * 6)
    ];

    const sizeClasses = ["small", "medium", "large"];
    heart.classList.add(
      sizeClasses[Math.floor(Math.random() * sizeClasses.length)],
    );

    heart.style.left = e.clientX + (Math.random() - 0.5) * 200 + "px";
    heart.style.top = e.clientY + (Math.random() - 0.5) * 200 + "px";

    const duration = Math.random() * 2 + 2;
    heart.style.animationDuration = duration + "s";
    heart.style.animationDelay = Math.random() * 0.5 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(
      () => {
        heart.remove();
      },
      (duration + 0.5) * 1000 + 500,
    );
  }
});

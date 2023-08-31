// Подождем, пока документ полностью загрузится
document.addEventListener("DOMContentLoaded", function() {
    // Получаем ссылки на все элементы меню
    const menuLinks = document.querySelectorAll(".nav-link");
  
    // Добавляем обработчик события для каждой ссылки меню
    menuLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        // Отменяем стандартное поведение ссылки
        event.preventDefault();
  
        // Получаем атрибут href ссылки и находим соответствующий элемент на странице
        const target = document.querySelector(this.getAttribute("href"));
  
        // Прокручиваем страницу к выбранному элементу
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });
  });
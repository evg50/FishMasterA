// Получаем элементы бургер-меню и мобильного меню
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

// Обрабатываем клик по бургер-меню
burgerMenu.addEventListener('click', () => {
	// Добавляем/удаляем класс "active" для мобильного меню
	mobileMenu.classList.toggle('active');
});

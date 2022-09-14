let body = document.querySelector('body');
let menu = document.querySelector('.nav');
let menuItemLink = document.querySelectorAll('.nav-link');
let menuBtn = document.querySelector('.nav-btn');
let headerHeight = document.querySelector('.header').offsetHeight;
let getinBtn = document.querySelectorAll('.getin-item__btn');
let footerBtn = document.querySelector('.footer-btn');

// Инициализация анимаций
AOS.init();

// Показать / скрыть меню
function menuToggle() {
	menu.classList.toggle('toggle');
	menuBtn.classList.toggle('toggle');
	body.classList.toggle('toggle');
}

// Показать / скрыть меню по клику на кнопку
menuBtn.addEventListener("click", menuToggle);

// По клику на пункт меню проверяем, есть ли у меню класс toggle. Если да, удаляем для body, menu и menuBtn класс toggle
menuItemLink.forEach(element => {
	element.addEventListener("click", function () {
		if (menu.classList.contains('toggle')) {
			menuToggle();
		}
	});
});

$('a[href*="#"]').on("click", function (e) {
	let headerHeight = document.querySelector('.header').offsetHeight;
	e.preventDefault();
	let anchor = $(this).attr('href');
	$('html, body').stop().animate({
		scrollTop: $(anchor).offset().top - headerHeight
	}, 800);
});

getinBtn.forEach(function (element) {
	element.addEventListener("click", function () {
		$(this).next().stop().slideToggle(500);
	});
});

footerBtn.addEventListener("click", function () {
	$(this).prev().stop().slideToggle(500);
});


// Плавная прокрутка до якоря
// const anchors = document.querySelectorAll('a[href*="#"]');
// for (let anchor of anchors) {
// 	anchor.addEventListener('click', function (e) {
// 		e.preventDefault();
// 		const blockID = anchor.getAttribute('href').substr(1);
// 		document.getElementById(blockID).scrollIntoView({
// 			behavior: 'smooth',
// 			block: 'start'
// 		});
// 	});
// };
const btnOption = document.querySelector('.country__option'); // кнопка для вызова списка стран
const wrapperCountry = document.querySelector('.country__wrapper'); // враппер со списком стран
const btnCountry = document.querySelectorAll('.country__btn'); // враппер со списком стран




// Функция для переключения выпадашки
function wrapperCountryToggle() {
    wrapperCountry.classList.toggle('toggle');
}

// Скрыть выпадашку по клику на btnOption
btnOption.addEventListener("click", wrapperCountryToggle);

// Скрыть выпадашку по клику на страну
// btnCountry.forEach( function (element) {
//     element.addEventListener("click", function () {
//         wrapperCountryToggle();
//     });
// });

// Скрыть выпадашку по клику на страну - еще один способ
wrapperCountry.addEventListener("click", function (e) {
    if (e.target.classList.contains('country__btn')) {
        wrapperCountryToggle();
        // showPrice(target.dataset.currency);
    }
});


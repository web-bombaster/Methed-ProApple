const btnModal = document.querySelectorAll('.sj-modal'); // кнопки для вызова модалок
const body = document.querySelector('body'); // необходима для запрета скролла при открытом модальном окне
const overlay = document.querySelector('.overlay'); // подложка ждя модалок
const modalCloseBtn = document.querySelector('.modal__close-btn'); // кнопка закрытия модального окна
const modal = document.querySelector('.modal'); // кнопка закрытия модального окна


// По клику на кнопку вызова мольного окна .sj-modal
// в dataPath считываем у кнопки data-path отрибут => form-popup
// записываем в modal нужную модалку, у которой data-target равен dataPath
// переключаем класс toggle для модального окна, оверлея и body
btnModal.forEach(element => {
    element.addEventListener("click", function () {
        const dataPath = this.getAttribute('data-path');
        const modal = document.querySelector(`[data-target="${dataPath}"]`);

        modal.classList.add('toggle');
        body.classList.toggle('toggle');
        overlay.classList.toggle('toggle');
    });
});

// Функция для скрытия модалки
function modalClose() {
    body.classList.toggle('toggle');
    overlay.classList.toggle('toggle');
    const modal = document.querySelector('.modal.toggle');
    modal.classList.toggle('toggle');
}

// Скрыть модалку по кнопке modalCloseBtn
modalCloseBtn.addEventListener("click", modalClose);

// Скрыть модалку по щелчку вне модального окна
modal.addEventListener("click", function (e) {
    if (e.target == modal) {
        modalClose();
    }
});
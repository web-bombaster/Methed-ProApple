// плавная прокрутка на jq
$('a[href*="#"]').on("click", function (e) {
    let headerHeight = document.querySelector('.header').offsetHeight;
    e.preventDefault();
    let anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - headerHeight
    }, 800);
});
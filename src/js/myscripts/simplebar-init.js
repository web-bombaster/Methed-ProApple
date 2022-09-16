new SimpleBar(document.querySelector('.country__list'), {
    classNames: {
        scrollbar: 'country__scrollbar',
        track: 'country__track'
    }
});

// Array.prototype.forEach.call(
//     document.querySelectorAll('.country__list'),
//     el => new SimpleBar()
// );
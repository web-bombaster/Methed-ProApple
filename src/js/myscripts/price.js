const dataCurrency = {};

const formatCurrency = (value, currency) => {
    return new Intl.NumberFormat('EU', {
        style: 'currency',
        currency,
        maximumFractionDigits: 2,
    }).format(value)
};

const showPrice = (currency = 'USD') => {
    const priceElems = document.querySelectorAll('[data-price]');

    priceElems.forEach(elem => {
        elem.textContent = formatCurrency(elem.dataset.price * dataCurrency[currency], currency);
    });
};


const myHeaders = new Headers();
myHeaders.append("apikey", "eVSm1rNljjjvt0EBhdfDsV7JImlYXKyH");

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

fetch("https://api.apilayer.com/fixer/latest?base=USD", requestOptions)
    .then(response => response.json())
    .then(result => {
        Object.assign(dataCurrency, result.rates)
        showPrice();
    })
    .catch(error => console.log('error', error));


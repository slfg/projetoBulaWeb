const url = 'https://api.fda.gov/drug/drugsfda.json?search=products.active_ingredients.name:'

const searchInput = getElement('.search-input'),
    searchButton = getElement('.search-button'),
    container = getElement('.datamed'),
    erroMessage = getElement('.error');

let element = document.getElementById('info')

var medic,
    datamed,
    card;

function getElement(element) {
    return document.querySelector(element);
}

function requestMedInfo(url, name) {
    fetch(url + name)
        .then(response => response.json())
        .then(data => {
            datamed = data;
        })
        .catch(err => console.log(err));
}

function createCard() {
    element.innerHTML = `
            <div class="boxInfo">
            <span id="just-line-break" style="font-family:Montserrat-Bold"> Brand Name: \n</span>
            <span id="just-line-break" style="font-family:Montserrat"> ${datamed.results[0].products[0].brand_name} \n \n </span>
            <span id="just-line-break" style="font-family:Montserrat-Bold">Marketing Status: \n</span> 
            <span id="just-line-break" style="font-family:Montserrat"> ${datamed.results[0].products[0].marketing_status}\n \n </span>
            <span id="just-line-break" style="font-family:Montserrat-Bold"> Strength of Medication: \n</span>
            <span id="just-line-break" style="font-family:Montserrat"> ${datamed.results[0].products[0].active_ingredients[0].strength}\n \n </span>
            <span id="just-line-break" style="font-family:Montserrat-Bold"> Route of Medication: \n</span>
            <span id="just-line-break" style="font-family:Montserrat"> ${datamed.results[0].products[0].route}\n \n </span>
            <span id="just-line-break" style="font-family:Montserrat-Bold"> Dosage Form: \n</span>
            <span id="just-line-break" style="font-family:Montserrat"> ${datamed.results[0].products[0].dosage_form} \n</span></div>`;
    return card;
}

function startApp(medic) {
    requestMedInfo(url, medic);

    setTimeout(function() {
        container.innerHTML = createCard();
    }, 2000);
}

searchButton.addEventListener('click', event => {
    event.preventDefault();
    medic = searchInput.value.toLowerCase();
    startApp(medic);
});
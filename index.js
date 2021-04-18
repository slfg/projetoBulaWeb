const url = 'https://api.fda.gov/drug/drugsfda.json?search=products.active_ingredients.name:'

const searchInput = getElement('.form-control'),
    searchButton = getElement('.btn.btn-primary'), // Essa parte do código é qual a classe
    container = getElement('.datamed'), // que o backend (no caso esse arquivo) vai ler para enviar para a API
    erroMessage = getElement('.error');


let element = document.getElementById('info')

var medic,
    datamed,
    card,
    idioma = {
        eng: {
            titulo: "Digital Medicine Leaflet",
            intro: "The digital medicine leaflet is designed to simplify and share the most relevant information of medications in a simple way and easy to understand!",
            searchbutton: "Search",
            searchinput: "Insert the medication name",
            error: "Nothing found",
            dropdownMenuLink: "Language"
        }
    },
    f5 = document.querySelectorAll("[f5]");

if (window.location.hash) {
    if (window.location.hash === "#eng") {
        intro.textContent = idioma.eng.intro
        titulo.textContent = idioma.eng.titulo
        searchButton.textContent = idioma.eng.searchbutton
        searchinput.placeholder = idioma.eng.searchinput
        dropdownMenuLink.textContent = idioma.eng.dropdownMenuLink
    }
}

window.onhashchange = function() {
    location.reload();
};

function getElement(element) {
    return document.querySelector(element);
}

function requestMedInfo(url, name) {
    fetch(url + name)
        .then(response => response.json()) //Essa parte é a parte que faz a chamada do
        .then(data => { //Input do usuário para a API
            datamed = data;
        })
        .catch(err => console.log(err));
}

function createCard() { // Essa parte é onde é postado no HTML as informações do remédio, como podem ver é uma mistura de html com javascript (html para a formatação, js para mostrar as informaçÕes)
    if (datamed.results == null) {
        if (window.location.hash) {
            if (window.location.hash === "#eng") {
                element.innerHTML = `
            <div class="boxInfo"><span id="just-line-break" style="font-size:30px">⚠\n</span><span id="error" style="font-family:Montserrat-Bold">Nothing Found</span></div>`
            } else {
                element.innerHTML = `
            <div class="boxInfo"><span id="just-line-break" style="font-size:30px">⚠\n</span><span id="error" style="font-family:Montserrat-Bold">Nada encontrado</span></div>`
            }
        } else {
            element.innerHTML = `
        <div class="boxInfo"><span id="just-line-break" style="font-size:30px">⚠\n</span><span id="error" style="font-family:Montserrat-Bold">Nada encontrado</span></div>`
        }
    } else {
        if (window.location.hash) {
            if (window.location.hash === "#eng") {
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
            } else {
                element.innerHTML = `
            <div class="boxInfo">
            <span id="just-line-break" style="font-family:Montserrat-Bold"> Nome Comercial: \n</span>
            <span id="just-line-break" style="font-family:Montserrat"> ${datamed.results[0].products[0].brand_name} \n \n </span>
            <span id="just-line-break" style="font-family:Montserrat-Bold">Status comercial: \n</span> 
            <span id="just-line-break" style="font-family:Montserrat"> ${datamed.results[0].products[0].marketing_status}\n \n </span>
            <span id="just-line-break" style="font-family:Montserrat-Bold"> Força da medicação: \n</span>
            <span id="just-line-break" style="font-family:Montserrat"> ${datamed.results[0].products[0].active_ingredients[0].strength}\n \n </span>
            <span id="just-line-break" style="font-family:Montserrat-Bold"> Forma de ingerir: \n</span>
            <span id="just-line-break" style="font-family:Montserrat"> ${datamed.results[0].products[0].route}\n \n </span>
            <span id="just-line-break" style="font-family:Montserrat-Bold"> Forma de dosagem: \n</span>
            <span id="just-line-break" style="font-family:Montserrat"> ${datamed.results[0].products[0].dosage_form} \n</span></div>`;
            }
        } else {
            element.innerHTML = `
            <div class="boxInfo">
            <span id="just-line-break" style="font-family:Montserrat-Bold"> Nome Comercial: \n</span>
            <span id="just-line-break" style="font-family:Montserrat"> ${datamed.results[0].products[0].brand_name} \n \n </span>
            <span id="just-line-break" style="font-family:Montserrat-Bold">Status comercial: \n</span> 
            <span id="just-line-break" style="font-family:Montserrat"> ${datamed.results[0].products[0].marketing_status}\n \n </span>
            <span id="just-line-break" style="font-family:Montserrat-Bold"> Força da medicação: \n</span>
            <span id="just-line-break" style="font-family:Montserrat"> ${datamed.results[0].products[0].active_ingredients[0].strength}\n \n </span>
            <span id="just-line-break" style="font-family:Montserrat-Bold"> Forma de ingerir: \n</span>
            <span id="just-line-break" style="font-family:Montserrat"> ${datamed.results[0].products[0].route}\n \n </span>
            <span id="just-line-break" style="font-family:Montserrat-Bold"> Forma de dosagem: \n</span>
            <span id="just-line-break" style="font-family:Montserrat"> ${datamed.results[0].products[0].dosage_form} \n</span></div>`;
        }
    }
}

function startApp(medic) {
    requestMedInfo(url, medic);

    setTimeout(function() { // Eu criei essa parte apenas para dar um timeout
        container.innerHTML = createCard();
    }, 2000);
}

searchButton.addEventListener('click', event => {
    event.preventDefault(); //Essa parte é responsável pela funcionalidade do botão search
    medic = searchInput.value.toLowerCase();
    startApp(medic);
});
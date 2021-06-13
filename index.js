const url = 'http://localhost:8080/meds/princ/'

const searchInput = getElement('.form-control'),
    searchButton = getElement('.btn.btn-primary'), // Essa parte do código é qual a classe
    container = getElement('.datamed'), // que o backend (no caso esse arquivo) vai ler para enviar para a API
    erroMessage = getElement('.error');


let element = document.getElementById('info')

var medic,
    datamed,
    card,
    num = 0;

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
                <span id="just-line-break" style="font-family:Montserrat-Bold"> Produto: \n</span>
                <span id="just-line-break" style="font-family:Montserrat">${datamed[num].prodWithConc} \n \n</span>
                <span id="just-line-break" style="font-family:Montserrat-Bold"> Apresentação: \n</span>
                <span id="just-line-break" style="font-family:Montserrat">${datamed[num].tx_apres} \n \n</span>  
                <span id="just-line-break" style="font-family:Montserrat-Bold"> Classe terapêutica: \n</span>
                <span id="just-line-break" style="font-family:Montserrat">${datamed[num].tx_class_terap} \n \n</span>
                <span id="just-line-break" style="font-family:Montserrat-Bold"> Tarja: \n</span>
                <span id="just-line-break" style="font-family:Montserrat">${datamed[num].tx_tarja} \n \n</span>
                <button class="borderlessButton" onclick='prevMed()'>◀</button>
                <span id="just-line-break" style="font-family:Montserrat">${num}</span>
                <button class="borderlessButton" onclick='num++; createCard()'>▶</button>`
    return card;
}

function prevMed() {
    if (num >= 0) {
        num--;
        createCard()
    } else {
        num = 0;
    }
}

function startApp(medic) {
    requestMedInfo(url, medic);

    setTimeout(function() {
        container.innerHTML = createCard();
    }, 1000);
}

searchButton.addEventListener('click', event => {
    event.preventDefault();
    medic = searchInput.value.toLowerCase();
    startApp(medic);
});
'use strict';

let allsymbols = "",
    password = "";

const passlength = document.querySelector('#length').value,
    form = document.querySelector('form');

const passIngridients = {
    nums: "1234567890",
    letters: "qwertyuiopasdfghjklzxcvbnm",
    upletters: "QWERTYUIOPASDFGHJKLZXCVBNM",
    symbols: "!$%#&*-+"
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    document.querySelectorAll('input[type=checkbox]').forEach(function (elem) {
        allsymbols = "";

        if (elem.checked) {
            Object.keys(passIngridients).forEach(function (key) {

                if (key == elem.name) {
                    console.log(`Добавляем...${elem.name}`);
                    allsymbols += passIngridients[key];
                    console.log(allsymbols);
                }
            });
        }
    });

    if (allsymbols == "") {
        console.log('Error');
    }

    randomPassword();

    resp();

});


function randomPassword() {

    password = "";

    for (let i = 0; i <= passlength; i++) {

        let pickRandomSymbols = function (symbol) {
            return symbol[Math.floor(Math.random() * symbol.length)]
        }

        password += pickRandomSymbols(allsymbols);
    }

    console.log(password);
    return password;
}

function resp() {
    // document.querySelector('span').remove();

    let resp = document.createElement('span');
    // resp.classList.add('response');
    resp.textContent = password;
    form.append(resp);
}
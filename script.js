'use strict';

let allsymbols = '', passlength, password;

const form = document.querySelector('form');

const passIngridients = {
    nums: "1234567890",
    letters: "qwertyuiopasdfghjklzxcvbnm",
    upletters: "QWERTYUIOPASDFGHJKLZXCVBNM",
    symbols: "!$%#&*-+"
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    passlength = document.querySelector('#length').value;

    document.querySelectorAll('input[type=checkbox]').forEach(function (elem) {

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
        password = 'Ошибка';
        return result();
    }

    randomPassword();
    allsymbols = "";
    result();

});


function randomPassword() {

    password = "";

    for (let i = 0; i <= passlength - 1; i++) {

        let pickRandomSymbols = function (symbol) {
            return symbol[Math.floor(Math.random() * symbol.length)]
        }

        password += pickRandomSymbols(allsymbols);
    }

    console.log(password);
    return password;
}

const resp = document.querySelector('.response');

function result() {
    resp.value = '';
    resp.value = password;
}

const btn = document.getElementById("copyText");

btn.addEventListener('click', () => {
    resp.select();
    document.execCommand("copy");
});
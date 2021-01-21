'use strict';

let allsymbols = '', passlength, password;

const form = document.querySelector('form'),
    resp = document.querySelector('.result'),
    btn = document.getElementById("copyText"),
    passIngridients = {
        nums: "1234567890",
        letters: "qwertyuiopasdfghjklzxcvbnm",
        upletters: "QWERTYUIOPASDFGHJKLZXCVBNM",
        symbols: "!@$%^#&*-+"
    };

// input type number 
document.querySelector('.input-number__minus').addEventListener('click', () => {
    passlength = document.querySelector('#length').value;
    if (passlength > 4) {
        document.querySelector('#length').value = +passlength - 1;
    }
});

document.querySelector('.input-number__plus').addEventListener('click', () => {
    passlength = document.querySelector('#length').value;
    if (passlength < 20) {
        document.querySelector('#length').value = +passlength + 1;
    }
});

document.querySelectorAll('.input-number__input').forEach(function (el) {
    el.addEventListener('input', function () {
        this.value = this.value.replace(/[^\d]/g, '');
    });
});

// create password
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
        return showResult();
    }

    createPassword();
    resetAll();
    showResult();

});

//copy password
btn.addEventListener('click', () => {
    resp.select();
    document.execCommand("copy");
    btn.innerText = "Скопировано!";
});

function createPassword() {

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

function showResult() {
    resp.value = '';
    resp.value = password;
}

function resetAll() {
    btn.innerText = "Копировать";
    allsymbols = "";
}

'use strict';

let allsymbols = '', password;

const form = document.querySelector('form'),
    cbxs = document.querySelectorAll('input[type=checkbox]'),
    passlength = document.querySelector('#length'),
    resp = document.querySelector('.result'),
    btn = document.getElementById("copyText"),
    passIngridients = {
        nums: "1234567890",
        letters: "qwertyuiopasdfghjklzxcvbnm",
        upletters: "QWERTYUIOPASDFGHJKLZXCVBNM",
        symbols: "!@$%^#&*-+"
    };
    const pattern = /(?=.*\d)(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*[~'`!@#№?$%^&*()=+<>|\/\\.,:;\[\]{} \x22-]).{8,25}/g;

// checkboxes
cbxs.forEach(function (cbx) {
    cbx.addEventListener('change', () => {

        let amountOfChecked = document.querySelectorAll('input[type=checkbox]:checked').length;

        if (amountOfChecked > 0) {
            document.querySelector('.form__btn').removeAttribute('disabled');
        } else {
            document.querySelector('.form__btn').setAttribute('disabled', 'disabled');
        }
    });
});

// input type number 
document.querySelector('.input-number__minus').addEventListener('click', () => {
    if (passlength.value > 4) {
        passlength.value = +passlength.value - 1;
    }
});

document.querySelector('.input-number__plus').addEventListener('click', () => {
    if (passlength.value < 20) {
        passlength.value = +passlength.value + 1;
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

    cbxs.forEach(function (elem) {

        if (elem.checked) {
            Object.keys(passIngridients).forEach(function (key) {
                if (key == elem.name) {
                    allsymbols += passIngridients[key];
                }
            });
        }
    });

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

// check password
function checkPassword() {
    
    console.log(password, Boolean(password.match(pattern)))
   return Boolean(password.match(pattern));
}

function createPassword() {

    password = "";

    for (let i = 0; i <= passlength.value - 1; i++) {

        let pickRandomSymbols = function (symbol) {
            return symbol[Math.floor(Math.random() * symbol.length)]
        }

        password += pickRandomSymbols(allsymbols);
    }
    if (!checkPassword()) createPassword();
    return password;
}

function showResult() {
    resp.value = '';
    resp.value = password;
    resp.removeAttribute('disabled');
    btn.removeAttribute('disabled');
}

function resetAll() {

    btn.innerText = "Копировать";
    allsymbols = "";
}

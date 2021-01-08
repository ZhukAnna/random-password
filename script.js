'use strict';

const allsymbols = "",
    nums = "1234567890",
    letters = "qwertyuiopasdfghjklzxcvbnm",
    upletters = "QWERTYUIOPASDFGHJKLZXCVBNM",
    symbols = "!$%#&*-+";

function randomPassword() {

    let password = "";

    for (i = 0; i <= length; i++) {

        let pickRandomSymbols = function (symbol) {
            return symbol[Math.floor(Math.random() * symbol.length)]
        }

        password += pickRandomSymbols(allsymbols);
    }

    return password;
}


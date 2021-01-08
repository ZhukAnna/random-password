'use strict';

const pass = {
    allsymbols: "",
    length: 1,
    nums: "1234567890",
    letters: "qwertyuiopasdfghjklzxcvbnm",
    upletters: "QWERTYUIOPASDFGHJKLZXCVBNM",
    symbols: "!$%#&*-+",

    randomPassword: function () {

        let password = "";

        for (i = 0; i <= pass.length; i++) {

            let pickRandomSymbols = function (symbol) {
                return symbol[Math.floor(Math.random() * symbol.length)]
            }

            password += pickRandomSymbols(allsymbols);
        }

        return password;
    }
}

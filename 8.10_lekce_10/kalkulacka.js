document.addEventListener("DOMContentLoaded", function() {
        let tlacitko = document.getElementById("tlacitko");
        let zaklad = document.getElementById("zaklad");
        let exp = document.getElementById("exp");
        let vysledek = document.getElementById("vysledek");

        tlacitko.addEventListener("click", function() {
        let zakladFloat = parseFloat(zaklad.value);
        let expFloat = parseFloat(exp.value);

        if (expFloat > 100 || expFloat < -100 || isNaN(zakladFloat) || isNaN(expFloat)) {
                vysledek.textContent = "Jsi blazen"
        }
        else {
            let mocnina = Math.pow(parseFloat(zaklad.value), parseFloat(exp.value));
            vysledek.textContent = "Vysledek: " + mocnina;
        }
    })
})
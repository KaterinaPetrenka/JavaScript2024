'use strict';

class Firma {

    constructor(nazev, ico, sidlo, zamestnanci) {
        this.nazev = "Nazev firmy";
        this.ico = "00000000";
        this.sidlo = "Brno";
        this.zamestnanci = [];
    }

    vypisInfoOFirme() {
        document.write("Firma" + this.nazev + " sidli v " + this.sidlo + "<br>")
    }

    pridejZamestnance() {
        const jmeno = prompt("Zadej jmeno");
        const vek = prompt("Zadej vek");
        const pozice = prompt("Zadej pozice");

        const zamestnanec = new Zamestnanec(jmeno, vek, pozice);
        this.zamestnanci.push(zamestnanec)
    }

    vypisZamestnancu() {
        document.write("<h3>Zamestnaneci<h3>");
        const seznam = document.createElement("ul");
        for (const zamestnanec of this.zamestnanci) {
            seznam.innerHTML += ´<li> <strong>"Jmeno: "</strong>$(zamestnanec.jmeno)</li>´;
        }
    }

}
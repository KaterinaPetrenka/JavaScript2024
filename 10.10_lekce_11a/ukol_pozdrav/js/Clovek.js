'use strict'

class Clovek {

    constructor(jmeno) {
        this.jmeno = jmeno;
    }

    pozdrav() {
        document.write("Čau, ja jsem $'{this.jmeno}'.");
    }
}
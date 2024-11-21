let dnyTydnu = ["po", "ut", "str", "ctv", "pa", "so", "ned"];

function vytvorCalendar() {
    let tabulka = document.createElement("table");
    tabulka.appendChild(pripravHlavicku());
    let tr = document.createElement("tr");
    let obsahTabulky = document.createElement("tbody");
    tabulka.appendChild(obsahtabulky);

    let dnes = new Date();
    let aktualniRok = dnes.getFullYear(); //2024
    let aktualniMnesic = dnes.getMonth(); //10
    let prvniDenMesice = new Date(aktualniRok, aktualniMnesic, 1); //1.10.2024


    //preskakujeme dny v prvnim tydnu mesice 01.10.2024 - je utery
    let den = prvniDenMesice.getDay();
    if (dem == 0) {
        den = 7;
    }
    //preskocit dny v predchozim mnesici
    let preskocitDniVPredchozemMnesici = den - 1;
    let dpocetDnyVMnesice = new Date (aktualniRok, aktualniMesic + 1, 0).getDate();
    let pocetGenerovanychBunek = pocetDniVMnesici + preskocitDniVPredchozemMnesici

    for (let i = 0; i < pocetGenerovanychBunek; i ++) {
        let td = document.createElement("td");

        //prvni zkraceni tyden
        if (i >= preskocitDniVPredchozemMnesici) {
            td.textContent = i - preskocitDniVPredchozemMnesici + 1;
        }
         
        tr.appendChild(td);
    }
    //generovat novy tyden
    if ((i + 1) % 7 == 0) {
        obsahTabulky.appendChild(tr);
        tr = document.createElement("tr");
    }
        //zbytek mesice doplnime bunky
        for (i = 0; i < 7 - (pocetGenerovanychBunek % 7); i++) {
            tr.appendChild(document.createElement("td"));
        }

        obsahTabulky.appendChild(tr);
        document.body.appendChild(tabulka);
}

function pripravHlavicku() {
    let hlavicka = document.createElement("thead");
    let tr = document.createElement("tr");
    for (let i = 0; i < dnyTydnu; i ++) {
        let td = document.createElement("td");
        td.innerHTML = dnyTydnu[i];
        tr.appendChild(td);
    }
    hlavicka.appendChild(tr);
    return hlavicka;
}
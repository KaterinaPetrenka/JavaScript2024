document.addEventListener("DOMContentListener", function() {
    let form = document.querySelector('form');
    comsole.log(form.parentElement);
//vloyeni elementu za jini element
    let odstavec = document.createElement('p');
    odstavec.textContent = "Odstavec 2";
    document.body.appendChild(odstavec);


  //vlozeni elementu pred jiny element  
    let nadpis = document.createElement("h1");
    nadpis.textContent = "Ahoj, Plzen!";

    let elementPred = document.getElementById("prvni");
    document.body.insertBefore(nadpis, elementPred); 

//nahrazeni
    let novyOdstavec = document.createElement('p');
    let tucny = document.createElement('strong');
    tucny.textContext = "Tady formular jiz neni. Utekl";
    novyOdstavec.appendChild(tucny);
    document.body.replaceChild(novyOdstavec,form);

//mazani
    let mazuOdstavec = document.getElementById("treti");
    mazuOdstavec.remove();
}
)
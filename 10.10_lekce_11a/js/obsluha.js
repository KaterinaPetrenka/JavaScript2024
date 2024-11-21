'use strict';

const microsoft = new Firma("Microsoft Corporation", "12345678", "Redmond", "Washington");
const google = new Firma("Google", "65846578", "Kollin", "London", "Bremor");


document.write(microsoft.nazev);
document.write("<br>");
document.write(google.nazev);
document.write("<br>");

microsoft.vypisInfoOFirme();
microsoft.pridejZamestnance();



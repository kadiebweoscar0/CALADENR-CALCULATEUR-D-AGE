const itemHeure = document.getElementById("heure");
const itemMinute = document.getElementById("minute");
const itemSeconde = document.getElementById("seconde");
const itemJour = document.getElementById("jour");
const itemMois = document.getElementById("mois");
const itemAnnée = document.getElementById("année");

let myDate = new Date();

itemHeure.innerHTML += myDate.getHours();
itemMinute.innerHTML += myDate.getMinutes();
itemSeconde.innerHTML += myDate.getSeconds();
itemJour.innerHTML += myDate.getDay();
itemMois.innerHTML += myDate.getMonth();
itemAnnée.innerHTML += myDate.getFullYear();
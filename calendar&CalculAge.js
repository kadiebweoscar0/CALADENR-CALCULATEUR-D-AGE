const itemHeure = document.getElementById("heure");
const itemMinute = document.getElementById("minute");
const itemSeconde = document.getElementById("seconde");
let myDate = new Date();

itemHeure.innerHTML += myDate.getHours();
itemMinute.innerHTML += myDate.getMinutes();
itemSeconde.innerHTML += myDate.getSeconds();
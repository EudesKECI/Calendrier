const mois = document.querySelector(".mois");
const annee = document.querySelector(".années");
const jours = document.querySelector(".jours");
const nextMois = document.getElementById("next-month");
const predMois = document.getElementById("pred-month");

const nextyears = document.getElementById("next-year");
const predyears = document.getElementById("pred-year");


/////// OBTENTION DU JOUR, MOIS ET DE L'ANNEE ACTUELLE ////////
let date = new Date()
let currentYear = date.getFullYear();
let currentMois = date.getMonth();
let currentDay = date.getDay(); // connaitre jour de la semaine lundi ,mardi...

 ////////////////// AUJOURD'HUI /////////////
const is_TODAY = new Date().getDate(); // connaitre jour du mois, si on est le 1er,4,7,29...
const is_MONTH = new Date().getMonth();
const is_YEARS = new Date().getFullYear();


////////////////////////////////////////////////////////////


const months = ["Janvier", "fevrier", "mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

const rendreCalendrier = () => {


    ////////// CONNAITRE LE PREMIER JOURS ET LE NOMBRE DU JOUR DANS UN MOIS ////////

    let firstDayOfMonth = new Date(currentYear, currentMois, 0).getDay();
    let nbr_DAYS_MONTH = new Date(currentYear, currentMois + 1, 0).getDate();
    const WEEKS_DISPLAY = 6;
    const Days = 7;
    let day = 1;

    /////// AFFICHE LES JOURS DU MOIS ////////
    let listJours = " ";


    for (let week = 0; week < WEEKS_DISPLAY; week++) {
        for (let weekDay = 0; weekDay < Days; weekDay++) {

            if ((week == 0) && (weekDay < firstDayOfMonth)) {
                listJours += `<li id="no-pointeur">${" "}</li>`;

            }
            else if (day > nbr_DAYS_MONTH) {
                // listJours += `<li>${" "}</li>`;
                break;
            }

            else {

                if ((day == is_TODAY) && (is_MONTH == currentMois) && (is_YEARS == currentYear)) {
                    listJours += `<li id="today" >${day}</li>`;
                    day += 1;
                }

                listJours += `<li>${day}</li>`;
                day++;
            }

        }
    }
    ///////// AFFICHE LE MOIS ET L'ANNEE ///////
    annee.innerText = `${currentYear}`
    mois.innerText = `${months[currentMois]}`
    jours.innerHTML = listJours;

}

rendreCalendrier();

//// GESTION DES ACTION SUR LE MOIS ET L'ANNEE //////////////////
nextMois.addEventListener("click", () => {
    currentMois++;
    if (currentMois == 12) {
        currentYear++;
        currentMois = 0;
    }
    rendreCalendrier();

})

predMois.addEventListener("click", () => {
    currentMois--;
    if (currentMois < 0) {
        currentMois = 11;
        currentYear--;
    }
    rendreCalendrier();

})

nextyears.addEventListener("click", () => {
    currentYear++;
    rendreCalendrier();

})

predyears.addEventListener("click", () => {
    currentYear--;
    rendreCalendrier();

})

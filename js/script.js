"use strict";

// defining opening hours per each day
const openingHours = {
    mandag: {open: 9, close: 17},
    tirsdag: {open: 9, close: 17},
    onsdag: {open: 9, close: 15},
    torsdag: {open: 9, close: 16.5},
    fredag: {open: 10, close: 16},
};

// get the current day and timg
let today = new Date();

//get hours and minutes
let currentDay = today.toLocaleDateString("da-DK", {weekday:"long"}).toLowerCase();
let currentHour = today.getHours();
let currentMinute = today.getMinutes();

let currentOpeningHours = openingHours[currentDay];

// for at tjekke om tiderne virker kan man få det frem i console.loggen.
// console.log(currentOpeningHours);

let openingHoursMessage;

// check if it is a working day
if (currentOpeningHours) {

    //inlejret if-sætning der tjkker om der er lukket
    if (currentOpeningHours.open === null || currentOpeningHours.close === null) {
        openingHoursMessage = "Vi har desværre lukket i dag, kom tilbage igen i morgen";
    } else {

        //calculate time until closing
        let timeUntilClosing = (currentOpeningHours.close - currentHour) * 60 - currentMinute;

        if (timeUntilClosing > 180) {
            openingHoursMessage = `Vi har åben indtil kl. ${currentOpeningHours.close}:00 i dag.`;
        } else if (timeUntilClosing > 120) {
            openingHoursMessage = `Vi lukker kl. ${currentOpeningHours.close}:00 i dag. Du kan stadig nå det!`;
        } else if (timeUntilClosing > 60) {
            openingHoursMessage = `Vi lukker snart.  kl. ${currentOpeningHours.close}:00. Skynd dig afsted, hvis du vil nå det!`;
        } else if (timeUntilClosing > 0) {
            openingHoursMessage = `Vi lukker indenfor en time, kl. ${currentOpeningHours.close}:00. Skynd dig afsted, hvis du vil nå det!`;
        } else {
            openingHoursMessage = `Vi har lukket for i dag. Hav en god dag! Vi ses i morgen.`;
        }
    }

} else {
    openingHoursMessage = "Velkommen. Vi har desværre lukket i dag.";
}

document.getElementById("openingHoursMessage").textContent = openingHoursMessage;
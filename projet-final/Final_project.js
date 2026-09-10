import promptsync from "prompt-sync";
let prompt = promptsync();
import {
    trips, close, displayTrips, getTripId,
    createTicket, buyTicket, tickets, displayTickets, cancelTicket,
    searchForTicket, filterTrip,
    SortTrip, viewStatistics
} from "./building_function.js";

let choix;
do {

    console.log(
        `      =================================
              RAILWAY MANAGER
      =================================`)


    console.log(`
        1. Display trips
        2. Buy a ticket
        3. Display tickets
        4. Cancel a ticket
        5. Search for a ticket
        6. Filter trips
        7. Sort trips
        8. View statistics
        0. Exit
        `);

    choix = Number(prompt("enter your choice : "));
    switch (choix) {
        case (1):
            displayTrips();
            break;
        case (2):
            console.log(buyTicket());
            break;
        case (3):
            displayTickets();
            break;
        case (4):
            console.log(cancelTicket());
            break;
        case (5):
            console.log(searchForTicket());
            break;
        case (6):
            console.log(filterTrip());
            break;
        case (7):
            SortTrip();
            break;
        case (8):
            viewStatistics();
            break;
        case (0):
            close();
            break;
        default:
            console.log("error !! enter your choice again .");
            break;
    }
}
while (choix != 0);
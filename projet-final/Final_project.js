import promptsync from "prompt-sync";
let prompt = promptsync();
import { trips, close, displayTrips, getTripId, createTicket, buyTicket , tickets} from "./building_function.js";


let choix;
do {

    console.log(
        `=================================
        RAILWAY MANAGER
=================================`)


    console.log("1. Display trips");
    console.log("2. Buy a ticket");
    console.log("3. Display tickets");
    console.log("4. Cancel a ticket");
    console.log("5. Search for a ticket");
    console.log("6. Filter trips");
    console.log("7. Sort trips");
    console.log("0. Exit");

    choix = Number(prompt("enter your choice : "));
    switch (choix) {
        case (1):
            displayTrips();
            break;
        case (2):
            console.log(buyTicket());
            break;
        case (3):

            break;
        case (4):

            break;
        case (5):

            break;
        case (6):

            break;
        case (0):
            close();
            break;
        default:
            console.log("error !! choisir une autre choix");
            break;
    }
}
while (choix != 0);
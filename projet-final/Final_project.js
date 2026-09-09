import promptsync from "prompt-sync";
let prompt = promptsync();
import { trips } from "./building_function.js";


let choix;
let tickets = [];
do {

    console.log(`=================================
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

function close() {
    console.log("_____________________");
    console.log("Vous avez quitté le programme.");
    console.log("_____________________");
    process.exit();
}
function displayTrips() {
    console.log("=== AVAILABLE TRIPS ===");
    for (let i = 0; i < trips.length; i++) {
        console.log("============================================");
        console.log(`#${trips[i].id} ${trips[i].departure} ==> ${trips[i].destination}`);
        console.log(`departure : ${trips[i].departureTime}`);
        console.log(`arrival : ${trips[i].arrivalTime}`);
        console.log(`price : ${trips[i].price}`);
        console.log(`Available seats : ${trips[i].availableSeats} `);
    }
}
function getTripId(tripID) {
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id == tripID) {
            return trips[i];
        }
    }
    return false;
}

function createTicket(targetTrip, nameOfPassenger) {
    let ticket = {
        id: tickets.length + 1,
        passengerName: nameOfPassenger,
        tripId: targetTrip.id,
        seatNumber: 51 - targetTrip.availableSeats,
        price: targetTrip.price
    };
    targetTrip.availableSeats--;
    tickets[tickets.length] = ticket;

    return `
    Ticket purchased successfully.
    ===================================
    id : #${ticket.id}
    passenger name  : ${nameOfPassenger}
    trip Id : ${ticket.tripId}
    seatNumber : ${ticket.seatNumber}
    price : ${ticket.price}`;
}
function buyTicket() {
    let nameOfPassenger = prompt("Enter passenger name : ");
    let tripID = Number(prompt("Entrer Trip ID : "));
    let targetTrip = getTripId(tripID);
    if (targetTrip == false) {
        return "trip not found !";
    }
    if (targetTrip.availableSeats <= 0) {
        return "train is full .";
    }

    return createTicket(targetTrip, nameOfPassenger);
}

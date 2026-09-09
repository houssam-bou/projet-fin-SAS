import promptsync from "prompt-sync";
let prompt = promptsync();
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 0
    }
];
let tickets = [];
let nameOfPassenger = prompt("Enter passenger name : ");
let tripID = Number(prompt("Entrer Trip ID : "));
function getTripId(tripID) {
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id == tripID) {
            return trips[i];
        }
    }
    return false;
}
let targetTrip = getTripId(tripID);
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
    return tickets;
}

function buyTicket(targetTrip, createTicket) {
    if (targetTrip == false) {
        return "trip not found !";
    }
    if (targetTrip.availableSeats <= 0) {
        return "train is full .";
    }

    return createTicket(targetTrip, nameOfPassenger);
}
//<==>

function displayTickets() {
    console.log("=== TICKETS ===");
    for (let i = 0; i < tickets.length; i++) {
        console.log(`
    id : #${tickets[i].id}
    passenger name  : ${tickets[i].passengerName}
    trip Id : ${tickets[i].tripId}
    seatNumber : ${tickets[i].seatNumber}
    price : ${tickets[i].price}`);
    }
}
displayTickets();
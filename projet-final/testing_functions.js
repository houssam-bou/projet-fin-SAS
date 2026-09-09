let prompt = require("prompt-sync")();
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
            if (trips[i].availableSeats > 0) {
                return trips[i];
            }
        }
    }
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

function buyTicket(targetTrip, createTicket)
{
if (targetTrip != tripID)
{
    return "trip not found !";
}
if (targetTrip.availableSeats < 0)
{
    return "train is full .";
}

    return createTicket(targetTrip, nameOfPassenger);
}

console.log(buyTicket(targetTrip,createTicket));
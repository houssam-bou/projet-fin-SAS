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


export function displayTickets() {
    console.log("=== TICKETS ===");
    for (let i = 0; i < tickets.length; i++) {
        console.log(`
    id : #${tickets[i].id}
    passenger name  : ${tickets[i].passengerName}
    trip Id : ${tickets[i].depart} ==> ${tickets[i].dest}
    seatNumber : ${tickets[i].seatNumber}
    price : ${tickets[i].price}`);
    }
}

function cancelTicket()
{
    let ticketId = Number(prompt("enter ticket ID : "));
    let generatedTicket;
    for (let i = 0; i < tickets.length ; i++)
    {
        if (tickets[i].id == ticketId)
        {
            generatedTicket = tickets[i];
            tickets.splice(i, 1);
            break;
        }
        
    }
    if (!generatedTicket)
    {
        return "Ticket not found.";
    }
    let trip = getTripId(generatedTicket.tripId);
    trip.availableSeats++;
    return "ticket cancelled successfully";

}
// displayTickets();
// console.log(cancelTicket());


//<==>
function searchForTicket()
{
    let searchingTicket = [];
    for (let i = 0; i < tickets.length ;i++)
    {
        if(nameOfPassenger == tickets[i].passengerName)
        {
            searchingTicket.push(tickets[i]);
        }
    }
    return searchingTicket;
}
function SortTrip() {
    for (let i = 0; i < trips.legnth; i++) {
        for (let j = 0; j < trips.length; j++) {
            if (trips[i].price < trips[j].price) {
                let swap = trips[i];
                trips[i] = trips[j];
                trips[j] = swap;
            }
        }
    }
    for (let i = 0; i < trips.length; i++) {
        console.log(`${trips[i]} `);
    }
}
SortTrip();
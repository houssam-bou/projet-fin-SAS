import promptsync from "prompt-sync";
let prompt = promptsync();
export let tickets = [];
export const trips = [
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
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
export function close() {
    console.log("_____________________");
    console.log("Vous avez quitté le programme.");
    console.log("_____________________");
    process.exit();
}
export function displayTrips() {
    console.log("=== AVAILABLE TRIPS ===");
    console.table(trips);
}
export function getTripId(inputId) {
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id == inputId) {
            return trips[i];
        }
    }
    return false;
}

export function createTicket(targetTrip, nameOfPassenger) {
    let ticket = {
        id: tickets.length + 1,
        passengerName: nameOfPassenger,
        tripId: targetTrip.id,
        depart: targetTrip.departure,
        dest: targetTrip.destination,
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
    trip : ${ticket.depart} ==> ${ticket.dest}
    seatNumber : ${ticket.seatNumber}
    price : ${ticket.price}`;
}
export function buyTicket() {
    let nameOfPassenger = prompt("Enter passenger name : ");
    let inputId = Number(prompt("Entrer Trip ID : "));
    let targetTrip = getTripId(inputId);
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
    trip id : ${tickets[i].tripId}
    trip : ${tickets[i].depart} ==> ${tickets[i].dest}
    seatNumber : ${tickets[i].seatNumber}
    price : ${tickets[i].price}`);
    }
}
export function cancelTicket() {
    let ticketId = Number(prompt("enter ticket ID : "));
    let generatedTicket = [];
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].id == ticketId) {
            generatedTicket = tickets[i];
            tickets.splice(i, 1);
            break;
        }
    }
    if (!generatedTicket) {
        return "Ticket not found.";
    }
    let trip = getTripId(generatedTicket.tripId);
    trip.availableSeats++;
    return `ticket ${ticketId} cancelled successfully .`;
}
export function searchForTicket() {
    let nameOfPassenger = prompt("enter the passenger name : ");
    let searchingTicket = [];
    for (let i = 0; i < tickets.length; i++) {
        if (nameOfPassenger == tickets[i].passengerName) {
            searchingTicket.push(tickets[i]);
        }
        if (searchingTicket.length <= 0) {
            return "Ticket not found.";
        }
    }
    let result = "";

    for (let i = 0; i < searchingTicket.length; i++) {
        result += `
===================================
    id : #${searchingTicket[i].id}
    passenger name : ${searchingTicket[i].passengerName}
    trip id : ${searchingTicket[i].tripId}
    trip : ${searchingTicket[i].depart} ==> ${searchingTicket[i].dest}
    seatNumber : ${searchingTicket[i].seatNumber}
    price : ${searchingTicket[i].price}
    `
    }
    return result;
}
export function filterTrip() {
    let departureCity = prompt("enter departure city : ");
    let filtringDeparture = [];
    for (let i = 0; i < trips.length; i++) {
        if (departureCity == trips[i].departure) {
            filtringDeparture.push(trips[i]);
        }
        if (filtringDeparture.length <= 0) {
            return "departure not found ?";
        }
    }
    let result = "";
    for (let i = 0; i < filtringDeparture.length; i++) {
        result += `===================================
Result:
${filtringDeparture[i].departure} ==> ${filtringDeparture[i].destination} :  ${filtringDeparture[i].price} Dh
`
    }
    return `
===================================
    Departure city : ${departureCity}
    ${result}`;
}
export function SortTrip() {
    for (let i = 0; i < trips.length; i++) {
        for (let j = 0; j < trips.length; j++) {
            if (trips[i].price < trips[j].price) {
                let swap = trips[i];
                trips[i] = trips[j];
                trips[j] = swap;
            }
        }
    }
    console.table(trips);

}
export function viewStatistics() {
    let soldeTickets = tickets.length;
    console.log(`Total number of tickets : ${soldeTickets} `);

    let totalRevenue = 0;
    for (let i = 0; i < tickets.length; i++) {
        totalRevenue += tickets[i].price;
    }
    console.log(`Total revenue : ${totalRevenue}`);

    let countTickets = 0;

}
let prompt = require("prompt-sync")();

let choix;
do {

    console.log("=================================");
    console.log("        RAILWAY MANAGER");
    console.log("=================================");

    console.log("1. Afficher les trajets");
    console.log("2. Acheter un ticket");
    console.log("3. Afficher les tickets");
    console.log("4. Annuler un ticket");
    console.log("5. Rechercher un ticket");
    console.log("6. Filtrer les trajets");
    console.log("7. Trier les trajets");
    console.log("0. Quitter");
    choix = Number(prompt("entrer votre choix = "));
    switch (choix) {
        case (1):

            break;
        case (2):

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
while (choix != 7);

function close() {
    console.log("_____________________");
    console.log("Vous avez quitté le programme.");
    console.log("_____________________");
    process.exit();
}
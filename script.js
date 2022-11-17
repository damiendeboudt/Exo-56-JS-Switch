let boite = prompt("quel peripherique");

switch(boite) {
    case "souris":
        alert("J'utilise une souris");
        break;
    case "clavier":
        alert("J'utilise un clavier");
        break;
    case "ordinateur":
        alert("j'utilise un ordinateur");
        break;
    case "tapis":
        alert("J'utilise un tapis");
        break;
    case "imprimante":
        alert("J'utilise une imprimante");
        break;
    case "ondulateur":
        alert("J'utilise un ondulateur");
        break;
    default:
        alert("peripherique inconnu");
}
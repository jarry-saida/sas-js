//La méthode prompt() affiche une petite fenêtre de dialogue demandant à l'utilisateur de saisir du texte
//let valeur = prompt("Message à afficher", "Valeur par défaut");
let prenom = prompt("Quel est votre prénom ?", "Invité");

if (prenom !== null) {
    alert("Bonjour " + prenom + " !");
} else {
    alert("Vous avez annulé.");
}

//un tableau (Array) est une structure de données globale qui permet de stocker une collection ordonnée d'éléments sous une variable unique.
// Ils peuvent contenir des éléments de n'importe quel type (nombres, chaînes, objets, ou même d'autres tableaux)
// Création d'un tableau
const fruits = ["Pomme", "Banane", "Orange"];
// Accéder à un élément (le premier est à l'index 0)
console.log(fruits[0]); // Affiche "Pomme"
// Connaître la taille (longueur) du tableau
console.log(fruits.length); // Affiche 3
//push() Ajouter à la fin 
fruits.push("Fraise");
//pop() Retirer de la fin
fruits.pop(); // retire le dernier
//unshift() Ajouter au début
fruits.unshift("Cerise");
//shift() Retirer du début
fruits.shift(); // retire le premier
//indexOf() Trouver l'index 
let position = fruits.indexOf("Banane");
//includes() Vérifier la présence
let aDesCerises = fruits.includes("Cerise");
//Pour itérer sur un tableau, JavaScript propose des méthodes modernes basées sur des fonctions de rappel (callbacks)
//Exécuter une action sur chaque élément (forEach)
fruits.forEach(fruit => {
  console.log("J'aime la " + fruit);
});
//Créer un nouveau tableau transformé (map)
const nombres = [1, 2, 3];
const doubles = nombres.map(n => n * 2); // [2, 4, 6]
//Filtrer des éléments selon une condition (filter)
ages = [15, 22, 18, 30];
const majeurs = ages.filter(age => age >= 18); // [22, 18, 30]

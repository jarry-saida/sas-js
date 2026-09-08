//La recherche linéaire consiste à parcourir un tableau du premier au dernier élément pour trouver une valeur
function linearSearch(tableau, valeurCible) {
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] === valeurCible) {
      return i; // Retourne l'indice si trouvé
    }
  }
  return -1; // Retourne -1 si non trouvé
}

const nombres = [10, 23, 45, 70, 11, 15];
console.log(linearSearch(nombres, 70)); // Affiche 3
//Tableau non trié : Si les données sont mélangées, tu n'as pas le choix : il faut obligatoirement vérifier tous les éléments un par un.
//Petits tableaux : Si ton tableau contient peu d'éléments (moins de quelques milliers), cette méthode est extrêmement rapide et simple à mettre en place.
//Si ton tableau contient des millions de lignes et qu'il est déjà trié (par exemple de A à Z), on préférera une recherche binaire (Binary Search), qui est beaucoup plus rapide.
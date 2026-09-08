//La recherche binaire (Binary Search) est un algorithme de recherche ultra-rapide, mais qui impose une condition obligatoire : le tableau doit être trié au préalable
//Au lieu de vérifier les éléments un par un (comme la recherche linéaire), la recherche binaire coupe le tableau en deux à chaque étape.
//Elle élimine ainsi la moitié des possibilités restantes à chaque comparaison, ce qui la rend extrêmement efficace sur les grands tableaux
function rechercheBinaire(tableauTrie, valeurCible) {
  let debut = 0;
  let fin = tableauTrie.length - 1;

  while (debut <= fin) {
    // On trouve le milieu du tableau (arrondi à l'inférieur)
    let milieu = Math.floor((debut + fin) / 2);

    // Cas 1 : La valeur est pile au milieu
    if (tableauTrie[milieu] === valeurCible) {
      return milieu; // Index trouvé !
    }

    // Cas 2 : La cible est plus grande, on ignore la moitié gauche
    if (tableauTrie[milieu] < valeurCible) {
      debut = milieu + 1;
    } 
    // Cas 3 : La cible est plus petite, on ignore la moitié droite
    else {
      fin = milieu - 1;
    }
  }

  // Si on sort de la boucle, la valeur n'est pas dans le tableau
  return -1;
}

// --- Exemple d'utilisation ---
// Le tableau DOIT être trié !
const notes =[10, 12, 14, 14,15, 17, 18, 20]; 

console.log(rechercheBinaire(notes, 15)); // Affiche : 4 (l'index du nombre 15)
console.log(rechercheBinaire(notes, 11)); // Affiche : -1 (n'existe pas)

//Le tri à bulles (Bubble Sort) est un algorithme de tri simple qui consiste à comparer répétitivement les éléments adjacents d'un tableau et à les échanger s'ils sont dans le mauvais ordre.
//On l'appelle "tri à bulles" car les valeurs les plus grandes "remontent" petit à petit vers la fin du tableau, comme des bulles d'air vers la surface
function triABulles(tableau) {
  const n = tableau.length;
  
  // Boucle externe : passe sur le tableau plusieurs fois
  for (let i = 0; i < n; i++) {
    
    // Boucle interne : compare les éléments adjacents
    // Le "- i" permet d'éviter de revérifier la fin du tableau déjà triée
    for (let j = 0; j < n - 1 - i; j++) {
      
      // Si l'élément actuel est plus grand que le suivant, on les échange
      if (tableau[j] > tableau[j + 1]) {
        let temporaire = tableau[j];
        tableau[j] = tableau[j + 1];
        tableau[j + 1] = temporaire;
      }
    }
  }
  return tableau;
}

// Exemple d'utilisation :
const nombres = [64, 22, 90, 12, 25, 34, 11];
console.log(triABulles(nombres)); 
// Affiche : [11, 12, 22, 25, 34, 64, 90]-


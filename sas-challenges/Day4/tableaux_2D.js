// un tableau à deux dimensions (2D) — souvent appelé matrice 
//  est simplement un tableau qui contient d'autres tableaux.
//  Chaque élément du tableau principal représente une ligne, et chaque sous-tableau contient les colonnes
// Création d'une matrice 3x3 (3 lignes, 3 colonnes)
const matrice = [, // Ligne 0, // Ligne 1
  [7, 8, 9]  // Ligne 2
];
// Lire une valeur
console.log(matrice[1][2]);
// Modifier une valeur
matrice[0][0] = 0; 
console.log(matrice[0]); // Affiche [0, 2, 3]
//Pour lire tous les éléments d'un tableau 2D
for (let i = 0; i < matrice.length; i++) {
  for (let j = 0; j < matrice[i].length; j++) {
    console.log(`Élément à [${i}][${j}] = ${matrice[i][j]}`);
  }
}
//Avec la méthode moderne forEach
matrice.forEach((ligne, indexLigne) => {
  ligne.forEach((valeur, indexColonne) => {
    console.log(`Ligne ${indexLigne}, Col ${indexColonne} : ${valeur}`);
  });
});
//Créer dynamiquement un tableau 2D vide
const lignes = 3;
const colonnes = 4;
// Crée un tableau de 3 lignes, contenant chacune un tableau de 4 éléments remplis de 0
const grille = Array.from({ length: lignes }, () => Array(colonnes).fill(0));//La méthode fill() en JavaScript permet de remplir (ou remplacer) tous les éléments d'un tableau avec une valeur fixe
console.log(grille);
// Affiche :
// [, [0, 0, 0, 0], [0, 0, 0, 0] ]
//Le piège absolu de fill() avec les tableaux 2D ⚠️




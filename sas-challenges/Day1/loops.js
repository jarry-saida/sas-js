//pour répéter un bloc de code plusieurs fois de suite on utiliser les boucle 
// la boucle for pour répéter un bloc de code avec un nombre précis de fois
//let i = 0 initailisation
//i<5 condition
//i++ incrementation
//affivhage des nombre
for (let i = 0; i <= 3; i++) {
  console.log("Valeur de i : " + i);
}
//table de multiplication
let nombre = 5 ;
console.log("la table de multiplication de " + nombre + ":");
for(let i = 0; i <=10 ; i++){
    let res = nombre * i;
    console.log(nombre + "*" + i + "=" + res );
}
//la boucle while répète le code tant qu'une condition spécifique reste vraie
let i = 0;
while (i < 4) {
  console.log(i);
  i++; // Incrémentation pour éviter une boucle infinie
}

let nbr = 0 ;
console.log("le carre de nombre pair : " );
while(nbr <= 10 ){
    let car = nbr * nbr ;
    console.log( "le carre de " + nbr + " est " + car );
    nbr+=2;
}

//la boucle do while exécute un code au moins une fois avant de tester une condition
//calculer la somme des premier nombre
let somme = 0;
let N = 1;
do {
somme += N;
N++;
} while (N <= 5);
console.log("la somme est : " + somme );

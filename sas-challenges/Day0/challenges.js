//niveau1
//EX1
let  age = 23 ;
console.log("Vous avez" + " " + age + " " + "ans.");
//EX2
let temperature = 50 ;
if (temperature > 30) {
    console.log("Il fait chaud dehors !") ;
} else {
    console.log("Il fait beau temps.");
}
//EX3
let nombre = 7444 ;
if (nombre % 2 == 0){
    console.log(" le nombre est pair.");
}else{
    console.log("le nombre est impair.");
}
//Niveau 2 
//EX1
let score = 75 ;
if (score >= 90 && score <= 100){
    console.log( "A") ;
}else if (score >= 80){
    console.log("B");
}else if (score >= 70){
    console.log("C");
}
else {
    console.log("F");
}
//EX2
let A = 20 ;
let B = 30 ;
let C = 5 ;
let max ;
if(A - B < 0 ){
    console.log( max = B );
}else if ( B - C < 0){
    console.log( max = C);
}else{
    console.log( max = A );
}
//EX3
let annee = 2028 ;
if((annee % 4 == 0 && annee % 100 != 0) || (annee % 400 == 0)){
    console.log("l'annee est bissextile.");
}else{
    console.log("l'annee n'est pas bissextile");
}
//Niveau3
//EX1


let num1 = 20 ;
let num2 = 4 ;
let operator = "+";
let res = 0;
switch(operator) {
  case "+":
    res = num1 + num2;
    console.log("la somme est : " + res);
    break;
  case "-":
    res = num1 - num2 ;
    console.log("la difference est : " + res);
    break;
  case "*":
    res = num1 * num2 ;
    console.log("la multiplication est : " + res);
    break;
  case "/":
    res = num1 / num2 ;
    if (num2 !== 0){
        console.log("la division est : " + res);
    }
    break;
}

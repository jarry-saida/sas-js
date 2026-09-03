//Niveau1
//EX1
function greet (nom){
    return "Bonjour, " + nom + "!";
}
let salutation = greet ("Maryam ");
console.log(salutation);
//EX2
const add = (a,b) => {
    return a + b ;
}
let somme = add(20,10);
console.log("la somme est : " + somme );
//EX3
function square(num){
    let carre = num * num;
    return carre ;
}
let carre0 = square(8);
console.log("le carre est : " + carre0 );
//EX3 
const square1 = (num) => {
    return num * num ;
}
let carre01 = square1(9) ;
console.log("le carre est : " + carre01);
//NIVEAU2
//EX1
function celsiusToFahrenheit(C){
    let F = (C * 9/5) + 32 ;
    return F ;
}
let temperature = celsiusToFahrenheit(25) ;
console.log("la temperature en degrés Fahrenheit est : " + temperature);
//ex2
const isEmpty = (str) => {
    for(let i=0;;i++){
        if(str == "" || str[i] == " "){
        return true;
    } else{
        return false;
    }
    }
}
let IsEmpty = isEmpty("        ");
console.log("la chaine est " + IsEmpty);
//ex3
function factorial (n) {
    let fa = 1 ;
    for (i=1 ;i <=n ; i++){
        fa *= i ;
    }
    return fa;
}
let Factorial = factorial(5);
console.log("la factorial est  " + Factorial);
//NIVEAU 3
//EX1
const calculate = (a,b,operation) => {
    return operation(a,b) ;
}
let addition = (x,y) => x + y ;
let soustraction = (x,y) => x - y;
console.log ("l'addition est "+ calculate(1,6,addition));
console.log ("la soustraction est "+ calculate(1,4,soustraction));
//EX2
function createMultiplier(multiplier){
    return {multiplier : (n1,n2) => n1 * n2 };
}
let mul  = createMultiplier();
console.log("la multiplication est  " + mul.multiplier(5,3));
//ex3
function filterOddNumbers(arr, callback){
}





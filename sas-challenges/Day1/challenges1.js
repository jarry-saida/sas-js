//niveau 1
//ex1
let i = 1;
while(i<=20){
    console.log(i)
    i++;
}
//EX2
let somme = 0 ;
for(let nombre = 1 ;nombre <= 100;nombre++){
    somme += nombre;
}
console.log("la somme est : " + somme);
//EX3
let nbr = 8 ;
for(i = 1 ; i<=10;i++){
    let mul = i * nbr;
    console.log(nbr + "*" + i + "=" + mul);
}
//niveau2
//ex1
for(let i=1;i<=50;i++){
    if((i % 3 == 0)&&(i % 5 == 0)){
        console.log("FizzBuzz");
    }else if (i % 5 == 0){
        console.log("Buzz");
    }else if(i % 3 == 0){
        console.log("Fizz");
    }else{
        console.log(i);
    }
}
//ex2
let nom="saida";
let stock=0;
for(let i = 0 ; i < nom.length ; i++) {
    if(nom[i] === 'a' || nom[i] === 'e' || nom[i] === 'i' || nom[i] === 'o' || nom[i] === 'u'){
        stock++;  
    }
}
    console.log(stock);
//ex3
let line = "" ;
for(let i = 1 ; i <= 5 ; i++){
    line = "";
    for(let j=0;j<5;j++){
       line += "* ";
    }
    console.log(line);
}
//niveau3
//EX1

for(let i = 1; i <= 50 ; i++){
    let compteur=0;
    for(let j=1 ; j<=i ;j++){
        if(i % j == 0) {
            compteur++;
        }
        }
        if(compteur==2) {
            console.log("les nombre premienr " + i)
        }
    }
//ex2
for(let i = 1 ; i <= 5 ; i++){
    let REC = "" ;
    for(let j = 1 ; j <= i ; j++){
        REC+="*";
    }
    console.log(REC);
}
//EX3
let F0 = 0 , F1 = 1 ;
for(let i = 0 ; i < 10 ; i++){
    
}







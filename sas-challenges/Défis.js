//Défi1
let numbers = [4, 12, 2, 9, 10, 13];
let numPairs = 0;
let numImpairs=0;
for(let i = 0;i<numbers.length;i++){
    if(numbers[i] % 2 === 0){
        numPairs++;
    }
}
numImpairs = numbers.length - numPairs;
console.log(numPairs);
console.log(numImpairs);
//DEFIS2
let number = [12, 5, 31, 8, 19];
let max = number[0];
for(let i = 1;i<number.length;i++){
    if(number[i] > max){
        max = number[i]
    }
}
console.log(max);
//DEFIS3
let text = "javascript";
let character = "a";
let com = 0;
for(let i = 0;i<text.length;i++){
    if(text[i] === character){
        com++;
    }
}
console.log(com);
//defi4
let word = "hello";
let word1 = "";
for(let i = word.length-1;i>=0;i--){
    word1 += word[i];
}
console.log(word);
console.log(word1);
//defi5
let texte = "JavaScript is amazing";
let texte1 = texte.toLowerCase();
let N = 0;
for(let i = 0;i<texte.length;i++){
    if(texte1[i] === "a" || texte1[i] === "e" || texte1[i] === "i" || texte1[i] === "o" || texte1[i] === "u" ){
        N++;
    }
}
console.log(N);
//DEFIS6

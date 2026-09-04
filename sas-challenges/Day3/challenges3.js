//niveau1
//EX1
function long_maju (texte){
    let long = texte.length;
    let maju = texte.toUpperCase();
    console.log("longueur est :" + long);
    console.log("majuscules est :" + maju);
}
long_maju("SAida jaRry");
//EX2
function prem_dern(texte1){
    if(texte1.length === 0){
        console.log("La chaîne est vide.");
        return;
    }
    let prem = texte1[0];
    let dern = texte1[texte1.length-1];
    console.log("le premier est :" + prem);
    console.log("le dernier est :" + dern);
}
prem_dern("Agadir!");
//ex3
function remplacementDeMots (phrase){
    let newPhrase = phrase.replace("apples","bananas");
    console.log("la nouvelle phrase est :" + newPhrase);
}
remplacementDeMots("I love apples");
//niveau2
//ex1
function VérifiePalindrome(chaine){
    let size =  chaine.length -1;
    for(let i=0; i < chaine.length ; i++){
        let chaine0 = chaine.toLowerCase();
        if (chaine0[i] !==  chaine0[size])
            {
            return false ;
        }
        size --;
    }
        return true ;
}
console.log(VérifiePalindrome("Mam"));
//ex2
function inversionChaine(chaine1) {
    let resultat = "";
    for (let i = chaine1.length - 1; i >= 0; i--) {
        resultat += chaine1[i];
    }
    console.log("l'inversée est : " + resultat);
}
inversionChaine("saida");
//EX3
function contChar(str, char){
    let comp = 0 ;
    for(let i=0;i<char.length;i++){
        if(char[i].toUpperCase() === str.toUpperCase()){
            comp++;
        }
    }
    console.log("le nombre de str est : "+ comp);
}
contChar("H","hmjgfhfhf");
//NIVEAU 3 
//EX1
function MiseEnMajusculesDesMots(phrase1){
    let phrase2 = phrase1.split(" ");
    for(let i=0 ;i < phrase2.length; i++){
        let phrase3 = phrase2[i];
        phrase2[i] = phrase2[i][0].toUpperCase() + phrase2[i].slice(1).toLowerCase();
    }
    let phrase3 = phrase2.join(" ");
    console.log("la nouveau phrase est :" + phrase3);
}
MiseEnMajusculesDesMots("saida Jarry dE agadiR");
//EX2
function CompresseurDeChines (caractere){
    let comp = 1;
    let resul = "";
    for(let i = 0 ; i< caractere.length ; i++){
        if( caractere[i] ===  caractere[i+1]) {
            comp++;
        }else{
            resul += caractere[i] + comp  ;
            comp = 1;
        }
    } 
    console.log("le caractere compresse est :" + resul);
}
CompresseurDeChines ("aaabbc");

//if: exécute un bloc de code si la condition est vraie
let age = 10 ;
if ( age <= 18) console.log( "ne pouvez vous pas inscrire a YOUCODE!");
//if...else : propose une alternative si la condition principale est fausse
let name = "maryam" ;
let age1 = 23 ;
if (name == "saida" && age1 == 23 ) {
    console.log("les informations 1 sont correct !") ;
} else {
    console.log("les informations  1 sont incorrect !");
}

if (name == "saida" || age1 == 23 ) {
    console.log("les informations 2 sont correct !") ;
} else {
    console.log("les informations 2 sont incorrect !");
}


const MotDePasse = "123SDJR456"
if (  MotDePasse != "123SDJR456" ) {
    console.log("mot de passe incorrecte !") ;
} else {
    console.log(" connection!");
}
//if...else if...else : teste plusieurs conditions à la suite
let note = 13 ; 
if (note  >= 15) {
  console.log(" admis avec mention bien!")
} else if (note >= 12) {
   console.log(" admis avec mention assez bien!")
} else if (note >= 10) {
   console.log(" admis avec mention passable!")
} else {
   console.log(" non admis !")
}
//switch : compare une variable à plusieurs valeurs précises
let jour = "jeudi" ;
switch(jour) {
  case "lundi":
   console.log(" c'est lundi!");
    break;
  case "mardi":
    console.log(" c'est mardi!");
    break;
  case "mercredi":
    console.log(" c'est mercredi!");
    break;
  case "jeudi":
    console.log(" c'est jeudi!");
    break;
  case "vendredi":
    console.log(" c'est vendredi!");
    break;
  case "samedi":
    console.log(" c'est samedi!");
    break;
  case "dimanche":
    console.log(" c'est dimanche!");
    break;

  default:
   
}
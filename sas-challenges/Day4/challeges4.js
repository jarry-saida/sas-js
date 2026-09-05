//niveau1
//EX1
let Couleurs = ["rouge","vert","bleu"];
Couleurs.push("noir");
Couleurs.shift();
console.log("le tableau final est : " + Couleurs);
//EX2
let SommeTab = [1,2,3,4,5];
let somme = 0 ;
for(let i=0;i<SommeTab.length;i++){
  somme += SommeTab[i];
}
console.log(somme);
//ex3
let Tab = [];
function ExistenceDunElement(Tab,valeur){
  for(let i=0;i<Tab.length;i++){
    if(Tab[i].toUpperCase() === valeur.toUpperCase()){
      return true;
    }
  }
  return false;
}
console.log(ExistenceDunElement(["saida","maryam","jr"],"java"));
console.log(ExistenceDunElement(["saida","maryam","jr"],"JR"));
//NIVEAU2
//EX1
function TrouverLeMaximum (max){
  let maxi = max[0];
  for(let i=0;i<max.length;i++){
    if(max[i] >= maxi){
      maxi = max[i];
    }
  }
  console.log("la maximum est :" + maxi);
}
TrouverLeMaximum([1,0,-4,-3,0,-20]);
TrouverLeMaximum([1,20,54,3,0,-2]);
//EX2
function SupprimerLesDoublons(Table){
  for(let i=0;i<Table.length;i++){
    for(let j=i+1;j<Table.length;j++){
      if(Table[i] === Table[j]){
      Table.splice(j,1);
      j--;
    }
    }
  }
  console.log("la table unique est :" + Table );
}
SupprimerLesDoublons([1,1,1,1]);
SupprimerLesDoublons([1,1,2,2,4,5]);




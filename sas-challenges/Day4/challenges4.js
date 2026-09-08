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

//niveau2
//EX1
function TrouverLMaximum(table){
    let maxi = table[0];
    for(let i = 0 ;i < table.length ; i++){
        if(table[i] >= maxi){
            maxi = table[i];
        }
    }
    console.log("le maximum est : "+ maxi);
}
TrouverLMaximum([1,2,34,5,6]);
TrouverLMaximum([1,-2,-34,-5,0]);
//ex2
function SupprimerLesDoublons(Tab){
    for(let i = 0;i <Tab.length;i++){
        for(let j = i+1;j <Tab.length;j++){
            if(Tab[i] === Tab[j]){
                Tab.splice(j,1);
                j--;
            }
        }
    }
    console.log("le nouveau tableau est : "+ Tab);
}
SupprimerLesDoublons([1,1,1,1,1,1]);
SupprimerLesDoublons([1,1,2,2,3,4,5]);
//ex3
function InversionPersonnalisée(Table){
    let Table1 = [];
    for(let i=Table.length-1;i>=0;i--){
        Table1.push(Table[i]);
    }
    console.log("la table inverse est :" + Table1);
}
InversionPersonnalisée([1,2,3,4,5]);
InversionPersonnalisée(["s","a","i","d","a"]);
//niveau3
//EX1
let matrice = [[1,2,3]
              ,[1,2,3],
               [1,2,3]];


function AplatirUnTableau2D (matrice){
let tableau = [];

    for(let i = 0;i < matrice.length; i++){
        for(let j = 0 ;j < matrice.length;j++){
            tableau.push(matrice[i][j]);
        }
    }
    return tableau;
}
console.log(AplatirUnTableau2D(matrice));
//ex2
let matrix = [[1,2,3]
              ,[1,2,3],
               [1,2,3]
            ];
let sum = 0;
for(let i=0;i < matrix.length;i++){
        sum += matrix[i][i];
}
console.log(sum);
//ex3
let matrix1 = [[1,2,3]
              ,[1,2,3],
               [1,2,3]
            ];
let matrix2 = [];
function TranspositionDeMatrice (matrix1){
    for(let i=0;i < matrix1.length;i++){
        for(let j=0 ;j < matrix1.length;j++){
        matrix1[i][j] == matrix2[j][i];
        }
    }
    return matrix2;
}
console.log(TranspositionDeMatrice (matrix1));
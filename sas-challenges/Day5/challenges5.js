//niveau1
//ex1
const Voiture = {
  marque : "jeep",
  modéle : "wrangler",
  année  :2030,
  afficher () {
    console.log("Cette voiture est une " + this.marque + " " + this.modéle);
    }
};
Voiture.afficher();
//ex2
const user = {
    isActive : true ,
    age : 23
};
user.age = 24;
console.log(user);
//ex3
const objet = {
    donne1 : 373 ,
    donne2 : "jfbfh",
    donne3 : false
};
for (const cle in objet){
    console.log("Clé : " + cle + " | valeur :"+ objet[cle]);
}
//niveau2
//ex1
const person = [
    {name : "saida" ,age :29},
    {name : "maryam" ,age :24},
    {name : "salma" ,age :28}
] ;
let nom = "";
for (let i=0;i < person.length;i++){
    let max = person[0].age;
    if(person[i].age >= max){
        max = person[i].age;
        nom = person[i].name;
    }
}
console.log(nom);
//ex2
let Tab = [] ;
const product = [
    {namee : "banane",price: 200,inStock:true},
    {namee :"pomme" ,price:50 ,inStock:false},
    {namee : "orange",price:657 ,inStock:false},
    ]
    for (let i=0;i < product.length;i++){
        if(product[i].inStock === true){
            Tab.push(product);
            
    }
}
console.log(Tab);
//CHALLENGE 
const ETU = [
  {
    name: "Emma Johnson",
    note: [88, 92, 85, 90, 95]
  },
  {
    name: "Liam Smith",
    note: [75, 80, 78, 82, 79]
  },
  {
    name: "Sophia Garcia",
    note: [95, 98, 92, 96, 99]
  },
  {
    name: "Noah Williams",
    note: [60, 65, 70, 68, 62]
  },
  {
    name: "Olivia Brown",
    note: [89, 85, 91, 88, 90]
  }
];
let moyenne = 0 ;
let somme = 0;
let somme1 = 0;
let moyenneclasse = 0;
function CalculeLamoyenneDeEtudiant (ETU){

    for(let i = 0; i < ETU.note.length; i++){
        somme += ETU[i].note[i];
    }
        moyenne = somme / ETU.note[i].length; 
    return moyenne;
}
function CalculeLamoyenneClasse (ETU , moyenne){
    for(let i = 0; i < ETU.note.length; i++){
    CalculeLamoyenneDeEtudiant (ETU);

        somme1 += moyenne;
    }
        moyenneclasse = somme1 / ETU.length; 
        return moyenneclasse;
}
console.log(CalculeLamoyenneClasse (ETU , moyenne));


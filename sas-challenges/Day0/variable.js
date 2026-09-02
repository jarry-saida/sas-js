//les noms de variable ne peux pas commenser par un nombre ou un @ ou # ... mais il est possible de mettre un - ou _ ou un nombre au milieu
//declaration de variable avec let 
//Vous pouvez modifier la valeur de la variable après sa déclaration 
//Il est impossible de redéclarer une variable avec let dans le même bloc
let age = 23 ; //type entier  et float
let name = "saida" ;//type string
let EstEtudiant = true ;//type boolean
let ville = null ;// type null
let adresse = undefined ;// type undefined  et la memoire ne reserve pas un espace
let etudiant = {
    first_name : "MARYAM" ,
    last_name : "CHAHTIT",
}// type variable compliquer un objet
let full_name = etudiant.first_name + " " + etudiant.last_name ;
//declaration de variable avec const
//Il est impossible de modifier la valeur d'une constante et il est obligatoire d'initialisation
const faculte = "Fsa Agadir." ;
//affichage avec console.log()
console.log("les informations sont : ");
console.log("name = " + " "+ name );
console.log("age = " + " "+ age );
console.log("EstEtudiant = " + " "+ EstEtudiant );
console.log("ville = " + " "+ ville );
console.log("adresse = " + " "+ adresse );
console.log("first_name de etudiant est  = " + " "+ etudiant.first_name );
console.log("last_name de etudiant est = " + " "+ etudiant.last_name );
console.log("full_name de etudiant est = " + " "+ full_name );
console.log("faculte = " + " "+ faculte );
//un objet stocke des données sous forme de paires clé-valeur,
//tandis qu'un tableau (array) stocke une liste ordonnée d'éléments indexés par des nombres
//1. Les Objets
//Un objet sert à décrire une entité unique avec des propriétés. On utilise des accolades {}
const utilisateur = {
  nom: "SAIDA",
  age: 23,
  actif: true
};
// Accès aux données
console.log(utilisateur.nom); // "SAIDA"
//2. Les Tableaux
//Un tableau sert à regrouper plusieurs éléments dans un ordre précis. On utilise des crochets [].L'index commence à 0
const nombres = [10, 20, 30];
// Accès aux données
console.log(nombres[0]); // 10
//3. Les Tableaux d'Objets
// On combine les deux pour stocker des listes de données complexes (par exemple, une liste d'utilisateurs)
const utilisateurs = [
  { id: 1, nom: "Alice", age: 25 },
  { id: 2, nom: "Bob", age: 30 },
  { id: 3, nom: "Charlie", age: 35 }
];
// Accès au nom du deuxième utilisateur
console.log(utilisateurs[1].nom); // "Bob"
//4. Méthodes utiles pour parcourir un tableau d'objets
//find() : Trouve le premier élément qui respecte une condition.
const utilisateurTrouve = utilisateurs.find(u => u.id === 2);
console.log(utilisateurTrouve);
// Résultat : { id: 2, nom: "Bob", age: 30, role: "Admin" }
// On peut ensuite accéder à ses propriétés
console.log(utilisateurTrouve.nom); // "Bob"
// filter() : Crée un nouveau tableau avec tous les éléments qui respectent une condition.
// Filtrer les utilisateurs de plus de 28 ans
const plusDe28 = utilisateurs.filter(u => u.age > 28);
// map() : Transforme chaque élément pour créer un nouveau tableau
const listeNoms = utilisateurs.map(u => u.nom);
console.log(listeNoms);
// Résultat : ["Alice", "Bob", "Charlie"]
let objet = {
    propriété: valeur,

    méthode: function() {
        console.log(this.propriété);
    }
};

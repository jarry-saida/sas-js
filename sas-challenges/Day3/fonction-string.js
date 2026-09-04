//On peut déclarer une chaîne de caractères de trois manières :
//Avec des guillemets simples ('texte') ou doubles ("texte").
//Avec des accents graves (gabarits multilignes ou template literals : `texte`) qui permettent l'interpolation de variables avec ${variable}

//length : Renvoie le nombre total de caractères de la chaîne.
let texte = "Code";
console.log(texte.length); // 4
//toUpperCase() / toLowerCase() : Convertit la chaîne en majuscules ou en minuscules
let salut = "hello";
console.log(salut.toUpperCase()); // "HELLO"
//trim() : Supprime les espaces blancs au début et à la fin de la chaîne.
function nettoyerEmail(email) {
    return email.trim().toLowerCase();
}
console.log(nettoyerEmail("  Contact@MonSite.COM ")); // "contact@monsite.com"
//includes(valeur) : Vérifie si la chaîne contient la sous-chaîne spécifiée (renvoie un booléen).
let com = "J'apprends le JS";
console.log(com.includes("JS")); // true
//indexOf(valeur) : Renvoie l'indice de la première occurrence d'une sous-chaîne, ou -1 si elle est absente.
let lan = "JavaScript";
console.log(lan.indexOf("Script")); // 4
console.log(lan.indexOf("Python")); // -1
//slice(debut, fin) : Extrait une portion de la chaîne entre deux indices.
let lang = "JavaScript";
console.log(lang.slice(0, 4)); // "Java"
//replace(recherche, remplacement) : Remplace une partie de la chaîne par une autre
let AB = "J'aime le Python";
console.log(AB.replace("Python", "JS")); // "J'aime le JS"
//split(separateur) : Découpe la chaîne en un tableau de sous-chaînes selon un séparateur.
let liste = "pomme,banane,orange";
console.log(liste.split(",")); // ["pomme", "banane", "orange"]
//includes("texte_recherche") Elle cherche si la sous-chaîne se trouve à l'intérieur de ton texte (au début, au milieu ou à la fin)
let phrase = "J'aime apprendre le JavaScript";
console.log(phrase.includes("apprendre")); // true (le mot existe)
console.log(phrase.includes("Python"));    // false (le mot n'existe pas)
console.log(phrase.includes("j'aime"));    // false (Attention : la casse compte, 'J' est majuscule)
//chaine.startsWith("texte_recherche") Elle valide si la chaîne de caractères commence exactement par le texte donné
let url = "https://google.com";
console.log(url.startsWith("https")); // true (l'URL commence bien par https)
console.log(url.startsWith("www"));   // false
//chaine.endsWith("texte_recherche") Elle valide si la chaîne de caractères se termine exactement par le texte donné
let fichier = "document.pdf";
console.log(fichier.endsWith(".pdf")); // true (c'est bien un fichier PDF)
console.log(fichier.endsWith(".png")); // false

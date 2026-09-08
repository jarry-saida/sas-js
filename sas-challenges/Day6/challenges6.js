//niveau1
//EX1
let array = [];
function linearSearch(array, target){
    for(i = 0;i < array.length;i++ ){
        if(array[i] === target){
            return i;
        }
    }
    return -1 ;
}
array = [1,23,2,5,8];
console.log(linearSearch(array, 8));
//EX2
let tableau = [];
function TrouverIndiceMinimum(tableau){
    let min = tableau[0];
    let indexMin = 0;
    for(let i = 1; i < tableau.length;i++){
        if(tableau[i] < min){
            min = tableau[i];
            indexMin = i ;
        }
    }
    console.log("min = "+ min);
    return indexMin;
}
tableau = [60,23,2,5,8];
console.log(TrouverIndiceMinimum(tableau));
//EX3
let table = [];
let comp = 0;
function RechercheParComptageOccurrences(table,nombre){
    for(let i = 0; i < table.length;i++){
        if(table[i] === nombre){
            comp++;
        }
    }
    return comp;
}
table = [60,2,3,2,5,2,3,2,8];
console.log(RechercheParComptageOccurrences(table,2));
//niveau2
//EX1



let Tab = [[1,2,3],
           [1,2,3],
           [1,2,3] 
           ];
let Tab1 = [[1,2,3],
           [1,2,3], 
           ];
let Tab2 = [];
for(let i =0;i<Tab.length;i++){
    for(let j =0;j<Tab.length;j++){
        let X = 0;
        for(let k =0;i<Tab1.length;i++){
            X += Tab[i][j] * Tab1[i][k] ;
        }
        Tab2[i][j] == X; 
    }
}
console.log(Tab2);

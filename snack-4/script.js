// 1. Scrivi una funzione che fonda due array(aventi lo stesso numero di  elementi) prendendo alternativamente gli elementi da uno e dall’altro.
// es. [a, b, c], [1, 2, 3] →[a, 1, b, 2, c, 3].

// FUNCTION

// function mergeArray(arr1, arr2) {
//     let arrMerged = [];
//     for (let i = 0; i < arr1.lenght; i++) {
//         arrMerged.push(arr1[i]);
//         arrMerged.push(arr2[i]);
//     }

//     return arrMerged;
// }

// // 1.
// const arr1 = ["a", "b", "c"];
// const arr2 = [1, 2, 3];


// console.log(mergeArray(arr1, arr2));

function mergeArray(arr1, arr2) {
    let arrMerged = [];
    for (let i = 0; i < arr1.lenght; i++) {
        arrMerged.push(arr1[i]);
        arrMerged.push(arr2[i]);
    }

    return arrMerged;
}


const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3];

console.log(mergeArray(arr1, arr2));



/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri(“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b” */

// FUNCTION

function splitArray(arr, num1, num2) {
    let splittedArr = [];
    for (let i = num1; i < num2; i++) {
        splittedArr.push(arr[i]);
    }
    return splittedArr;
};

// MAIN PROGRAM

let arr = [1, 2, 3, 4, 5, 6];
let num1 = 1;
let num2 = 4;

console.log(splitArray(arr, num1, num2));



function mergeArr(arr1, arr2) {
    var mergedArrays = [];
    for ( var i = 0; i < arr1.length; i++) {
        mergedArrays.push(arr1[i]);
        mergedArrays.push(arr2[i]);
    }
    return mergedArrays;
}

var letters = ['a', 'b', 'c'];
var numbers = [1, 2, 3];
var result = mergeArr(letters, numbers);
console.log(result);
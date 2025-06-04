/*
Problem: Convert a nested array into a flat array (one-level).

Input:
[1, [2, [3, 4], 5]]

Output:
[1, 2, 3, 4, 5] 
*/


function flatArray (arr) {

    return arr.flat(Infinity)
}

const arr = [1, [2, [3, 4], 5]]
console.log(flatArray(arr))
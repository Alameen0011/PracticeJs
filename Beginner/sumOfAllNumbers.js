/*
Sum all numbers in an array
Input: [1, 2, 3, 4] → Output: 10

*/

function sumOFNumInGiven(arr){

    let sum = 0;

    for(let num of arr){
        sum += num
    }


    return sum



}

let arr = [1,2,3,4]
const returnedNUm = sumOFNumInGiven(arr)


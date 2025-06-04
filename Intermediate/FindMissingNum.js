/*
Problem: An array has numbers from 1 to n, but one is missing. Find it.

Input:
[1, 2, 4, 5]
(n = 5)

Output:
3

*/


const findMissing = (nums) => {

let n = 5
    for(let i = 1; i< n; i++){
        if(!nums.includes(i)){
          return i
        }
    }

   
}

const nums = [1, 2, 3, 5]
console.log(findMissing(nums))
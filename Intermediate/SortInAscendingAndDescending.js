

/*
Problem: Sort numbers from smallest to largest, and then largest to smallest.

Input:
[3, 1, 4, 2]

Output (Ascending): [1, 2, 3, 4]
Output (Descending): [4, 3, 2, 1]

*/


const sorting = (arr) => {

    return arr.sort((a , b) => b - a)

}

const numbers = [3, 1, 4, 2]
console.log(sorting(numbers))
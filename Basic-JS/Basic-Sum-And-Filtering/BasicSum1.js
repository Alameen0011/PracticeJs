// Sum of even numbers
// Write a function to calculate the sum of all odd numbers in an array.
// Example: [1, 2, 3, 4] → 6


const calculateOddSum = (oddArr) => {
    console.log(oddArr,": Odd Array")

    let sum = 0;

    for(let i = 0; i< oddArr.length ; i++){
        if(oddArr[i] % 2 == 1){
            sum += oddArr[i]

        }
    }

    return sum;
    

}

const arr = [ 1, 2, 3, 4] 

const findedOddSum = calculateOddSum(arr)

console.log(findedOddSum)
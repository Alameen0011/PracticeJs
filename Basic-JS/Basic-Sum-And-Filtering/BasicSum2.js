// Sum of even numbers
// Write a function to calculate the sum of all even numbers in an array.
// Example: [1, 2, 3, 4] → 6


const calculateEvenSum = (evenArr) => {
    console.log(evenArr,": Even Array")

    let sum = 0;

    for(let i = 0; i< evenArr.length ; i++){
        if(evenArr[i] % 2 == 0){
            sum += evenArr[i]

        }
    }

    return sum;
    

}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

const findedEvenSum = calculateEvenSum(arr)

console.log(findedEvenSum)



// Sum of numbers greater than a given value
// Write a function to calculate the sum of numbers in an array that are greater than 5.
// Example: [1, 2, 6, 7, 8] → 21


const CalculateSumGreaterThanFive = (realArr,limit = 5) => {
    let sum  = 0;
    for(let i = 0; i< realArr.length; i++){
        if(realArr[i] > limit){
            console.log(`value greater than ${limit} :`, realArr[i])
                sum += realArr[i]
            
        }
    }
    return sum;

}


const arr = [1, 2, 6, 7, 8] 
const limit = 6

const calculatedSum = CalculateSumGreaterThanFive(arr,limit)

console.log(calculatedSum)
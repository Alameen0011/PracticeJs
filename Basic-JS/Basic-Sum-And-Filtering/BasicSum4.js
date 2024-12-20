// Count numbers divisible by x
// Write a function to count how many numbers in the array are divisible by a given number x.
// Example: [10, 15, 20, 25, 30] with x=5 → 5

const Calculation = (sampleArr,divNum = 5) => {

    let count = 0
    for(let i = 0; i< sampleArr.length ; i++){
        if(sampleArr[i] % divNum == 0){
            count++
        }
    }
    return count

}

const arr = [10, 15, 20, 26, 32] 
const divNum = 5

const calculated = Calculation(arr,divNum)

console.log(calculated)
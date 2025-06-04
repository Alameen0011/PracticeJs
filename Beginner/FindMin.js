/*
Find the minimum number in an array
Input: [4, 2, 8, 1] → Output: 1



*/

const findMin = (arr) => {
//implement code here

 let Min = arr[0]

  arr.forEach((val) => {
        if(val < Min){
            Min = val
        }
  })

  return Min

}

let arr = [4, 3, 8, 2]
const Min = findMin(arr)

console.log(Min)
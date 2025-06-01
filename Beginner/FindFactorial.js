

const findFactorial = (num) => {
// n! product of all positive integer from 1 to n
  let result = 1

  for(let i = 2; i <= num ; i++ ){
       result =  i * result
  }

  return result;



}

const num  = 6
console.log(findFactorial(num))
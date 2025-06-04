/*
10. Implement FizzBuzz
Problem: For numbers 1 to n:

Print "Fizz" if divisible by 3,

"Buzz" if divisible by 5,

"FizzBuzz" if divisible by both,

Else print the number.

*/

const fizzBuzz = (n) => {

    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        }else if(i % 3 === 0){
            console.log("Fizz")
        }else if(i % 5 === 0){
            console.log("Buzz")
        }else{
            console.log(i)
        }

    }

}
const  n = 15;
fizzBuzz(n)
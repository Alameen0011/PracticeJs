
// //Functioin statement - function declaration
// function findLength(){

// }

// //function expression - named function expresssion, anonymous funciton
// const LongestLength = function hello(){
    
// }

// //anonymous function

/*
Find the length of the longest word in a sentence
Input: "I love JavaScript" → Output: 10 (JavaScript)
*/


const findLength = (sentence) => {
   let maxLength = 0;
   const word = sentence.split(' ')


   for(let val of word){
    if(val.length > maxLength){
        maxLength = val.length
    }
   }

   return maxLength



}

let str = "I love JavaScript"

const lengthOfLongest = findLength(str)
console.log(lengthOfLongest)



//find length of shortest word in sentence
const findMinLengthInSentence = (sentence) => {

    let minLength = 1

    let eachWord = sentence.split(' ')

    for(let word of eachWord){
        if(word.length <= minLength){
            minLength = word.length
        }
    }

    return minLength

}

const providingStr = "love I Javascript"

console.log(findMinLengthInSentence(providingStr))




/* 
Count vowels in a string
Input: "education" → Output: 5
*/

function countVowels(strParam) {
    let count = 0;
    const vowels = ['a','e','i','o','u']

    

    for(let char of strParam.toLowerCase()){

        if(vowels.includes(char)){
            count++
        }

    }

    return count
    

}

const strArg = 'hello'
console.log(countVowels(strArg))
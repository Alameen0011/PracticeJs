
const checkPalindrome = (str) => {

    let strArr = str.split('')
    let arr = []

    for(let i =strArr.length -1 ; i >= 0; i-- ){
        arr.push(strArr[i])
    }

   

  return  arr.join('') === str ? "true" : "false"
   
}

let str = "kayak"

console.log(checkPalindrome(str))
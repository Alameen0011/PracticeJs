

const ReverseString = (str) => {

    let strArr = str.split('')
    let newArr = []
    
    for(let i = strArr.length - 1; i >= 0; i--){

        newArr.push(strArr[i])
    }

    let ReversedString = newArr.join('')
    return ReversedString

}

const str = "HIMADAM"

console.log(ReverseString(str))
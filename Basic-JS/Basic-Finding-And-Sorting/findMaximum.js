


const findMaximum = (exampleArray) => {
    let mx = exampleArray[0];
    for(let i = 0; i< exampleArray.length; i++){
        if(exampleArray[i] > mx){
            mx = exampleArray[i]
        }

    }
    return mx

}


const exampleArray = [3, 7, 3, 1, 9, 12, 5, 7, 2, 12];

console.log(findMaximum(exampleArray))

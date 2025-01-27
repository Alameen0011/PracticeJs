

const findMinimum = (arr) => {
    let min = arr[0];
    for(let i = 0; i< arr.length ;i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min

}


const exampleArray = [3, 7, 3, 1, 9, 12, 5, 7, 2, 12];

console.log(findMinimum(exampleArray))
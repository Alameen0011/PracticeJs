


const sortAscend = (arr) => {
   for(let i = 0; i< arr.length; i++){
    for(let j = i + 1; j< arr.length; j++){
        if(arr[i] > arr[j]){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp

        }
    }
   }
   return arr

    
}




const exampleArray = [3, 7, 3, 1, 9, 12, 5, 7, 2, 12];

console.log(sortAscend(exampleArray))


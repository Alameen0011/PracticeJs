


const findSecondLargest = (arr) => {
    let flg = arr[0];
    let slg = arr[1];

    for(let i = 0; i< arr.length; i++){
        if(arr[i] >  flg){
           
            slg = flg
            flg = arr[i]
        }

    }
    return flg 


}


const exampleArray = [3, 7, 3, 1, 9, 12, 5, 7, 2, 12];

console.log(findSecondLargest(exampleArray))
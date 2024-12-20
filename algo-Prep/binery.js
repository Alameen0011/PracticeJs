//Problem = Given a sorted array of 'n' elements and a target element't',find the index of 't' in the array
// . Return -1 if the target element is not found

let myarr = [-5,2,10,4,5,6]
let target = 6


newArr= myarr.sort()

function Bsearch(arr,target){
    if(arr === null){
        return -1
    }
    for(let i = 0 ; i < arr.length ; i++){
        if(arr.length/2  === target){
            return i
        }else if(target > arr[i]){
            //remove left half
        }else if (target < arr[i]){
            //remove right half
        }

    }
   
}














console.log(elementFound(newArr,target))
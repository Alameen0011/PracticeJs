//linear search given a array and target return index if target found else return -1 

let myarr = [-5,2,10,4,5,6]
let target = 6
function elementFound(arr,target ){
   for(let i = 0; i < arr.length ; i++){
    if(arr[i] === target){
        return i
    }
   }
   return -1
}


console.log(elementFound(myarr,target))






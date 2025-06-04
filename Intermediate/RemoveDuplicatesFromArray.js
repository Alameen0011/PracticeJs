/*
Problem: Remove all repeated values and return a unique list.

Input:
[1, 2, 2, 3, 4, 4, 5]

Output:
[1, 2, 3, 4, 5]

*/

/*
Approaches :-
* Manual {
    :Nested For Loops + Extra Array
    :In-Place Removal with Element Shifting
}
* using In-built methods {
    :.filter() and .indexOf()
    :.reduce() and .includes()
    : for loop and includes()
    :.sort() + for loop (Not recommended unless array is sorted)
}
* using set
* using objects - frequency lookup 

*/


const RemoveDuplicate = (nums) => {
    let newArr = []

    for(let num of nums){
        if(!newArr.includes(num)){
            newArr.push(num)
        }
    }

    return newArr

}

const numbers = [1, 2, 2, 3, 4, 4, 5]

console.log(RemoveDuplicate(numbers))


/* Manual Approach .1 using nested loop + variable indicating to add or not and extra array  */

/*  const RemoveDuplicate = (nums) => {

    const unique = []

    for(let i = 0; i < nums.length; i++){
        let found = false  // lets assume that the num of is not in unique array
        
        for(let j = 0; j < unique.length ; j++){
            console.log("inside j loop")
            if(nums[i] === unique[j]){
                found = true;
                break;
            }
            
        }


        if(!found){
            unique.push(nums[i])
        }
    }

    return unique


}

const numbers = [1, 2, 2, 3, 4, 4, 5]

console.log(RemoveDuplicate(numbers))

*/

// Manual Approach .2 In-Place Removal with Element Shifting

/*

function RemoveDuplicate(a){

for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] == a[j]) {
      //shift that element to left
      for (let m = j; m < a.length; m++) {
        a[m] = a[m + 1];
      }
      a.length--;
      j--;
    }
  }
}

return a

}

const a = [1, 2, 3, 4, 4, 6, 8, 9];
console.log(RemoveDuplicate(a))


*/
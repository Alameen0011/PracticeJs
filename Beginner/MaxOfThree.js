//agenda is to find maximum number :-
let arr = [4,7,2,10,20]

const MaxOfThree = () => {

    let max = arr[0]
    //implement code here
    for(let i = 0; i< arr.length ; i++){

        if(arr[i] > max){
            max = arr[i]

        }

    }
    return max
}

console.log(MaxOfThree())



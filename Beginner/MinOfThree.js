//agenda is to find minimum of three number
let arr = [4, 7, 2 ,3];

function MinOfThree() {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}


console.log(MinOfThree())

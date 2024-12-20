// Write a function that filters out all odd numbers from an array.



function filteredArr(Arr) {
  return Arr.filter((data) => data % 2 == 1);
}


const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(filteredArr(numbers))


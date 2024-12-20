// Given an array of numbers, write a function that returns a new array with each number squared.

const numSquared = (Arr) => {
  return Arr.map((val, index, array) => {
    return val * val;
  });
};

const numbers = [1, 2, 3, 4, 5];




const hey = numbers.map((val, index, arr) => {
  console.log(`currentValue${val},currentIndex${index},currentarray${arr}`);
  return val * val;
});

console.log(hey);

console.log(numSquared(numbers));

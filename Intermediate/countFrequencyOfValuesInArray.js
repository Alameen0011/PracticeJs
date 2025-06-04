/*

Problem: Count how many times each element occurs.

Input:
['a', 'b', 'a', 'c', 'b', 'a']

Output:
{ a: 3, b: 2, c: 1 }



*/

const countFrequency = (arr) => {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }

  return obj;
};

const arr = ["a", "b", "a", "c", "b", "a"];
console.log(countFrequency(arr));

const a = [1, 2, 3, 4, 4, 6, 8, 9];

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
console.log(a);

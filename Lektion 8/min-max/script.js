const arr = [1, 20, 100, 9];

// console.log(Math.max(1, 20, 100, 9));
// This is the same thing!
// It's called the spread operator
console.log(Math.max(...arr));
console.log(Math.min(...arr));

arr.sort();
// ["1", "20", "100", "9"]

arr.sort(function(a, b) {
  return a - b;
});

// [1, 9, 20, 100]

console.log(arr);

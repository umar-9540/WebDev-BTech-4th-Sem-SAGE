let number = [1, 2, 3, 4];

let double = number.map((num) => num * 2);
console.log(double); // 2, 4, 6, 8

let even = number.filter((num) => num % 2 == 0);

console.log(even); // 2, 4

let prices = [10, 20, 30, 40];

let total = prices.reduce(
  (accumulator, currentItem) => accumulator + currentItem,
  0,
);
console.log(total); // 100

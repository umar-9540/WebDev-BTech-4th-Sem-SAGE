// let words = ["apple", "banana", "orange"];
// let upper = words.map((w) => w.toUpperCase());
// console.log(upper);

let cart = [
  { id: 1, name: "Laptop", price: 100 },
  { id: 1, name: "Mobile", price: 200 },
  { id: 1, name: "Computer", price: 300 },
];

// let names = cart.map((item) => item.name + " " + item.price);
let names = cart.map((item) => ({
  name: item.name,
  price: item.price,
}));
console.log(names);

let words = ["apple", "banana", "cat", "elephant", "dog"];
let greater = words.filter((w) => w.length >= 5);
console.log(greater);

let people = [
  { name: "A", age: 16 },
  { name: "B", age: 22 },
  { name: "C", age: 17 },
  { name: "D", age: 24 },
];

let user = people
  .filter((p) => p.age >= 18)
  .map((p) => ({
    name: p.name,
    age: p.age,
  }));
console.log(user);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let square = numbers.filter((n) => n % 2 == 0).map((n) => n * n);
console.log(square);

let employee = [
  { id: 1, name: "A", salary: 30000 },
  { id: 2, name: "B", salary: 20000 },
  { id: 3, name: "C", salary: 40000 },
  { id: 4, name: "D", salary: 50000 },
];

let fruits = ["Apple", "Mango", "Apple", "Orange", "Apple", "Mango"];

let occurence = fruits.reduce((acc, curr) => {
  // acc["Apple"]
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(occurence);

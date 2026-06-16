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

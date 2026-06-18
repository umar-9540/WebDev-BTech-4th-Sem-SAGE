// console.log(x);

// var x = 5;

// console.log(x);

// sayHello("Rakesh");

// function sayHello(name) {
//   console.log(`Hello, ${name}`);
// }

// sayHello("Ankit");

// console.log(x);   // Temporal Dead Zone

// let x = 5;

// console.log(x);

// dance();
// console.log(dance);
// let dance = function () {
//   console.log("Dancing");
// };
// // Functin Expression and Arrow Function follow the rules of variables,
// // not function
// dance();
// console.log(dance);

// fly(); // Reference Error
// const fly = () => {
//   console.log("Flying");
// };
// fly();

function check() {
  console.log(color);
  //   let color = "Red";
}
var color = "Blue";
check();

// DESTRUCTURING
let obj = { id: 1, name: "Lucky", color: "Blue", subject: "DSA" };
let { id, name, ...obj2 } = obj;
console.log(obj2);

let arr1 = ["Apple", 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2);

let car = { make: "Toyota", model: "Corolla" };

console.log(Object.keys(car)); // ["make", "model"]

console.log(Object.values(car)); // ["Toyota", "Corolla"]

console.log(Object.entries(car)); // [["make", "Toyota"], ["model", "Corolla"]]

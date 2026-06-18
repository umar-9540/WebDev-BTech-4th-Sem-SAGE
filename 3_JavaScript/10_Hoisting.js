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

fly(); // Reference Error
const fly = () => {
  console.log("Flying");
};
fly();

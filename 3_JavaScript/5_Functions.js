// function greet(name) {
//   // // Function Definition
//   //   return "Hello, " + name + "!";
//   return `Hello, ${name}!`; // template literal
// }

// let message = greet("Ankit");
// console.log(message);

// const expression = function (name) {
//   // Function Expression
//   return `Hello, ${name}!`;
// };

// console.log(expression("Neha"));

// const arrowFunc = (name) => {
//   return `Hello, ${name}!`;
// };
// console.log(arrowFunc("Ankit"));

let user = {
  name: "Manosh",
  age: 92,
  dog: function () {
    return "Bark";
  },
};

user.subject = "DSA";
user["grade"] = 80;

console.log(user);
console.log(user.dog());

// Callback function
function sayGoodbye() {
  console.log("Goodbye!");
}
// Higher-Order Function taking a function as an argument
function executeAction(action) {
  console.log("Executing action...");
  action(); // Calls the function passed to it
}
executeAction(sayGoodbye);

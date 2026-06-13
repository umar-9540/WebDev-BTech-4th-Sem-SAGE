// var, let, and const are JavaScript keywords used to declare variables

// var is Function-scoped and allows re-declaration
// var a = 10;
// console.log(a);

// a = true;
// console.log(a);

// let is Block-scoped and can be reassigned, but cannot be re-declared
// let a = "String";
// console.log(a);

// a = 10;
// console.log(a);

// const is Block-scoped, cannot be reassigned, and must be initialized upon declaration
// const a = 10;
// console.log(a);

// a = "string";
// console.log(a);

// let a;
// console.log(a);  // undefined - Value hasn't been set yet, Automatically assigned

// let b = null;
// console.log(b);  // Intentional "empty" value, Manually assigned

// let a = "5" + 2;
// console.log(a);

let a = "10";
if (a === 10) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}

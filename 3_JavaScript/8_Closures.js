// var a = 10;

// function parent() {
//   let parentVar = "I am parent";

//   return function child() {
//     let childVar = "I am child";

//     console.log(parentVar);
//     console.log(childVar);
//     console.log(a);
//   };
// }

// let func = parent();
// func();

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

let func = createCounter(); // closure => count = 0
func(); // count++ => 1
func(); // count++ => 2
func();

let func2 = createCounter();
func2();
func2();
func2();

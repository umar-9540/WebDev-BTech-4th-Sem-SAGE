// const p = new Promise((res, rej) => {
//   let data = "Data Recieved";
//   let success = true;

//   if (success) {
//     res(data);
//   } else {
//     rej();
//   }
// });

// p.then((data) => {
//   console.log(data);
//   return 2; // Promise Always returns a promise
// })
//   .then((num) => {
//     console.log(num * 2);
//     return num * 2; // Promise Always returns a promise
//   })
//   .then((num) => {
//     console.log(num * 2);
//   })
//   .catch(() => {
//     console.log("Data not recieved");
//   })
//   .finally(() => {
//     console.log("Function Ended");
//   });

function checkEven(num) {}

checkEven(4).then;

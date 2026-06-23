function wait() {
  // let time = new Date().getTime();
  // while (new Date().getTime() < time + 5000) {}

  // setTimeout(() => {
  //   console.log("Timeout Executed");
  // }, 0);

  var id = setInterval(() => {
    console.log("2 sec passed");
  }, 2000);

  setTimeout(() => {
    clearInterval(id);
    console.log("Code stopped");
  }, 5000);
}

console.log("Hello");
wait();
console.log("World");

// console.log("Randon tasks");
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

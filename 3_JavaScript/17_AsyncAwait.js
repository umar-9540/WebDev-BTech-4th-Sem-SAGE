const getData = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise Resolve Ho Gya");
  }, 5000);
});

const getData2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise Resolve Ho Gya 2");
  }, 3000);
});

// console.log(getData());

async function handlePromise() {
  console.log("Hello");
  const val = await getData; // always return a promise
  console.log(val);
  console.log("World");

  const val2 = await getData2; // always return a promise
  console.log(val2);
  console.log("World 2");
}

handlePromise();
// console.log("Random Tasks");
// console.log("Random Tasks");
// console.log("Random Tasks");
// console.log("Random Tasks");
// console.log("Random Tasks");

// getData().then((msg) => {
//   console.log("Hello");
//   console.log(msg);
//   console.log("World");
// });

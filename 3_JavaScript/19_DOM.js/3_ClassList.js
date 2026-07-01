const item = document.querySelector("body");
console.log(item);

// setTimeout(() => {
//   item.classList.add("movie");
// }, 1000);

// setTimeout(() => {
//   item.classList.remove("movie");
// }, 2000);

setInterval(() => {
  item.classList.toggle("movie");
}, 200);

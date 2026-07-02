let arr = ["Avatar", "Spiderman"];

const ul = document.querySelector(".movieList");

// for (let item of arr) {
//   // way 1st => O(N)
//   // ul.innerHTML += `<li>${item}</li>`;

//   // way 2 => O(1)
//   const li = document.createElement("li");

//   li.innerText = `${item}`;

//   ul.appendChild(li)
// }

// for (let i = 0; i <= 100; i++) {
//   const li = document.createElement("li");

//   let text = "";

//   if (i % 3 == 0) text += "Fizz";

//   if (i % 5 == 0) text += "Buzz";

//   li.innerText = text == "" ? i : text;
//   ul.appendChild(li);
// }

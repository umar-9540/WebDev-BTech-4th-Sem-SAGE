let arr = [
  "Avatar",
  "Spiderman",
  "Superman",
  "Manosh",
  "Superman",
  "Superman",
  "Superman",
];

const ul = document.querySelector(".movieList");

for (let item of arr) {
  ul.innerHTML += `<li>${item}</li>`;
}

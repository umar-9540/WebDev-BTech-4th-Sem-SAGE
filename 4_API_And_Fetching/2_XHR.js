let url = "https://jsonplaceholder.typicode.com/todos";

const ul = document.querySelector("#list");
const btn = document.querySelector("#btn");

function addTaskToList(data) {
  for (let i = 0; i < data.length; i++) {
    const li = document.createElement("li");
    li.innerText = data[i].title;
    ul.appendChild(li);
  }
}

let xhr = new XMLHttpRequest();
xhr.open("GET", url);

btn.addEventListener("click", () => {
  xhr.send();
});

xhr.onload = (data) => {
  data = data.target.response;
  addTaskToList(JSON.parse(data));
};

xhr.onerror = (err) => {
  console.log(err);
};

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

btn.addEventListener("click", () => {
  axios
    .get(url)
    .then((res) => {
      // console.log(data.data);
      data = res.data;
      addTaskToList(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

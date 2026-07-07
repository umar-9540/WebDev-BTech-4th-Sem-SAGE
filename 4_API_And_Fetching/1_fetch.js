let url = "https://jsonplaceholder.typicode.com/todos";

const ul = document.querySelector("#list");

fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  });

const inp = document.querySelector("#inp");
const btn = document.querySelector("#btn");
const ul = document.querySelector("#ul");

const todos = [
  { task: "Cricket", id: 1 },
  { task: "Coding", id: 2 },
];

let currentId = todos.length + 1;

class Todo {
  static addTodo(taskName) {
    let li = document.createElement("li");
    li.innerText = taskName;

    let btn1 = document.createElement("button");
    btn1.innerText = "⬇️";
    btn1.classList.add("decrease-priority");
    let btn2 = document.createElement("button");
    btn2.innerText = "⬆️";
    btn2.classList.add("increase-priority");
    let btn3 = document.createElement("button");
    btn3.innerText = "❌";
    btn3.classList.add("delete-task");
    let btn4 = document.createElement("button");
    btn4.innerText = "📝";
    btn4.classList.add("update-task");

    li.appendChild(btn1);
    li.appendChild(btn2);
    li.appendChild(btn3);
    li.appendChild(btn4);
    //   console.log(li);

    ul.appendChild(li);
    // console.log(ul);

    todos.push({
      task: taskName,
      id: currentId++,
    });
    console.log(todos);
  }
}

// ------------------------ ADD A TASK ---------------------------
btn.addEventListener("click", () => {
  let inpValue = inp.value.trim();
  //   console.log(inpValue);
  inp.value = "";

  Todo.addTodo(inpValue);
});

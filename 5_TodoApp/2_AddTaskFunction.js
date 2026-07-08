const inp = document.querySelector("#inp");
const btn = document.querySelector("#btn");
const ul = document.querySelector("#ul");

let todos = [
  { task: "Cricket", id: 1 },
  { task: "Coding", id: 2 },
  { task: "Sleep", id: 3 },
];

let currentId = todos.length + 1;

class Todo {
  static addTodo(taskName, isRefreshing = false) {
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

    if (isRefreshing == false) {
      todos.push({
        task: taskName,
        id: currentId++,
      });
    }
    console.log(todos);
  }

  static refreshTodos() {
    ul.innerText = "";
    for (let i = 0; i < todos.length; i++) {
      this.addTodo(todos[i].task, true);
    }
  }
}

Todo.refreshTodos();

// ------------------------ ADD A TASK ---------------------------
btn.addEventListener("click", () => {
  let inpValue = inp.value.trim();
  //   console.log(inpValue);
  inp.value = "";

  if (inpValue) {
    Todo.addTodo(inpValue);
  }
});

// ------------------------ DELETE A TASK ---------------------------
ul.addEventListener("click", (ev) => {
  let element = ev.target;
  if (element.classList.contains("delete-task")) {
    let name = element.parentElement.innerText;
    name = name.slice(0, name.length - 7);
    console.log(name);

    // element.parentElement.remove(); // only removes from DOM
    // console.log(todos);

    let idx = -1;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].task == name) {
        idx = i;
      }
    }

    if (idx != -1) {
      todos.splice(idx, 1);
      console.log(todos);
      Todo.refreshTodos();
    }
  }
});

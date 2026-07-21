const API_URL = "/todos";
let todos = [];

const todoForm = document.querySelector("#form");
const titleInput = document.querySelector("#title-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");

fetchTodos();

async function fetchTodos() {
  try {
    const response = await fetch(API_URL);
    console.log(response);
    todos = await response.json();
    console.log(todos);
    renderTodos();
  } catch (err) {
    console.log(err);
  }
}

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const div = document.createElement("div");
    div.className = "todo";
    div.innerHTML = `
    <div class="todo-content">
        <h1>${todo.title}</h1>
    </div>
    <div class="actions">
        <button>⬆️</button>
        <button>⬇️</button>
        <button onclick="deleteTodo(${todo._id})">❌</button>
        <button>📝</button>
    </div>
    `;

    todoList.appendChild(div);
  });
}

// Add Todo
todoForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const todo = {
    title: titleInput.value,
  };
  titleInput.value = "";

  try {
    await fetch(API_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(todo),
    });

    fetchTodos();
  } catch (err) {
    console.log(err);
  }
});

// Delete Todo
async function deleteTodo(id) {
  console.log(id);
  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchTodos();
  } catch (err) {
    console.log(err);
  }
}

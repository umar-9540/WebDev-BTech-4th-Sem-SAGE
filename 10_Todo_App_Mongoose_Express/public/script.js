const API_URL = "/todos";
let todos = [];

let todoForm = document.querySelector("#form");
let titleInput = document.querySelector("#title-input");
let addBtn = document.querySelector("#add-btn");
let todoList = document.querySelector("#todo-list");
let todoId = document.querySelector("#todoId");
let cancelBtn = document.querySelector("#cancel");

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
        <button onclick="changePriority('${todo._id}', 'increase')" >⬆️</button>
        <button onclick="changePriority('${todo._id}', 'decrease')" >⬇️</button>
        <button onclick="deleteTodo('${todo._id}')">❌</button>
        <button onclick="editTodo('${todo._id}')">📝</button>
    </div>
    `;

    todoList.appendChild(div);
  });
}

// Add OR Edit Todo
todoForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const todo = {
    title: titleInput.value,
  };
  titleInput.value = "";

  const isEditing = todoId.value !== "";
  console.log(isEditing);

  try {
    if (isEditing) {
      await fetch(`${API_URL}/${todoId.value}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(todo),
      });
    } else {
      await fetch(API_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(todo),
      });
    }

    fetchTodos();
    resetForm();
  } catch (err) {
    console.log(err);
  }
});

// Delete Todo
async function deleteTodo(id) {
  // console.log(id);
  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchTodos();
  } catch (err) {
    console.log(err);
  }
}

async function changePriority(id, action) {
  try {
    await fetch(`${API_URL}/${id}/priority`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action }),
    });
    fetchTodos();
  } catch (err) {
    console.log(err);
  }
}

async function editTodo(id) {
  const todo = todos.find((t) => t._id === id);
  if (!todo) throw err;

  todoId.value = id;
  titleInput.value = todo.title;
  addBtn.textContent = "Update Todo";
  cancelBtn.style.display = "inline-block";
}

function resetForm() {
  todoId.value = "";
  titleInput.value = "";
  addBtn.textContent = "Add Todo";
  cancelBtn.style.display = "none";
}

cancelBtn.addEventListener("click", resetForm);

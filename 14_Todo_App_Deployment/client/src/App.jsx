import { useState, useEffect } from "react";
import "./App.css";

// Uses Render URL in production, falls back to Vite proxy in development
const API_URL = import.meta.env.VITE_API_URL || "";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  // Fetch all todos on load
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch(`${API_URL}/api/todos`);
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      const response = await fetch(`${API_URL}/api/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      if (response.ok) {
        setTitle("");
        fetchTodos(); // Refresh list
      }
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const toggleComplete = async (id, currentStatus) => {
    try {
      await fetch(`${API_URL}/api/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isCompleted: !currentStatus }),
      });
      fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const changePriority = async (id, action) => {
    try {
      await fetch(`${API_URL}/api/todos/${id}/priority`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });
      fetchTodos();
    } catch (error) {
      console.error("Error changing priority:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`${API_URL}/api/todos/${id}`, { method: "DELETE" });
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="container">
      <h1>MERN Todo App</h1>

      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <div className="todo-list">
        {todos.length === 0 ? <p>No tasks yet!</p> : null}

        {todos.map((todo) => (
          <div
            key={todo._id}
            className={`todo-item ${todo.isCompleted ? "completed" : ""}`}
          >
            <div
              className="todo-content"
              onClick={() => toggleComplete(todo._id, todo.isCompleted)}
            >
              <input type="checkbox" checked={todo.isCompleted} readOnly />
              <span
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
            </div>

            <div className="todo-actions">
              <span className="priority-badge">Priority: {todo.priority}</span>
              <button onClick={() => changePriority(todo._id, "increase")}>
                +
              </button>
              <button onClick={() => changePriority(todo._id, "decrease")}>
                -
              </button>
              <button
                onClick={() => deleteTodo(todo._id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

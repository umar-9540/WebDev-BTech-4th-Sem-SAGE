import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save to LocalStorage whenever 'todos' array changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, description) => {
    const newTodo = { id: Date.now(), title, description };
    setTodos([...todos, newTodo]); // Update state
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <h2>My Todo List</h2>
      {/* Passing function as a prop to child */}
      <TodoForm addTodo={addTodo} />

      <div>
        {todos.map((todo) => (
          /* Passing data and functions as props */
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
}
export default App;

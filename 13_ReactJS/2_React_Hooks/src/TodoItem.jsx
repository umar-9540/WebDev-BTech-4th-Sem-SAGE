import React from "react";

function TodoItem({ todo, deleteTodo }) {
  return (
    <div
      style={{ border: "1px solid #ccc", margin: "10px 0", padding: "10px" }}
    >
      <h3 style={{ margin: "0 0 5px 0" }}>{todo.title}</h3>
      <p style={{ margin: "0 0 10px 0" }}>{todo.description}</p>

      {/* Trigger parent function using the current todo's ID */}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}
export default TodoItem;

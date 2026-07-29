import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) return; // Validation

    addTodo(title, desc); // Call parent function

    // Clear inputs
    setTitle("");
    setDesc("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Task Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
export default TodoForm;

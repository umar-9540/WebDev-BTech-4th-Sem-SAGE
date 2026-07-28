import React, { useEffect, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  console.log("App Rendered");

  let url = "https://jsonplaceholder.typicode.com/todos";

  // SYNTAX => useEffect(fn, []) // Dependency Array
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <span></span>
      <button>Increase</button>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;

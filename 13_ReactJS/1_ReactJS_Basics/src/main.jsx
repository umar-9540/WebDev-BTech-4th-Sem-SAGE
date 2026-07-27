import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'

function App({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li>
          {todo.name} : {todo.description}
        </li>
      ))}
    </ul>
  );
}

let todos = [
  { name: "Swim", description: "Good for Health" },
  { name: "Code", description: "Good for Future" },
];

createRoot(document.getElementById("root")).render(<App todos={todos} />);

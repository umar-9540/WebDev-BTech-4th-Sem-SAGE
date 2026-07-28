import { useState } from "react";
import "./App.css";

function UseStateHook() {
  // let count = 0;
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          // count++;
          setCount(count + 1);
          console.log(count);
        }}
      >
        Increase
      </button>
    </div>
  );
}

export default UseStateHook;

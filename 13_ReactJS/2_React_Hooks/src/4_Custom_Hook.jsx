import React from "react";
import useToggle from "./hooks/useToggle";

const Custom_Hook = () => {
  const [value, handleToggle] = useToggle();

  const [value2, handleToggle2] = useToggle();
  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      <button onClick={() => handleToggle(false)}>Hide</button>
      <button onClick={() => handleToggle(true)}>Show</button>

      {value ? (
        <div>
          <h1>This is a Secret Message</h1>
        </div>
      ) : null}

      <button onClick={handleToggle2}>Toggle</button>
      <button onClick={() => handleToggle2(false)}>Hide</button>
      <button onClick={() => handleToggle2(true)}>Show</button>

      {value2 ? (
        <div>
          <h1>Second Para</h1>
        </div>
      ) : null}
    </div>
  );
};

export default Custom_Hook;

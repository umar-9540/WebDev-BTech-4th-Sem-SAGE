import React, { useRef, useState } from "react";

const UseRefHook = () => {
  // const [input, setInput] = useState("");
  let inpRef = useRef(null);

  function handleName() {
    // console.log(input);
    console.log(inpRef.current.value);
  }
  return (
    <div>
      <input
        ref={inpRef}
        // onChange={(e) => setInput(e.target.value)}
        id="inp"
        type="text"
        placeholder="Enter Name"
      />
      <button onClick={handleName}>Add</button>
    </div>
  );
};

export default UseRefHook;

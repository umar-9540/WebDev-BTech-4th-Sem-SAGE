import React, { createContext } from "react";
import Parent from "./Parent";

export const dataContext = createContext();

const App = () => {
  const x = "Hello, from App";

  return (
    <div>
      <dataContext.Provider value={x}>
        <Parent />
      </dataContext.Provider>
    </div>
  );
};

export default App;

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// import React, { createContext } from "react";
// import Parent from "./Parent";

// export const dataContext = createContext();

// const App = () => {
//   const x = "Hello, from App";

//   return (
//     <div>
//       <dataContext.Provider value={x}>
//         <Parent />
//       </dataContext.Provider>
//     </div>
//   );
// };

// export default App;

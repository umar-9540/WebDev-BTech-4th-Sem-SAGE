import React, { useContext } from "react";
import { dataContext } from "../App";

const Grandchild = () => {
  const x = useContext(dataContext);

  return <div>Grandchild : {x}</div>;
};

export default Grandchild;

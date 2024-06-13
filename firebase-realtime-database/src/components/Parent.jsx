import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <div>
      <Child as="h1">I am h1.</Child>
    </div>
  );
};

export default Parent;

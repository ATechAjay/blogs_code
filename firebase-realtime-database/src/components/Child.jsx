import React from "react";

const Child = (props) => {
  // Here now as becomes a Component
  const { as: Component, children } = props;

  // as = Component
  console.log(Component);

  // Children = I am h1.
  console.log(children);

  return <Component>{children}</Component>;
};

export default Child;

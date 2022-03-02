import React from "react";

const DemoOutput = (props) => {
  console.log("demo");
  return <p>{props.show ? "I am paragraph" : ""}</p>;
};

export default React.memo(DemoOutput);

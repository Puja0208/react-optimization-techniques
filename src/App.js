import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP_RUNNING");

  const clickHandler = useCallback(() => {
    setShowParagraph((prevShow) => !prevShow);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />

      <Button onClick={clickHandler}>Show button</Button>
    </div>
  );
}

export default App;

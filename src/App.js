import "./App.css";
import Output from "./components/output";
import Input from "./components/input";
import Button from "./components/button";
import { useState } from "react";

function App() {
  const [output, setOutputValue] = useState(0);
  const [input, setInputValue] = useState(0);

  function clickEventHandling(value) {
    console.log(value);
  }
  return (
    <div className="container">
      <div className="calculator_frame">
        <Output output={output} />
        <Input input={input} />
        <Button clickEventHandling={clickEventHandling} />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";

function Calculator() {
  const [number1, setNumber1] = useState("0");
  const [number2, setNumber2] = useState("0");
  const [result, setResult] = useState("");

  const handleNumber1 = (e) => {
    setNumber1(e.target.value);
  };

  const handleNumber2 = (e) => {
    setNumber2(e.target.value);
  };

  const handleResult = (operation) => {
    if (operation === "+") {
      setResult(Number(number1) + Number(number2));
    } else if (operation === "-") {
      setResult(Number(number1) - Number(number2));
    } else if (operation === "*") {
      setResult(Number(number1) * Number(number2));
    } else if (operation === "/") {
      setResult(Number(number1) / Number(number2));
    }
  };
  return (
    <>
      <input type="number" value={number1} onChange={handleNumber1} />
      <input type="number" value={number2} onChange={handleNumber2} />
      <button onClick={() => handleResult("+")}>Add</button>
      <button onClick={() => handleResult("-")}>Subtract</button>
      <button onClick={() => handleResult("*")}>Multiply</button>
      <button onClick={() => handleResult("/")}>Divide</button>
      <h1>Result:{result}</h1>
    </>
  );
}

export default Calculator;

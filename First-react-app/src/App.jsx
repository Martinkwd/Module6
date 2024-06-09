import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HelloWorld from "./helloWorld";
import BigCats from "./BigCats";
import MoodChanger from "./MoodChanger";
import Calculator from "./Calculator";

function App() {
  return (
    <>
      <HelloWorld name="Martin">Good Morning</HelloWorld>
      <BigCats></BigCats>
      <MoodChanger></MoodChanger>
      <Calculator></Calculator>
    </>
  );
}

export default App;

import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  useEffect(() => {
    fetch("http://localhost:8080")
      .then((response) => response.json())
      .then((res) => {
        console.log("got response ");
        console.log(res);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo as unknown as string} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;

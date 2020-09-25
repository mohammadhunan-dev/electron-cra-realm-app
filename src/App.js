import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getRealmApp } from "./getRealmApp";

// const { ipcMain } = require("electron");

const electron = window.require("electron");
// const ipcRenderer = electron.ipcRenderer;

// Access the Realm App.
const myRealmApp = getRealmApp();

function App() {
  console.log("electron", electron);
  console.log("myRealmApp", myRealmApp);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
}

export default App;

import React from "react";

import logo from "./logo.svg";
import "./App.css";
import Redu from "./containers/Redu";
//import * as express  from "express";

//express app config
const express = require("express");
const app: any = express();
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get("/", (req: any, res: any) => res.send("hi"));

const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Redu />
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

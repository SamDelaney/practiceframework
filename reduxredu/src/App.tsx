import React from "react";

import "./App.css";
import EntryForm from "./containers/EntryFormContainer";
import WordList from "./containers/WordListContainer";
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
        <EntryForm />
        <WordList />
      </header>
    </div>
  );
};

export default App;

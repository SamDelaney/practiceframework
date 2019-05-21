import React from "react";

import "./App.css";
import EntryForm from "./containers/EntryFormContainer";
import WordList from "./containers/WordListContainer";

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

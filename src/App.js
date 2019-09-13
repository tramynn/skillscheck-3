import React from "react";
import { HashRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import routes from "./routes";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <main className="App-body">{routes}</main>
      </div>
    </HashRouter>
  );
}

export default App;

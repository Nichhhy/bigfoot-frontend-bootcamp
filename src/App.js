import React from "react";
import logo from "./logo.png";
import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Navigate, Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Button
            as="input"
            type="button"
            value="Home"
            onClick={() => navigate("/")}
          />
          <Button
            as="input"
            type="submit"
            value="Filter"
            onClick={() => navigate("/filter")}
          />
        </div>
        <Outlet />
      </header>
    </div>
  );
}

export default App;

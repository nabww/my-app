import React from "react";
//import ReactDOM from "react-dom";
import "./functionBased/App.css";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
//component file
import TodoContainer from "./functionBased/components/TodoContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router forceRefresh>
      <TodoContainer />
    </Router>
  </React.StrictMode>
);

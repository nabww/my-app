import React from "react";
//import ReactDOM from "react-dom";
import "./classBased/app.css";
import * as ReactDOM from "react-dom/client";

//component file
import TodoContainer from "./classBased/components/TodoContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>
);

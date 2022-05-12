import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
//import * as ReactDOM from "react-dom/client";

//component file
import TodoContainer from "./components/TodoContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>
);

/*ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
);*/

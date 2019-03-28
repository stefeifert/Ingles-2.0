import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import SideBar from "./sidebar";

function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap">
        <h1>
        <span style = {{ fontFamily: "Arial Helvetica", fontSize: 80, fontWeight: "bold", color:'red' }}> Ingles 2.0! </span>
        </h1>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
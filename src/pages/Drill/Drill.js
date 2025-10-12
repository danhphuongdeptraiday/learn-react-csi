import React, { useContext, useState } from "react";
import "./Drill.css";
import FirstChild from "./FirstChild/FirstChild";
import SecondChild from "./SecondChild/SecondChild";
import DrillContext, { DrillProvider } from "./DrillContext";

function Drill() {

  return (
    <DrillProvider>
      <div className="container">
        <h3>Output:</h3>

        <div className="wrapper">
          <FirstChild />
          <SecondChild />
        </div>
      </div>
    </DrillProvider>
  );
}

export default Drill;

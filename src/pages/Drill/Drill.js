import React, { useState } from "react";
import "./Drill.css";
import FirstChild from "./FirstChild/FirstChild";
import SecondChild from "./SecondChild/SecondChild";

function Drill() {
    // Callback
    const [receive, setReceive] = useState("")
    const updateData = (value) => {
      setReceive(value)
    }

  return (
    <div className="container">
      <h3>Output: {receive}</h3>

      <div className="wrapper">
        <FirstChild updateData={updateData} inputValue={receive}/>
        <SecondChild />
      </div>
    </div>
  );
}

export default Drill;

import React, { Children, useState } from "react";
import "./Drill.css";
import FristChild from "./FirstChild/FristChild";
import SecondChild from "./SecondChild/SecondChild";

function Drill() {
    // Callback
    const [receive, setReceive] = useState("")
    const sendData = (value) => {
        setReceive(value)
    }

  return (
    <div className="container">
      <h3>Output: {receive}</h3>

      <div className="wrapper">
        <FristChild content={"hello"} sendData={sendData}/>
        <SecondChild />
      </div>
    </div>
  );
}

export default Drill;

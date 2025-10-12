import React, { useContext } from "react";
import DrillContext from "../DrillContext";

function FirstChild() {

  const data = useContext(DrillContext)
  
  return (
    <div>
      <h3>FirstChild {data.receive}</h3>
      <input value={data.receive} onChange={(e) => data.setReceive(e.target.value)}/>
      <br />
      {/* <button onClick={submitSendDate}>Submit</button> */}
    </div>
  );
}

export default FirstChild;

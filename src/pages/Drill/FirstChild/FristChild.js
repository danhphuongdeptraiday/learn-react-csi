import React from "react";

function FristChild({ content, sendData }) {
    const submitSendDate = () => {
        sendData("Hello123")
    }
  return (
    <div>
      {content}
      <h3>FristChild</h3>
      <input />
      <br />
      <button onClick={submitSendDate}>Submit</button>
    </div>
  );
}

export default FristChild;

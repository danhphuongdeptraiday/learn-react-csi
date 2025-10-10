import React from "react";

function FirstChild({ updateData, inputValue }) {
    // const submitSendDate = (e) => {
    //     sendData(inputValue)
    // }

    // Lưu dữ liệu người dùng nhập từ input
    // const [inputValue, setInputValue] = useState("")
    // const updateInputValue = (e) => {
    //   setInputValue(e.target.value)
    // }

  return (
    <div>
      <h3>FirstChild</h3>
      <input value={inputValue} onChange={(e) => updateData(e.target.value)}/>
      <br />
      {/* <button onClick={submitSendDate}>Submit</button> */}
    </div>
  );
}

export default FirstChild;

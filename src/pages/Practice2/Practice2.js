import React from "react";

function Practice2() {
  const [inputValue, setInputValue] = React.useState("");
  const [checkLength, setCheckLength] = React.useState(false);

  // thuộc tính value của input
  // sự kiện onChange để lắng nghe sự thay đổi của input

  const handleChangeValueInput = (e) => {
    // e: event
    setInputValue(e.target.value);
    if (e.target.value.length > 10) {
      setCheckLength(true);
    } else {
      setCheckLength(false);
    }
  };

  return (
    <div>
      <h1>Input Example</h1>
      <input
        style={{ padding: "10px", fontSize: "16px" }}
        placeholder="Enter your name"
        value={inputValue}
        onChange={handleChangeValueInput}
      />

      <div
         style={{ color: `${checkLength ? "green" : "black"}` }}
        // style={checkLength ? { color: "green" } : { color: "red" }}
      >
        OUTPUT: {inputValue}
      </div>

      
      {/* // nếu inputValue > 10 ký tự thì text sẽ chuyển sang màu xanh lá cây */}
    </div>
  );
}

// checkLength ? "green" : "black"
// checkLength ? { color: "green" } : { color: "black"}

export default Practice2;

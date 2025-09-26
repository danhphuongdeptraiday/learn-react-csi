import React from "react";
import "./practice.css";

function Practice() {
  // useState: Nó là 1 cái hook, giúp mình tạo ra 1 cái biến và mình có thể update lại cái biến đó

  // const [biến, sét_lại_biến] = React.useState(biến_mặc_định);

  const [count, setCount] = React.useState(0);

  const [isOn, setIsOn] = React.useState(false);

  const handleClick = () => {
      setCount(count + 1);
  };

  const handleToggle = () => {
    // if (isOn === true) {
    //     setIsOn(false);
    // } else {
    //     setIsOn(true);
    // }
      setIsOn(() => !isOn);
  }

  
//   console.log(count);

  console.log("Render Practice");
  
//   const smallCondition = count < 5 ? "Nhỏ hơn 5" : "Lớn hơn hoặc bằng 5";

//   if (count < 5) {
//     smallCondition = "Nhỏ hơn 5";
//   } else {
//     smallCondition = "Lớn hơn hoặc bằng 5";
//   }

  // Mỗi khi hàm set lại được gọi thì component sẽ được render lại
  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          handleClick("+");
        }}
      >
        Click Me
      </button>
    <button>
        Decrease
    </button>

    <br></br>
    <button className={"abc"} onClick={() => handleToggle()}>{isOn ? "Đóng" : "Mở"}</button>
    <div className={`box ${isOn ? "changeColor" : ""}`}></div>
    </div>
  );
}

export default Practice;

// function abc() {
//     console.log("abc");
// }

// function runCode() {
//     abc();
// }

// const runCode = () => {
//     abc();
// };

const handleClick = (phepTinh) => {
    console.log("Click me");
}
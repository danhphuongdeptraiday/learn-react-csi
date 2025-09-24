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

const products = [
  {
    id: 1,
    name: "Áo Thun Nam Cotton",
    price: 199000,
    category: "Thời trang",
    description: "Áo thun nam chất liệu cotton mềm mại, thoáng mát.",
    image: "https://picsum.photos/300/200?random=1",
  },
  {
    id: 2,
    name: "Giày Thể Thao Unisex",
    price: 450000,
    category: "Giày dép",
    description: "Giày thể thao unisex phong cách trẻ trung, năng động.",
    image: "https://picsum.photos/300/200?random=2",
  },
  {
    id: 3,
    name: "Tai Nghe Bluetooth",
    price: 350000,
    category: "Điện tử",
    description: "Tai nghe Bluetooth âm thanh sống động, pin lâu.",
    image: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 4,
    name: "Túi Xách Da Nữ",
    price: 599000,
    category: "Phụ kiện",
    description: "Túi xách da nữ sang trọng, phù hợp mọi dịp.",
    image: "https://picsum.photos/300/200?random=4",
  },
  {
    id: 5,
    name: "Bình Giữ Nhiệt 500ml",
    price: 150000,
    category: "Gia dụng",
    description: "Bình giữ nhiệt 500ml giữ nóng/lạnh lên đến 12 giờ.",
    image: "https://picsum.photos/300/200?random=5",
  },
];
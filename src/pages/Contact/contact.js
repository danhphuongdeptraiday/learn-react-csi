import React, { useEffect, useState } from "react";
import "./contact.css";

export default function Contact() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [isCallAPI, setIsCallAPI] = useState(true);


  //   useEffect(() => {
  //     const id = setInterval(() => {
  //         setTime(pre => pre + 1)
  //     }, 1000)

  //     return () => {
  //         clearInterval(id)
  //     }
  //   }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => console.log(json));

    // thực thi callAPI để lưu dữ liệu
    // có 1 API để lưu thông tin
  }, [count, isCallAPI]);

  //   lần 1 vào setInterval dc gọi và trong setInterval sẽ gọi hàm set lại biến
  //   fetch("abc")
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err));

  // useEffect chạy sau khi component dc render ra giao diện
  // Get DOM

  // Gọi API thì trả về 1 promise
  // pending: đang gọi
  // then => Resolve
  // catch => error => Reject

  // Dependency = [] khi ta muốn logic chỉ được thực thi 1 lần đầu tiên khi component dc mount và nó ko thực thi khi bị component re-render

  return (
    <div className="contact-container">
      <h1> This is our contact: </h1>
      <ul>
        <li>Facebook</li>
        <li>Gmail</li>
      </ul>
      <h1>Time: {time}</h1>
      <h1>Count: {count}</h1>

      <div>
        
      </div>

      <button onClick={() => setIsCallAPI((pre) => !pre)}>Click Count</button>
    </div>
  );
}

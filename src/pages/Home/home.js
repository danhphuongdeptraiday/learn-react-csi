import { data } from "react-router-dom";
import "./home.css";
import React, { useState, useEffect} from "react";

export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // khi rời khỏi trang thì nó sẽ dừng đồng hồ (tránh lỗi chạy ngầm)
  }, []); // [] để chỉ chạy 1 lần khi component được mount

  return (
    <div className="home-container">
      <h1>Welcome to My Website</h1>
      <p>This is the Home page. Explore and enjoy!</p>

      <div className="home-cards">
        <div className="card">
          <h3>Fast</h3>
          <p>Our website loads super quickly for a smooth experience.</p>
        </div>
        <div className="card">
          <h3>Responsive</h3>
          <p>Looks great on desktop, tablet, and mobile devices.</p>
        </div>
        <div className="card">
          <h3>Simple</h3>
          <p>Clean and minimal design to focus on what matters.</p>
        </div>
      </div>

      <div className="clock">
        <h2>🕒 {time.toLocaleTimeString()}</h2> 
      </div>
    </div>
  );
}

// toLocalTimeString() = hiện thị giờ theo định dạng địa phương
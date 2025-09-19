import "./home.css";
import React from "react";

export default function Home() {
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
    </div>
  );
}

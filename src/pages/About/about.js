import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about-container">
      <h1> About us </h1>
      <p> If you want to know more about us. </p>

      <div className="about-details">
        <h3>Our Mission</h3>
        <p>
          To provide easy-to-use tools that help people organize their work and
          life better.
        </p>

        <h3>Our Values</h3>
        <ul>
          <li>✨ Simplicity</li>
          <li>⚡ Performance</li>
          <li>📱 Accessibility</li>
        </ul>
      </div>
    </div>
  );
}

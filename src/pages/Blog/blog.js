import "./blog.css";
import React from "react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      description: "Learn the basics of React and how to build your first app.",
    },
    {
      id: 2,
      title: "Why Simplicity Matters in Design",
      description:
        "Explore the importance of minimal and clean UI in web applications.",
    },
    {
      id: 3,
      title: "Productivity Tips for Students",
      description:
        "Practical advice to help students manage their time and tasks effectively.",
    },
  ];

  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <p>Read our latest articles and updates below.</p>

      <div className="blog-posts">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <button className="read-more">Read more</button>
          </div>
        ))}
      </div>
    </div>
  );
}

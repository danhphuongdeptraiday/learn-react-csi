import { React, useState } from "react";
import ReactMarkdown from "react-markdown"; // Thư viện để hiển thị Markdown
import "./create.css";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert("The post has been created!");
    console.log({ title, description });
  };

  return (
    <div className="create-post-container">
      <form onSubmit={handleSubmit} className="editor">
        <h2> Create new post </h2>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Interesting title..."
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="description">Content/Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write the content or description here..."
            required
          />
        </div>
        <button type="submit">Post</button>
      </form>

      <div className="post-draft">
        <h2> Post Draft </h2>
        <article className="post-preview">
          <h1> {title || 'Title will be here!'} </h1>
          <ReactMarkdown>
            {description || 'Content/Description will be here!'}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}

export default CreatePost;
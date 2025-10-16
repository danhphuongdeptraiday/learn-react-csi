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
          <label htmlFor="title">Tiêu đề</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Tiêu đề hấp dẫn..."
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="description">Nội dung</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Viết nội dung của bạn ở đây..."
            required
          />
        </div>
        <button type="submit">Đăng bài</button>
      </form>

      <div className="post-draft">
        <h2> Post Draft </h2>
        <article className="post-preview">
          <h1> {title} || 'Title will be here!'</h1>
          <ReactMarkdown>
            {description} || 'Content/Description will be here!'
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}

export default CreatePost;
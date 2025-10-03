// Tạo trang todoList:
// Có 1 input và 1 nút add

// Yêu cầu 1:
// Nếu nhập thông tin đầy đủ và bấm nút add. Nếu nhâp thông tin mà ko nội dung thì hiện ra lỗi
// thì 1 thẻ div mới sẽ được hiện ngay dưới input => VD: 1. nội dung 1

// Yêu cầu 2:
// Lưu vào localStorage

// Yêu cầu 3:
// ở mỗi thẻ hiện ra thì sẽ hiện thêm 1 nút X ở cuối thẻ đó

import React, { useState } from "react";

function ToDoPart() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("ToDoList")) || []
  );
  const [error, setError] = useState("");

  const addToDo = () => {
    const value = input.trim();

    if (value === "") {
      setError("Bạn chưa nhập nội dung task!");
      return;
    }

    if (value.split(" ").some(e => e === "")) {
        setError("Bạn đang viết quá một khoảng trống!")
        return;
    }

    setError("");
    const newTask = [...todos, value];
    setTodos(newTask);
    localStorage.setItem("ToDoList", JSON.stringify(newTask));
    setInput("");
  };

  const removeToDo = (index) => {
    const newTask = [...todos];
    newTask.splice(index, 1);
    setTodos(newTask);
    localStorage.setItem("ToDoList", JSON.stringify(newTask));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập nội dung nhiệm vụ..."
        style={{
          width: "300px",
          padding: "5px",
          borderRadius: "20px",
          border: "1px solid black",
        }}
      ></input>
      <button
        onClick={addToDo}
        style={{
          padding: "5px",
          borderRadius: "20px",
          border: "1px solid black",
        }}
      >
        {" "}
        Add{" "}
      </button>
      <p style={{ color: "red" }}>{error}</p>
      <div>
        {todos.map((todo, index) => (
          <div key={index} style={{ marginTop: "8px" }}>
            {index + 1}. {todo}
            <button
              style={{
                marginLeft: "10px",
                color: "red",
                padding: "3px",
                width: "30px",
                borderRadius: "20px",
                border: "1px solid black",
                fontFamily: "sans-serif",
              }}
              onClick={() => removeToDo(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoPart;

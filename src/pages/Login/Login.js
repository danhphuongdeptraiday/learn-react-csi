// Tài khoản: haanhdao
// Mật khẩu: toibiham123

// Nếu nhập thông tin tài khoản sai thì hiện ra là ”tên tài khoản ko tồn tại”
// Nếu nhập đúng tk mà sai mk thì hện ra: “Mật khẩu sai”
// Nếu nhập thông tk + mk đúng thì hiện ra: “Successfully”

import React from "react";
import "./Login.css"; // import css file

function Login() {
  const [loginPerson, setLoginPerson] = React.useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = React.useState("");

  const listAccount = [
    {
      username: "haanhdao",
      password: "toibiham123",
    },
    {
      username: "danhphuong",
      password: "123",
    },
  ];

  const checkValidate = (user) => {
    for (let i = 0; i < listAccount.length; i++) {
      if (
        user.username === listAccount[i].username &&
        user.password === listAccount[i].password
      ) {
        return true;
      }
    }
    return false;
  };

  const handleLogin = (e) => {
    e.preventDefault(); // web k bi reload

    if (checkValidate(loginPerson)) {
      setMessage(`Welcome ${loginPerson.username} to my page!`);

      const loginHistory =
        JSON.parse(localStorage.getItem("loginHistory")) || [];
      loginHistory.push({
        username: loginPerson.username,
        password: loginPerson.password,
      });
      localStorage.setItem("loginHistory", JSON.stringify(loginHistory));
    } else {
      setMessage("Your account is not exist or wrong password!");
    }
  };

  const handleChangeInput = (e) => {
    // e.target => Trả về 2 giá trị: name, value
    console.log(e.target.value);
    setLoginPerson((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  // e.target.value => lấy ra giá trị mà input đang có

  console.log(loginPerson);

  // option + shift + F: type đến đâu nó căn lại đến đó

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Username</label>
          <input
            id="username"
            type="username"
            name="username"
            placeholder="Enter username"
            value={loginPerson.username}
            onChange={handleChangeInput}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            // value={"***"}
            value={loginPerson.password}
            onChange={handleChangeInput}
          />
        </div>

        <button onClick={handleLogin}>Login</button>
        <p style={{ margin: "10px" }}>{message}</p>
      </form>
    </div>
  );
}

export default Login;

// const [number, setNumber] = React.useState(10)

// setNumber(abc)
// // giá trị ban đầu của number là bằng 10
// // khi setNumber dc gọi thì nó gọi hàm abc sẽ được trả về gía trị mới = number cũ + 11

// function abc(previous) {
//   return 11 + previous
// }

// let user = {
//   username: "",
//   password: ""
// }

// user.username = "newValue"

// let newUser = {
//   username: "",
//   password: "",
//   username: "newValue"
// }

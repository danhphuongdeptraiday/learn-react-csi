// Tài khoản: haanhdao
// Mật khẩu: toibiham123

// Nếu nhập thông tin tài khoản sai thì hiện ra là ”tên tài khoản ko tồn tại”
// Nếu nhập đúng tk mà sai mk thì hện ra: “Mật khẩu sai”
// Nếu nhập thông tk + mk đúng thì hiện ra: “Successfully”


import React from "react";
import "./Login.css"; // import css file

function Login() {
  const [usernameInput, setUsernameInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");

  const [checkUsername, setCheckUsername] = React.useState(false);
  const [checkPassword, setCheckPassword] = React.useState(false);

  const [message, setMessage] = React.useState("");

  const myAccount = {
    username: "haanhdao",
    password: "toibiham123",
  };

  // Check username lấy value từ input
  const handleChangeUsernameInput = (e) => {
    setUsernameInput(e.target.value);
    if (e.target.value === myAccount.username) {
      setCheckUsername(true); 
    } else {
      setCheckUsername(false);
    }
  };

  // Check password lấy value từ input
  const handleChangePasswordInput = (e) => {
    setPasswordInput(e.target.value);
    if (e.target.value === myAccount.password) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false); 
    }
  };

  const handleLogin = (e) => {
    e.preventDefault(); // web k bi reload

    if (!checkUsername) {
      setMessage("Your account is not exist!");
    } else if (!checkPassword) {
      setMessage("Wrong password!");
    } else {
      setMessage("Successfully!");
    }
  };

  // option + shift + F: type đến đâu nó căn lại đến đó

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Username</label>
          <input
            type="username"
            name="username"
            placeholder="Enter username"
            value={usernameInput}
            onChange={handleChangeUsernameInput}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={passwordInput}
            onChange={handleChangePasswordInput}
          />
        </div>

        <button onClick={handleLogin}>Login</button>
        <p style={{margin: "10px"}}>{message}</p>
      </form>
    </div>
  );
}

export default Login;

import React from "react";
import "./Login.css"; // import css file

function Login() {
  const [usernameInput, setUsernameInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
  const [checkUsername, setCheckUsername] = React.useState(false);
  const [checkPassword, setCheckPassword] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const myAccount = {
    username: "hanhanhdao",
    password: "toibiham123",
  };

  const handleChangeUsernameInput = (e) => {
    setUsernameInput(e.target.value);
    if (e.target.value === myAccount.username) {
      setCheckUsername(true);
    } else {
      setCheckUsername(false);
    }
  };

  const handleChangePasswordInput = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // web k bi reload
  };

  // option + shift + F

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
        <p>{message}</p>
      </form>
    </div>
  );
}

export default Login;

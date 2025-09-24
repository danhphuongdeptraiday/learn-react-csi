import React from 'react'
import "./Login.css"; // import css file

function Login() {
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
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
          />
        </div>
      </form>
    </div>
  )
}

export default Login
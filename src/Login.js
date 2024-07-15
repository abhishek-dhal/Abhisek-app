import React from 'react';
import Button from './Button';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" />
        </div>
        <Button kind="primary" variant="filled" size="medium" icon="🔒">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;


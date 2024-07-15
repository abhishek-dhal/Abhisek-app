import React from 'react';
import Button from './Button';
import './Register.css';

const Register = () => {
  return (
    <div className="register-container">
      <h1>Register</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" />
        </div>
        <Button kind="secondary" variant="filled" size="medium" icon="📝">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;

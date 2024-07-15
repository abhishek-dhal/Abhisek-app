import React from 'react';
import Button from './Button';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome!</h1>
      <Button kind="primary" variant="outlined" size="large" icon="👋">
        Get Started
      </Button>
    </div>
  );
};

export default Welcome;
     

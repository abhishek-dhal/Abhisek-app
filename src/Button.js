import React from 'react';
import './Button.css'; // Import the CSS file for styling

const Button = ({ kind, variant, size, icon, children, ...props }) => {
  return (
    <button 
      className={`btn ${kind} ${variant} ${size}`} 
      {...props}
    >
      {icon && <span className="icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;

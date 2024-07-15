import React from 'react';
import Welcome from './Welcome';
import Login from './Login';
import Register from './Register';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Welcome />
      <Login />
      <Register />
    </div>
  );
}

export default App;


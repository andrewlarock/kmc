import React from 'react';
import '../css/NotFound.css';
import logo from '../css/images/logo.png';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img src={logo} alt="Logo" />
      <p>The page you're looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
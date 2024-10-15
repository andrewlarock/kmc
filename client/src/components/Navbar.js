import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Navbar.css';
import '../css/mobile/NavbarMobile.css';
import logo from '../css/images/logo.png';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext to access auth state

const Navbar = () => {
  const { isAuthenticated, userName } = useContext(AuthContext); // Access isAuthenticated and userName from the AuthContext
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 475);
  const navigate = useNavigate();

  useEffect(() => {
    // Event listener to detect screen resizing
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 475); // Update state based on screen size
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isDesktop) {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/">
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>
        <div className="navbar-right">
          <a href="/about" className="nav-link">About</a>
          
          {isAuthenticated ? (
            <span className="hello-text">Hello, {userName}!</span> // Show user name when logged in
          ) : (
            <a href="/signup" className="nav-link">Sign up</a>
          )}

          <button className="nav-button" onClick={() => navigate(isAuthenticated ? '/account' : '/login')}>
            {isAuthenticated ? 'Account' : 'Log in'}
          </button>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar-m">
      <div className="top-spacer"></div>
      <div className="navbar-left-m">
        <a href="/">
          <img src={logo} alt="Logo" className="logo-m" />
        </a>
      </div>
      <div className="navbar-right-m">
        <a href="/about" className="nav-link-m">About</a>
        
        {isAuthenticated ? (
          <span className="hello-text-m">Hello, {userName}!</span> // Show user name when logged in
        ) : (
          <a href="/signup" className="nav-link-m">Sign up</a>
        )}

        <button className="nav-button-m" onClick={() => navigate(isAuthenticated ? '/account' : '/login')}>
          {isAuthenticated ? 'Account' : 'Log in'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
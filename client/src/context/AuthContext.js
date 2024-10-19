import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state
  let userActive = false; // Track user activity

  const isTokenExpired = (token) => {
    const decodedToken = jwt_decode(token);
    return decodedToken.exp < Date.now() / 1000;
  };

  // Function to check if the user is authenticated using the token from localStorage
  const checkAuthentication = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      if (isTokenExpired(token)) {
        setIsAuthenticated(false);
        setUserName('');
        setUserEmail('');
        setLoading(false);
        return;
      }

      try {
        const decodedToken = jwt_decode(token);
        setUserName(decodedToken.name);
        setUserEmail(decodedToken.email);

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/check-token`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.isAuthenticated) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          setUserName('');
          setUserEmail('');
        }
      } catch (error) {
        console.error('Error checking authentication:', error.message);
        setIsAuthenticated(false);
        setUserName('');
        setUserEmail('');
      }
    } else {
      setIsAuthenticated(false);
    }

    setLoading(false);
  };

  // Function to refresh the token only when the user is active
  const refreshToken = async () => {
    const token = localStorage.getItem('token'); // Get the token from localStorage

    if (userActive && token) {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/refresh-token`, {}, {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in the headers
          },
        });

        const newToken = response.data.token;
        localStorage.setItem('token', newToken); // Update the token in localStorage
      } catch (error) {
        console.error('Error refreshing token:', error.message);
      }
    }
  };

  const setUserActive = () => {
    userActive = true;
  };

  useEffect(() => {
    checkAuthentication(); // Check authentication on component mount

    // Refresh token every 15 minutes ONLY if the user is active
    const intervalId = setInterval(() => {
      refreshToken();
      userActive = false; // Reset user activity after each refresh
    }, 15 * 60 * 1000);

    // Listen for user activity events
    window.addEventListener('click', setUserActive);
    window.addEventListener('keypress', setUserActive);
    window.addEventListener('mousemove', setUserActive);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('click', setUserActive);
      window.removeEventListener('keypress', setUserActive);
      window.removeEventListener('mousemove', setUserActive);
    };
  }, []);
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, userName, userEmail, loading, setIsAuthenticated, setUserName, setUserEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
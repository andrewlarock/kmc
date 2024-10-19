import { createContext, useState, useEffect } from 'react';
import * as jwt_decode from 'jwt-decode';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state
  const [userActive, setUserActive] = useState(false); // Use state for user activity

  const isTokenExpired = (token) => {
    const decodedToken = jwt_decode(token);
    return decodedToken.exp < Date.now() / 1000;
  };

  // Function to check if the user is authenticated using the token from localStorage
  const checkAuthentication = async () => {
    setLoading(true); // Set loading true at the beginning
    const token = localStorage.getItem('token');

    if (token) {
      if (isTokenExpired(token)) {
        // Handle expired token
        setIsAuthenticated(false);
        setUserName('');
        setUserEmail('');
      } else {
        try {
          const decodedToken = jwt_decode(token);
          setUserName(decodedToken.name);
          setUserEmail(decodedToken.email);

          const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/check-token`, {
            headers: { Authorization: `Bearer ${token}` },
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
      }
    } else {
      setIsAuthenticated(false);
    }
    setLoading(false); // Set loading to false after processing
  };

  // Function to refresh the token only when the user is active
  const refreshToken = async () => {
    const token = localStorage.getItem('token');

    if (userActive && token) {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/refresh-token`, {}, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const newToken = response.data.token;
        localStorage.setItem('token', newToken);
      } catch (error) {
        console.error('Error refreshing token:', error.message);
      }
    }
  };

  // useEffect to manage checking authentication and refreshing tokens
  useEffect(() => {
    checkAuthentication();

    const intervalId = setInterval(() => {
      refreshToken();
      setUserActive(false); // Reset user activity after each refresh
    }, 15 * 60 * 1000); // Refresh token every 15 minutes

    const setUserActiveEvent = () => setUserActive(true); // Update user active state

    // Listen for user activity events
    window.addEventListener('click', setUserActiveEvent);
    window.addEventListener('keypress', setUserActiveEvent);
    window.addEventListener('mousemove', setUserActiveEvent);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('click', setUserActiveEvent);
      window.removeEventListener('keypress', setUserActiveEvent);
      window.removeEventListener('mousemove', setUserActiveEvent);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userName, userEmail, loading, setIsAuthenticated, setUserName, setUserEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
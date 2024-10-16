import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state

  // Function to check if the user is authenticated
  const checkAuthentication = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/check-token`, {
        withCredentials: true
      });

      if (response.data.isAuthenticated) {
        setIsAuthenticated(true);
        setUserName(response.data.name);
        setUserEmail(response.data.email);
      } else {
        setIsAuthenticated(false);
        setUserName('');
        setUserEmail('');
      }
    } catch (error) {
      setIsAuthenticated(false);
      setUserName('');
      setUserEmail('');
      console.error('Error checking authentication:', error.message);
    } finally {
      setLoading(false); // Set loading to false after checking
    }
  };

  // Function to refresh the token
  const refreshToken = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/refresh-token`, {}, {
        withCredentials: true
      });
    } catch (error) {
      console.error('Error refreshing token:', error.message);
    }
  };

  useEffect(() => {
    checkAuthentication(); // Check auth status when the app first loads

    // Set up an interval to refresh the token every 15 minutes
    const intervalId = setInterval(refreshToken, 15 * 60 * 1000);

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, userName, userEmail, loading, setIsAuthenticated, setUserName, setUserEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
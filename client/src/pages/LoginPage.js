import React, { useState, useContext, useEffect } from 'react';
import '../css/Login.css';
import '../css/mobile/LoginMobile.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../css/images/logo.png';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 475);

    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError('');
    };

    const { isAuthenticated, setIsAuthenticated, setUserName, setUserEmail } = useContext(AuthContext);
    
    useEffect(() => {
        // Check if the user is already authenticated
        if (isAuthenticated) {
            navigate('/'); // Redirect to root directory if authenticated
        }
    }, [isAuthenticated, navigate]);

    const handleLogin = async () => {
        try {
            // Make POST request to login API with email and password
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, { 
                email, 
                password 
            });
    
            // Extract token, email, and name from the response
            const { token, name, email: responseEmail } = response.data;
    
            // Store the token in localStorage
            localStorage.setItem('token', token);
    
            // Update AuthContext with user info
            setIsAuthenticated(true);
            setUserName(name);
            setUserEmail(responseEmail);
    
            // Clear any error messages
            setError('');
    
            // Navigate to home page or dashboard
            navigate('/');
        } catch (error) {
            // Handle errors (e.g., invalid credentials)
            if (error.response && error.response.status === 401) {
                setError('Invalid credentials. Please try again.');
            } else {
                console.error('An error occurred:', error.message);
                setError('Login failed. Please try again later.');
            }
        }
    };

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
            <div className="login-container">

                <div className="login-form">
                    <div className="login-header">Log in</div>
                    <div className="login-subheader">Hey, Welcome Back!</div>
                    <div className="login-input-header">Email Address</div>
                    <input type="text" className='login-input' value={email} onChange={handleEmailChange}/>

                    <div className="login-input-header">Password</div>
                    <input type="password" className='login-input password-input' value={password} onChange={handlePasswordChange}/>

                    <button type="button" className="login-button" onClick={handleLogin}>
                        <div className='login-button-text'>
                            Log in
                        </div>
                    </button>

                    {error && <div className="login-error">{error}</div>}

                </div>

                <div className="signup-form">
                    <img src={logo} alt="Logo" className="login-logo" />
                    <div className="login-signup-header">Don’t have an <br></br>account yet?</div>
                    <button className="login-signup-button" onClick={() => navigate('/signup')}>Sign Up</button>
                </div>
            </div>
        );
    }

    return (
        <div className="login-container-m">

            <div className="login-form-m">
                <div className="login-header-m">Log in</div>
                <div className="login-subheader-m">Hey, Welcome Back!</div>
                <div className="login-input-header-m">Email Address</div>
                <input type="text" className='login-input-m' value={email} onChange={handleEmailChange}/>

                <div className="login-input-header-m">Password</div>
                <input type="password" className='login-input password-input-m' value={password} onChange={handlePasswordChange}/>

                <button type="button" className="login-button-m" onClick={handleLogin}>
                    <div className='login-button-text-m'>
                        Log in
                    </div>
                </button>

                {error && <div className="login-error-m">{error}</div>}

            </div>

            <div className="signup-form-m">
                <img src={logo} alt="Logo" className="login-logo-m" />
                <div className="login-signup-header-m">Don’t have an <br></br>account yet?</div>
                <button className="login-signup-button-m" onClick={() => navigate('/signup')}>Sign Up</button>
            </div>
        </div>
    );
    
};

export default LoginPage;
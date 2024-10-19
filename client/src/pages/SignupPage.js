import React, { useState, useContext, useEffect } from 'react';
import '../css/Signup.css';
import '../css/mobile/SignupMobile.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../css/images/logo.png';
import { AuthContext } from '../context/AuthContext';

const SignupPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 475);

    // Password validation states
    const [isLengthValid, setIsLengthValid] = useState(false);
    const [hasUppercase, setHasUppercase] = useState(false);
    const [hasNumberOrSpecialChar, setHasNumberOrSpecialChar] = useState(false);    
    const [showPasswordFeedback, setShowPasswordFeedback] = useState(false);
    
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
        validatePassword(inputPassword);
        setShowPasswordFeedback(true);
    };
    const handleNameChange = (e) => setName(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
    
    const { isAuthenticated, setIsAuthenticated, setUserName, setUserEmail } = useContext(AuthContext);
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

    useEffect(() => {
        // Check if the user is already authenticated
        if (isAuthenticated) {
            navigate('/'); // Redirect to root directory if authenticated
        }
    }, [isAuthenticated, navigate]);

    const validatePassword = (password) => {
        // Check if password is at least 8 characters long
        setIsLengthValid(password.length >= 8);
        // Check if password contains at least one uppercase letter
        setHasUppercase(/[A-Z]/.test(password));
        // Check if password contains at least one number or special character
        setHasNumberOrSpecialChar(/[\d\W]/.test(password)); // \d matches any digit, \W matches non-alphanumeric characters
    };

    const validateInputs = () => {
        if (!isLengthValid || !hasUppercase || !hasNumberOrSpecialChar) {
            setError('Password does not meet the required criteria.');
            return false;
        }
        
        // Check if passwords match
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return false;
        }
        // Validate email format using regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError('Invalid email format.');
            return false;
        }
        // Validate name (only letters allowed)
        const namePattern = /^[A-Za-z]+$/;
        if (!namePattern.test(name)) {
            setError('Name can only contain letters (no special characters or numbers).');
            return false;
        }
        return true;
    };

    const handleSignup = async () => {
        // Validate inputs before making the request
        if (!validateInputs()) {
            return; // Stop the signup process if validation fails
        }
    
        try {
            // Make the POST request to the backend API
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, { 
                email, 
                password, 
                name 
            });
    
            // If signup is successful, response should contain the JWT token
            const { token, name, email: responseEmail} = response.data;
    
            // Store the token in localStorage
            localStorage.setItem('token', token);
    
            // Update the AuthContext to reflect that the user is authenticated
            setIsAuthenticated(true);
            setUserName(name);
            setUserEmail(responseEmail);
    
            // Clear any previous error messages
            setError('');
    
            // Navigate the user to the homepage or another protected route
            navigate('/');
        } catch (error) {
            console.error(error.response.data);
            setError(error.response.data || "Signup failed. Please try again.");
        }
    };
  
    if (isDesktop) {
        return (
            <div className="signup-container">

                <div className="signup-login-form">

                    <img src={logo} alt="Logo" className="signup-logo" />
                    <div className="signup-login-header">Already have <br></br>an account?</div>
                    <button className="signup-login-button" onClick={() => navigate('/login')}>Log in</button>

                </div>

                <div className="signup-signup-form">
                    <div className="signup-header">Sign up</div>
                    <div className="signup-subheader">Welcome!</div>

                    <div className="signup-input-header">Email Address</div>
                    <input type="text" className='signup-input' value={email} onChange={handleEmailChange} maxLength={99}/>

                    <div className="signup-input-header">First Name</div>
                    <input type="text" className='signup-input' value={name} onChange={handleNameChange} maxLength={15}/>

                    <div className="signup-input-header">Password</div>
                    <input type="password" className='signup-input' value={password} onChange={handlePasswordChange} onFocus={() => setShowPasswordFeedback(true)}/>

                    {/* Conditionally render password feedback */}
                    {showPasswordFeedback && (
                        <div className="password-feedback">
                            <div className={isLengthValid ? "valid" : "invalid"}>
                                {isLengthValid ? "✔" : "✖"} At least 8 characters
                            </div>
                            <div className={hasUppercase ? "valid" : "invalid"}>
                                {hasUppercase ? "✔" : "✖"} At least one uppercase letter
                            </div>
                            <div className={hasNumberOrSpecialChar ? "valid" : "invalid"}>
                                {hasNumberOrSpecialChar ? "✔" : "✖"} At least one number or special character
                            </div>
                        </div>
                    )}

                    <div className="signup-input-header">Confirm Password</div>
                    <input type="password" className='signup-input' value={confirmPassword} onChange={handleConfirmPasswordChange}/>
                    
                    <button type="button" className="signup-button" onClick={handleSignup}>
                        <div className='signup-button-text'>
                            Sign up
                        </div>
                    </button>

                    <div className='signup-privacy-container'>
                        <div className="signup-privacy-header">
                        At KickMyCourse, your personal info stays private, and all reviews are completely anonymous to ensure your privacy.</div>
                    </div>

                    {error && <div className="signup-error">{error}</div>}

                </div>

            </div>
        );
    }

    return (
        <div className="signup-container-m">

            <div className="signup-signup-form-m">
                <div className="signup-header-m">Sign up</div>
                <div className="signup-subheader-m">Welcome!</div>

                <div className="signup-input-header-m">Email Address</div>
                <input type="text" className='signup-input-m' value={email} onChange={handleEmailChange} maxLength={99}/>

                <div className="signup-input-header-m">First Name</div>
                <input type="text" className='signup-input-m' value={name} onChange={handleNameChange} maxLength={15}/>

                <div className="signup-input-header-m">Password</div>
                <input type="password" className='signup-input-m' value={password} onChange={handlePasswordChange} onFocus={() => setShowPasswordFeedback(true)}/>

                {/* Conditionally render password feedback */}
                {showPasswordFeedback && (
                    <div className="password-feedback-m">
                        <div className={isLengthValid ? "valid-m" : "invalid-m"}>
                            {isLengthValid ? "✔" : "✖"} At least 8 characters
                        </div>
                        <div className={hasUppercase ? "valid-m" : "invalid-m"}>
                            {hasUppercase ? "✔" : "✖"} At least one uppercase letter
                        </div>
                        <div className={hasNumberOrSpecialChar ? "valid-m" : "invalid-m"}>
                            {hasNumberOrSpecialChar ? "✔" : "✖"} At least one number or special character
                        </div>
                    </div>
                )}

                <div className="signup-input-header-m">Confirm Password</div>
                <input type="password" className='signup-input-m' value={confirmPassword} onChange={handleConfirmPasswordChange}/>
                
                <button type="button" className="signup-button-m" onClick={handleSignup}>
                    <div className='signup-button-text-m'>
                        Sign up
                    </div>
                </button>

                <div className='signup-privacy-container-m'>
                    <div className="signup-privacy-header-m">
                    At KickMyCourse, your personal info stays private, and all reviews are completely anonymous to ensure your privacy.</div>
                </div>

                {error && <div className="signup-error-m">{error}</div>}

            </div>

            <div className="signup-login-form-m">
                <img src={logo} alt="Logo" className="signup-logo-m" />
                <div className="signup-login-header-m">Already have <br></br>an account?</div>
                <button className="signup-login-button-m" onClick={() => navigate('/login')}>Log in</button>
            </div>

        </div>
    );

};

export default SignupPage;
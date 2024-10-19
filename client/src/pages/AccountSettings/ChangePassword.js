import React, { useState, useEffect, useContext} from 'react';
import '../../css/ChangePage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const ChangePassword = () => {
    const navigate = useNavigate();
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const {loading, isAuthenticated} = useContext(AuthContext); // Consume context
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 475);

    // Password validation state
    const [isLengthValid, setIsLengthValid] = useState(false);
    const [hasUppercase, setHasUppercase] = useState(false);
    const [hasNumberOrSpecialChar, setHasNumberOrSpecialChar] = useState(false);
    const [showPasswordFeedback, setShowPasswordFeedback] = useState(false);

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
        if (!loading && !isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, loading, navigate]);

    // Function to check if the user loses authentication during any process
    const checkAuthentication = async () => {
        const token = localStorage.getItem('token'); // Get the token from local storage
        if (!token) {
            setError('You are not authenticated. Please log in again.');
            return false;
        }
        
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/check-token`, {
                headers: {
                    'Authorization': `Bearer ${token}`, // Send token in Authorization header
                }
            });
            return response.data.isAuthenticated;
        } catch (err) {
            setError('Failed to check authentication status.');
            return false;
        }
    };

    const validatePassword = (password) => {
        // Check if password is at least 8 characters long
        setIsLengthValid(password.length >= 8);
        // Check if password contains at least one uppercase letter
        setHasUppercase(/[A-Z]/.test(password));
        // Check if password contains at least one number or special character
        setHasNumberOrSpecialChar(/[\d\W]/.test(password)); // \d for digits, \W for non-alphanumeric characters
    };

    const handlePasswordChange = (e) => {
        const inputPassword = e.target.value;
        setNewPassword(inputPassword);
        validatePassword(inputPassword);
        setShowPasswordFeedback(true); // Show feedback when user starts typing
    };

    // Handle form submission to change the password
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const authenticated = await checkAuthentication();
        if (!authenticated) {
            setError('You are not authenticated. Please log in again.');
            setTimeout(() => {
                window.location.href = '/'; // This will navigate and refresh the page
            }, 3000);
            return;
        }

        // Validate passwords
        if (!isLengthValid || !hasUppercase || !hasNumberOrSpecialChar) {
            setError('New password does not meet the required criteria.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('New password and confirm password do not match.');
            return;
        }

        const token = localStorage.getItem('token'); // Get the token from local storage

        try {
            // Call the API to update the password
            const response = await axios.put(
                `${process.env.REACT_APP_API_URL}/account/update-password`,
                { currentPassword, newPassword },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`, // Send token in Authorization header
                    }
                }
            );

            if (response.status === 200) {
                setSuccess('Password updated successfully.');
                setCurrentPassword('');
                setNewPassword('');
                setConfirmPassword('');
                setShowPasswordFeedback(false); // Hide feedback after success
            } else {
                setError(response.data.message || 'Failed to update password.');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred while updating the password.');
        }
    };

    if (isDesktop) {
        return (
            <div className="update-wrapper">
            <div className="update-container">
                <div className="update-header">
                    <h1>Account Settings</h1>
                    <p>Manage your account settings and view your bookmarked courses in one place.</p>
                </div>
                <div className="update-content">

                    <div className="update-left">
                        <div className='update-left-option' onClick={() => navigate('/account')} style={{ cursor: 'pointer', fontWeight: '600'}}>
                            <img src={require('../../css/images/settings.png')} alt="Icon 1"/> 
                                Go Back
                        </div>
                    </div>

                    <div className="update-right">
                            <div>
                                <div className="update-right-header">Change Password</div>
                                    <div className="update-inputs-container">
                                        <div className="update-input-group">
                                            <label className="update-input-label">Current Password</label>
                                            <input
                                                type="password"
                                                placeholder="Enter current password"
                                                onChange={(e) => setCurrentPassword(e.target.value)}
                                                value={currentPassword}
                                                className="change-field"/>
                                            <label className="update-input-label">New Password</label>
                                            <input
                                                type="password"
                                                placeholder="Enter new password"
                                                onChange={handlePasswordChange}
                                                value={newPassword}
                                                className="change-field"
                                                onFocus={() => setShowPasswordFeedback(true)}/>

                                            {/* Conditionally render password feedback */}
                                            {showPasswordFeedback && (
                                                <div className="change-password-feedback">
                                                    <div className={isLengthValid ? "change-valid" : "change-invalid"}>
                                                        {isLengthValid ? "✔" : "✖"} At least 8 characters
                                                    </div>
                                                    <div className={hasUppercase ? "change-valid" : "change-invalid"}>
                                                        {hasUppercase ? "✔" : "✖"} At least one uppercase letter
                                                    </div>
                                                    <div className={hasNumberOrSpecialChar ? "change-valid" : "change-invalid"}>
                                                        {hasNumberOrSpecialChar ? "✔" : "✖"} At least one number or special character
                                                    </div>
                                                </div>
                                            )}

                                            <label className="update-input-label">Confirm New Password</label>
                                            <input
                                                type="password"
                                                placeholder="Confirm new password"
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                value={confirmPassword}
                                                className="change-field"/>
                                        </div>
                                </div>

                                <button className="update-button" onClick={handleSubmit}>Update</button>
                                {error && <p className="error-message">{error}</p>}
                                {success && <p className="success-message">{success}</p>}

                            </div>
                    </div>

                </div>
            </div>
        </div>
        );
    }

    return (
        <div className="update-wrapper-m">
        <div className="update-container-m">
            <div className="update-header-m">
                <h1>Account Settings</h1>
                <p>Manage your account settings and view your bookmarked courses in one place.</p>
            </div>
            <div className="update-content-m">

                <div className="update-left-m">
                    <div className='update-left-option-m' onClick={() => navigate('/account')} style={{ cursor: 'pointer', fontWeight: '600'}}>
                        <img src={require('../../css/images/settings.png')} alt="Icon 1"/> 
                            Go Back
                    </div>
                </div>

                <div className="update-right-m">
                        <div>
                            <div className="update-right-header-m">Change Password</div>
                                <div className="update-inputs-container-m">
                                    <div className="update-input-group-m">
                                        <label className="update-input-label-m">Current Password</label>
                                        <input
                                            type="password"
                                            placeholder="Enter current password"
                                            onChange={(e) => setCurrentPassword(e.target.value)}
                                            value={currentPassword}
                                            className="change-field-m"/>
                                        <label className="update-input-label-m">New Password</label>
                                        <input
                                            type="password"
                                            placeholder="Enter new password"
                                            onChange={handlePasswordChange}
                                            value={newPassword}
                                            className="change-field-m"
                                            onFocus={() => setShowPasswordFeedback(true)}/>

                                        {/* Conditionally render password feedback */}
                                        {showPasswordFeedback && (
                                            <div className="change-password-feedback-m">
                                                <div className={isLengthValid ? "change-valid-m" : "change-invalid-m"}>
                                                    {isLengthValid ? "✔" : "✖"} At least 8 characters
                                                </div>
                                                <div className={hasUppercase ? "change-valid-m" : "change-invalid-m"}>
                                                    {hasUppercase ? "✔" : "✖"} At least one uppercase letter
                                                </div>
                                                <div className={hasNumberOrSpecialChar ? "change-valid-m" : "change-invalid-m"}>
                                                    {hasNumberOrSpecialChar ? "✔" : "✖"} At least one number or special character
                                                </div>
                                            </div>
                                        )}

                                        <label className="update-input-label-m">Confirm New Password</label>
                                        <input
                                            type="password"
                                            placeholder="Confirm new password"
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            value={confirmPassword}
                                            className="change-field-m"/>
                                    </div>
                            </div>

                            <button className="update-button-m" onClick={handleSubmit}>Update</button>
                            {error && <p className="error-message-m">{error}</p>}
                            {success && <p className="success-message-m">{success}</p>}

                        </div>
                </div>

            </div>
        </div>
    </div>
    );

};

export default ChangePassword;
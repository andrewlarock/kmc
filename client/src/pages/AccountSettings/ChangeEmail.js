import React, { useState, useEffect, useContext } from 'react';
import '../../css/ChangePage.css';
import '../../css/mobile/ChangePageMobile.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext'; // Import AuthContext

const ChangeEmail = () => {
    const navigate = useNavigate();
    const {loading, userEmail, setUserEmail, isAuthenticated, setIsAuthenticated } = useContext(AuthContext); // Consume context
    const [newEmail, setNewEmail] = useState('');
    const [confirmNewEmail, setConfirmNewEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 475);

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
        const token = localStorage.getItem('token'); // Get the token from localStorage
        if (!token) return false;

        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/check-token`, {
                headers: {
                    Authorization: `Bearer ${token}`, // Include token in the headers
                },
            });
            return response.data.isAuthenticated;
        } catch (err) {
            setError('Failed to check authentication status.');
            return false;
        }
    };

    const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    };

    // Handle form submission to change the email
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

        // Check if new emails match
        if (newEmail !== confirmNewEmail) {
            setError('New email and confirm email do not match.');
            return;
        }

        // Check if the new email is a valid format
        if (!validateEmail(newEmail)) {
            setError('Please enter a valid email address.');
            return;
        }

        try {
            // Call the API to update the email
            const response = await axios.put(
                `${process.env.REACT_APP_API_URL}/account/update-email`,
                { newEmail },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in the headers
                    },
                }
            );

            if (response.status === 200) {
                setSuccess('Email updated successfully.');
                setUserEmail(newEmail); // Update email in context
                setNewEmail(''); // Clear input fields
                setConfirmNewEmail('');
            } else {
                setError(response.data.message || 'Failed to update email.');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred while updating email.');
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
                                <div className="update-right-header">Change Email Address</div>
                                    <div className="update-inputs-container">
                                        <div className="update-input-group">
                                            <label className="update-input-label">Your Email</label>
                                            <input
                                                type="email"
                                                value={userEmail}
                                                className="change-field"
                                                readOnly/>
                                            <label className="update-input-label">New Email</label>
                                            <input
                                                type="email"
                                                value={newEmail}
                                                placeholder="Enter new email"
                                                onChange={(e) => setNewEmail(e.target.value)}
                                                className="change-field"/>
                                            <label className="update-input-label">Confirm New Email</label>
                                            <input
                                                type="email"
                                                value={confirmNewEmail}
                                                placeholder="Confirm new email"
                                                onChange={(e) => setConfirmNewEmail(e.target.value)}
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
                            <div className="update-right-header-m">Change Email Address</div>
                                <div className="update-inputs-container-m">
                                    <div className="update-input-group-m">
                                        <label className="update-input-label-m">Your Email</label>
                                        <input
                                            type="email"
                                            value={userEmail}
                                            className="change-field-m"
                                            readOnly/>
                                        <label className="update-input-label-m">New Email</label>
                                        <input
                                            type="email"
                                            value={newEmail}
                                            placeholder="Enter new email"
                                            onChange={(e) => setNewEmail(e.target.value)}
                                            className="change-field-m"/>
                                        <label className="update-input-label-m">Confirm New Email</label>
                                        <input
                                            type="email"
                                            value={confirmNewEmail}
                                            placeholder="Confirm new email"
                                            onChange={(e) => setConfirmNewEmail(e.target.value)}
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

export default ChangeEmail;
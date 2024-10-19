import React, { useState, useEffect, useContext } from 'react';
import '../../css/ChangePage.css';
import '../../css/mobile/ChangePageMobile.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const ChangeName = () => {
    const navigate = useNavigate();
    const {loading, userName, setUserName, isAuthenticated, setIsAuthenticated } = useContext(AuthContext); // Consume context
    const [newName, setNewName] = useState('');
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

    // Handle form submission to change the name
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

        const namePattern = /^[A-Za-z]+$/;
        if (!namePattern.test(newName)) {
            setError('Name can only contain letters (no special characters or numbers).');
            return;
        }

        try {
            // Call the API to update the name
            const response = await axios.put(
                `${process.env.REACT_APP_API_URL}/account/update-name`,
                { newName },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in the headers
                    },
                }
            );

            if (response.status === 200) {
                setSuccess('Name updated successfully.');
                setNewName('');
                setUserName(newName); // Update userName in AuthContext
                localStorage.setItem('token', response.data.token); // Update local storage with the new token
            } else {
                setError(response.data.message || 'Failed to update name.');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred while updating name.');
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
                                <div className="update-right-header">Change First Name</div>
                                    <div className="update-inputs-container">
                                        <div className="update-input-group">
                                            <label className="update-input-label">Your First Name</label>
                                            <input
                                                type="text"
                                                value={userName}
                                                className="change-field"
                                                readOnly/>
                                            <label className="update-input-label">New First Name</label>
                                            <input
                                                type="text"
                                                value={newName}
                                                placeholder="Enter new first name"
                                                onChange={(e) => setNewName(e.target.value)}
                                                className="change-field"
                                                maxLength={15}/>
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
                            <div className="update-right-header-m">Change First Name</div>
                                <div className="update-inputs-container-m">
                                    <div className="update-input-group-m">
                                        <label className="update-input-label-m">Your First Name</label>
                                        <input
                                            type="text"
                                            value={userName}
                                            className="change-field-m"
                                            readOnly/>
                                        <label className="update-input-label-m">New First Name</label>
                                        <input
                                            type="text"
                                            value={newName}
                                            placeholder="Enter new first name"
                                            onChange={(e) => setNewName(e.target.value)}
                                            className="change-field-m"
                                            maxLength={15}/>
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

export default ChangeName;
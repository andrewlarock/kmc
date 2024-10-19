import React, { useState, useEffect, useContext } from 'react';
import '../../css/AccountSettings.css';
import '../../css/mobile/AccountSettingsMobile.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import Bookmark from '../../components/Bookmark';

const AccountSettings = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('Settings');
    const { isAuthenticated, loading, userName, userEmail, setIsAuthenticated, setUserName, setUserEmail } = useContext(AuthContext); // Consume context
    const [error, setError] = useState('');
    const [bookmarks, setBookmarks] = useState([]);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 475);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        fetchBookmarks();
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

    // Function to handle user logout
    const handleLogout = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/logout`, {});
            localStorage.removeItem('token'); // Clear token from localStorage
            setIsAuthenticated(false);
            setUserName('');
            setUserEmail('');
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error);
            alert('An error occurred while logging out. Please try again.');
        }
    };

    // Function to handle account deletion
    const handleDeleteAccount = async () => {
        const authenticated = await checkAuthentication();
        if (!authenticated) {
            setError('You are not authenticated. Please log in again.');
            setTimeout(() => {
                window.location.href = '/';
            }, 3000);
            return;
        }
        const confirmDelete = window.confirm('Are you sure you want to delete your account? This action is irreversible.');
        if (confirmDelete) {
            try {
                await axios.delete(`${process.env.REACT_APP_API_URL}/account/delete`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in the headers
                    },
                });
                localStorage.removeItem('token'); // Clear token from localStorage
                setIsAuthenticated(false);
                setUserName('');
                setUserEmail('');
                navigate('/');
            } catch (error) {
                console.error('Account deletion failed:', error);
                alert('An error occurred while deleting your account. Please try again.');
            }
        }
    };

    const fetchBookmarks = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/bookmark`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in the headers
                },
            });
            setBookmarks(response.data);
        } catch (error) {
            console.error('Error fetching bookmarks:', error);
        }
    };

    useEffect(() => {
        fetchBookmarks();
    }, []);


    if (isDesktop) {
        return (
        <div className="settings-wrapper">
            <div className="settings-container">
                <div className="settings-header">
                    <h1>Account Settings</h1>
                    <p>Manage your account settings and view your bookmarked courses in one place.</p>
                </div>
                <div className="settings-content">

                    <div className="settings-left">
                        <div className='settings-left-option' onClick={() => handleOptionClick('Settings')} style={{ cursor: 'pointer', fontWeight: selectedOption === 'Settings' ? '600' : 'normal' }}>
                            <img src={require('../../css/images/settings.png')} alt="Icon 1"/> 
                                Settings
                        </div>
                        <div className='settings-left-option' onClick={() => handleOptionClick('Bookmarks')} style={{ cursor: 'pointer', fontWeight: selectedOption === 'Bookmarks' ? '600' : 'normal' }}>
                            <img src={require('../../css/images/bookmark.png')} alt="Icon 1"/> 
                                Bookmarks
                        </div>
                    </div>

                    <div className="settings-right">
                        {selectedOption === 'Settings' ? (
                            <div>
                                <div className="settings-right-header">Email Address</div>
                                    <div className="settings-inputs-container">
                                        <div className="input-group">
                                            <label className="input-label">Your Email<span style={{ cursor: 'pointer', color: '#007BFF', marginLeft: '.5rem' }} onClick={() => navigate('/account/change-email')}>change</span></label>
                                            <input
                                                type="email"
                                                value={userEmail}
                                                className="input-field"
                                                readOnly/>
                                        </div>
                                </div>

                                <div className="settings-right-header">Password</div>
                                    <div className="settings-inputs-container">
                                        <div className="input-group">
                                            <label className="input-label">Current Password<span style={{ cursor: 'pointer', color: '#007BFF', marginLeft: '.5rem' }} onClick={() => navigate('/account/change-password')}>change</span></label>
                                            <input
                                                type="text"
                                                value="************"
                                                className="input-field"
                                                readOnly/>
                                        </div>
                                    </div>

                                <div className="settings-right-header">First Name</div>
                                    <div className="settings-inputs-container">
                                        <div className="input-group">
                                            <label className="input-label">Your First Name<span style={{ cursor: 'pointer', color: '#007BFF', marginLeft: '.5rem' }} onClick={() => navigate('/account/change-name')}>change</span></label>
                                            <input
                                                type="text"
                                                value={userName}
                                                className="input-field"
                                                readOnly/>
                                        </div>
                                    </div>

                                <button className="signout-button" onClick={handleLogout}>Sign Out</button>
                                <button className="delete-button" onClick={handleDeleteAccount}>Delete Account</button>

                                {error && <p className="error-message">{error}</p>}
                                    
                            </div>
                                
                        ) : (
                            <div className="bookmark-list">
                                {bookmarks.length > 0 ? (
                                    bookmarks.map((bookmark, index) => (
                                        <Bookmark 
                                            key={index} 
                                            university_id={bookmark.universityId} 
                                            course_id={bookmark.courseId} 
                                            fetchBookmarks={fetchBookmarks} // Pass down the fetch function
                                        />
                                    ))
                                ) : (
                                    <div className='no-bookmarks'>You haven't saved any bookmarks yet!</div>
                                )}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
        );
    }

    return (
        <div className="settings-wrapper-m">
            <div className="settings-container-m">
                <div className="settings-header-m">
                    <h1>Account Settings</h1>
                    <p>Manage your account settings and view your bookmarked courses in one place.</p>
                </div>
                <div className="settings-content-m">

                    <div className="settings-left-m">
                        <div className='settings-left-option-m' onClick={() => handleOptionClick('Settings')} style={{ cursor: 'pointer', fontWeight: selectedOption === 'Settings' ? '600' : 'normal' }}>
                            <img src={require('../../css/images/settings.png')} alt="Icon 1"/> 
                                Settings
                        </div>
                        <div className='settings-left-option-m' onClick={() => handleOptionClick('Bookmarks')} style={{ cursor: 'pointer', fontWeight: selectedOption === 'Bookmarks' ? '600' : 'normal' }}>
                            <img src={require('../../css/images/bookmark.png')} alt="Icon 1"/> 
                                Bookmarks
                        </div>
                    </div>

                    <div className="settings-right-m">
                        {selectedOption === 'Settings' ? (
                            <div>
                                <div className="settings-right-header-m">Email Address</div>
                                    <div className="settings-inputs-container-m">
                                        <div className="input-group-m">
                                            <label className="input-label-m">Your Email<span style={{ cursor: 'pointer', color: '#007BFF', marginLeft: '.5rem' }} onClick={() => navigate('/account/change-email')}>change</span></label>
                                            <input
                                                type="email"
                                                value={userEmail}
                                                className="input-field-m"
                                                readOnly/>
                                        </div>
                                </div>

                                <div className="settings-right-header-m">Password</div>
                                    <div className="settings-inputs-container-m">
                                        <div className="input-group-m">
                                            <label className="input-label-m">Current Password<span style={{ cursor: 'pointer', color: '#007BFF', marginLeft: '.5rem' }} onClick={() => navigate('/account/change-password')}>change</span></label>
                                            <input
                                                type="text"
                                                value="************"
                                                className="input-field-m"
                                                readOnly/>
                                        </div>
                                    </div>

                                <div className="settings-right-header-m">First Name</div>
                                    <div className="settings-inputs-container-m">
                                        <div className="input-group-m">
                                            <label className="input-label-m">Your First Name<span style={{ cursor: 'pointer', color: '#007BFF', marginLeft: '.5rem' }} onClick={() => navigate('/account/change-name')}>change</span></label>
                                            <input
                                                type="text"
                                                value={userName}
                                                className="input-field-m"
                                                readOnly/>
                                        </div>
                                    </div>

                                <button className="signout-button-m" onClick={handleLogout}>Sign Out</button>
                                <button className="delete-button-m" onClick={handleDeleteAccount}>Delete Account</button>

                                {error && <p className="error-message-m">{error}</p>}
                                    
                            </div>
                                
                        ) : (
                            <div className="bookmark-list-m">
                                {bookmarks.length > 0 ? (
                                    bookmarks.map((bookmark, index) => (
                                        <Bookmark 
                                            key={index} 
                                            university_id={bookmark.universityId} 
                                            course_id={bookmark.courseId} 
                                            fetchBookmarks={fetchBookmarks} // Pass down the fetch function
                                        />
                                    ))
                                ) : (
                                    <div className='no-bookmarks-m'>You haven't saved any bookmarks yet!</div>
                                )}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
        );

};

export default AccountSettings;
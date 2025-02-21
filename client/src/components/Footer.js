import React, { useState, useEffect } from 'react';
import '../css/Footer.css';
import '../css/mobile/FooterMobile.css';
import axios from 'axios'; // Import axios for making API calls

const Footer = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [feedbackPopup, setFeedbackPopup] = useState(false);
  const [feedback, setFeedback] = useState('');
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


  const handleIconClick = () => {
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 3000); // Hide after 3 seconds
  };

  const handleFeedback = () => {
    setFeedbackPopup(true);
    setTimeout(() => {
      setFeedbackPopup(false);
    }, 3000); // Hide after 3 seconds
  };

  // Function to handle feedback submission
  const handleFeedbackSubmit = async () => {
    if (!feedback.trim()) {
      console.error('Feedback cannot be empty');
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/feedback`, { feedback });
      handleFeedback();
      setFeedback(''); // Clear input after successful submission
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setFeedback(''); // Clear input after successful submission
    }
  };

  if (isDesktop) {
    return (
      <footer className="footer">

        <div className="footer-left">
          <div className='footer-left-container'>
            <div className='footer-left-header'>
              KickMyCourse
            </div>
            <div className='footer-left-subheader'>
              This app was launched to empower college students with valuable insights into their classes. Our goal is to help students build the perfect schedule with real reviews and feedback from their peers.
            </div>
            <div className='footer-left-contact'>
            <img src={require('../css/images/contact.png')} alt="Contact"/> 
              a.larock1@outlook.com
            </div>

          </div>
        </div>

        <div className="footer-middle">
          <img 
            src={require('../css/images/instagram.png')} 
            alt="Instagram" 
            className="footer-icon" 
            onClick={handleIconClick} 
            style={{ cursor: 'pointer' }} 
          />
          <img 
            src={require('../css/images/linkedin.png')} 
            alt="LinkedIn" 
            className="footer-icon" 
            onClick={() => window.open("https://www.linkedin.com/in/andrew-larock-363b66319/", "_blank")}
            style={{ cursor: 'pointer' }} 
          />
          <img 
            src={require('../css/images/x.png')} 
            alt="Other" 
            className="footer-icon" 
            onClick={handleIconClick} 
            style={{ cursor: 'pointer' }} 
          />
        </div>

        <div className="footer-right">
        <div className='footer-right-container'>
            <div className='footer-right-header'>
              Feedback
            </div>
            <div className='footer-right-subheader'>
              Have any suggestions or encountered an issue? Please use the form below to let us know. Enter your comments below and press Enter—your input helps us improve.
            </div>
            <div className='footer-input-container'>
            <input
              type="text"
              placeholder="Type here..."
              className="footer-right-input"
              value={feedback} // Bind input value to feedback state
              onChange={(e) => setFeedback(e.target.value)} // Update feedback state on change
              onKeyDown={(e) => { // Handle Enter key press
                if (e.key === 'Enter') {
                  handleFeedbackSubmit();
                }
              }}
            />
            <img src={require('../css/images/send.png')} alt="Send" className='send-icon' onClick={handleFeedbackSubmit}/> 
            </div>
          </div>
        </div>

        {/* Popup Message */}
        {popupVisible && (
          <div className="popup-message">
            Coming Soon!
          </div>
        )}

        {feedbackPopup && (
          <div className="popup-message">
            Feedback submitted! Thank you!
          </div>
        )}

      </footer>
    );
  }

  return (
    <footer className="footer-m">

    <div className="footer-left-m">
        <img 
          src={require('../css/images/instagram.png')} 
          alt="Instagram" 
          className="footer-icon-m" 
          onClick={handleIconClick} 
          style={{ cursor: 'pointer' }} 
        />
        <img 
          src={require('../css/images/linkedin.png')} 
          alt="LinkedIn" 
          className="footer-icon-m" 
          onClick={() => window.open("https://www.linkedin.com/in/andrew-larock-363b66319/", "_blank")} 
          style={{ cursor: 'pointer' }} 
        />
        <img 
          src={require('../css/images/x.png')} 
          alt="Other" 
          className="footer-icon-m" 
          onClick={handleIconClick} 
          style={{ cursor: 'pointer' }} 
        />
      </div>

      <div className="footer-mid-m">
        <div className='footer-mid-container-m'>
          <div className='footer-mid-header-m'>
            KickMyCourse
          </div>
          <div className='footer-mid-subheader-m'>
            This app was launched to empower college students with valuable insights into their classes. Our goal is to help students build the perfect schedule with real reviews and feedback from their peers.
          </div>
          <div className='footer-mid-contact-m'>
          <img src={require('../css/images/contact.png')} alt="Contact"/> 
            a.larock1@outlook.com
          </div>

        </div>
      </div>

      <div className="footer-right-m">
      <div className='footer-right-container-m'>
          <div className='footer-right-header-m'>
            Feedback
          </div>
          <div className='footer-right-subheader-m'>
            Have any suggestions or encountered an issue? Please use the form below to let us know. Enter your comments below and press Enter—your input helps us improve.
          </div>
          <div className='footer-input-container-m'>
          <input
            type="text"
            placeholder="Type here..."
            className="footer-right-input-m"
            value={feedback} // Bind input value to feedback state
            onChange={(e) => setFeedback(e.target.value)} // Update feedback state on change
            onKeyDown={(e) => { // Handle Enter key press
              if (e.key === 'Enter') {
                handleFeedbackSubmit();
              }
            }}
          />
          <img src={require('../css/images/send.png')} alt="Send" className='send-icon-m' onClick={handleFeedbackSubmit}/> 
          </div>
        </div>
      </div>

      {/* Popup Message */}
      {popupVisible && (
        <div className="popup-message-m">
          Coming Soon!
        </div>
      )}

      {feedbackPopup && (
        <div className="popup-message-m">
          Feedback submitted! Thank you!
        </div>
      )}

    </footer>
  );

};

export default Footer;
import React, { useEffect, useState } from 'react';
import '../css/Review.css';
import '../css/mobile/ReviewMobile.css';
import Tag from './Tag';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Review = ({ id, university_id, course_id, professor, code, number, difficulty, workload, enjoyment, recommend, reviewText, tags, timestamp }) => {
    const navigate = useNavigate();
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 475);

    // Parse the tags string into an array because we had to change how the database handles tags with deployment
    let tagArray;
    try {
        if (typeof tags === 'string') {
            // Replace curly braces with square brackets and split by commas
            tagArray = tags.replace(/^{|}$/g, '') // Remove curly braces
                           .split(',')            // Split by commas
                           .map(tag => tag.trim().replace(/^"|"$/g, '')); // Trim each tag and remove surrounding quotes
        } else {
            tagArray = tags; // Assume it's already an array
        }
    } catch (error) {
        console.error('Error parsing tags:', error);
        tagArray = []; // Set to an empty array if parsing fails
    }

    let difScoreColor;
    let difScoreText;
    let worScoreColor;
    let worScoreText;
    let enjScoreColor;
    let enjScoreText;

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

    const formatTimestamp = (timestamp) => { // format the timestamp
        const date = new Date(timestamp);
        const options = { year: 'numeric', month: 'short' };
        return date.toLocaleString('en-US', options).replace(',', '');
    };
    const formattedDate = formatTimestamp(timestamp);

    // Function to handle the flagging of a review
    const handleFlagClick = async () => {
        const userConfirmed = window.confirm('Are you sure you want to flag this review? Flagging indicates that this review may violate our community guidelines. You can review the guidelines at: kickmycourse.com/review-form/guidelines.');
        
        if (userConfirmed) {
            try {
                // Call the API to increment the flags
                const response = await axios.post(`${process.env.REACT_APP_API_URL}/reviews/flag`, { reviewId: id });
                alert(`Thanks for flagging that review! We appreciate your help in keeping our community clean and respectful.`);
            } catch (error) {
                console.error('Error flagging review:', error);
                alert('An error occurred while flagging the review.');
            }
        }
    };

    // set dyanmic styles based on difficulty rating

    if (difficulty == 1 || difficulty == 2) {
        difScoreColor = 'review-score-green';
        difScoreText = 'BASIC';
    } else if (difficulty == 3 || difficulty == 4) {
        difScoreColor = 'review-score-green';
        difScoreText = 'INTERMEDIATE';
    } else if (difficulty == 5 || difficulty == 6) {
        if (difficulty == 5) {
            difScoreColor = 'review-score-green';
        } else {
            difScoreColor = 'review-score-gray';
        }
        difScoreText = 'MODERATE';
    } else if (difficulty == 7 || difficulty == 8) {
        if (difficulty == 7) {
            difScoreColor = 'review-score-gray';
        } else {
            difScoreColor = 'review-score-red';
        }
        difScoreText = 'CHALLENGING';
    } else if (difficulty == 9 || difficulty == 10) {
        difScoreColor = 'review-score-red';
        difScoreText = 'INTENSE';
    }

    // set dyanmic styles based on workload rating

    if (workload == 1 || workload == 2) {
        worScoreColor = 'review-score-green';
        worScoreText = 'MINIMAL';
    } else if (workload == 3 || workload == 4) {
        worScoreColor = 'review-score-green';
        worScoreText = 'LIGHT';
    } else if (workload == 5 || workload == 6) {
        if (workload == 5) {
            worScoreColor = 'review-score-green';
        } else {
            worScoreColor = 'review-score-gray';
        }
        worScoreText = 'MANAGEABLE';
    } else if (workload == 7 || workload == 8) {
        if (workload == 7) {
            worScoreColor = 'review-score-gray';
        } else {
            worScoreColor = 'review-score-red';
        }
        worScoreText = 'HEAVY';
    } else if (workload == 9 || workload == 10) {
        worScoreColor = 'review-score-red';
        worScoreText = 'INTENSE';
    }

    // set dyanmic styles based on enjoyment rating

    if (enjoyment == 1 || enjoyment == 2) {
        enjScoreColor = 'review-score-red';
        enjScoreText = 'DID NOT';
    } else if (enjoyment == 3 || enjoyment == 4) {
        if (enjoyment == 3) {
            enjScoreColor = 'review-score-red';
        } else {
            enjScoreColor = 'review-score-gray';
        }
        enjScoreText = 'SOMEWHAT';
    } else if (enjoyment == 5 || enjoyment == 6) {
        if (enjoyment == 5) {
            enjScoreColor = 'review-score-gray';
        } else {
            enjScoreColor = 'review-score-green';
        }
        enjScoreText = 'SATISFIED';
    } else if (enjoyment == 7 || enjoyment == 8) {
        enjScoreColor = 'review-score-green';
        enjScoreText = 'ENJOYED';
    } else if (enjoyment == 9 || enjoyment == 10) {
        enjScoreColor = 'review-score-green';
        enjScoreText = 'LOVED';
    }
    
    if (isDesktop) {
        return (
            <div className='review'>

                <div className='review-top'>
                    <div className='review-course'>
                    <img src={require('../css/images/cap.png')} alt="Icon 1" />
                        {university_id && course_id ? (
                            <span onClick={() => {navigate(`/university/${university_id}/${course_id}`); window.scrollTo(0, 0);}} style={{ cursor: 'pointer' }}>
                                {code}{number}
                            </span>
                        ) : (
                            <span style={{ textDecoration: 'none' }}>
                                {code}{number}
                            </span>
                        )}
                    </div>
                    <div className='review-top-text'>
                        Taken With: &nbsp;
                        <b className={`semi-bold ${professor.length > 20 ? 'professor-name-small' : 'professor-name'}`}>
                            {professor}
                        </b>
                    </div>
                    <div className='review-top-text'>
                        Recommended: &nbsp;<b className='semi-bold'>{recommend}</b>
                    </div>
                    <div className='review-timestamp'>
                        {formattedDate}
                    </div>
                </div>

                <div className='review-middle'>
                    <div className='review-review'>
                        {reviewText}
                    </div>
                </div>

                <div className='review-bottom'>
                    <div className='review-difficulty-box'>
                        <div className='review-box-header'>Difficulty</div>
                        <div className='review-box-score'>{difficulty}<span className="score-out-of">/10</span></div>
                        <div className={difScoreColor}>
                            <div className='review-score-text'>{difScoreText}</div>
                        </div>
                    </div>

                    <div className='review-workload-box'>
                        <div className='review-box-header'>Workload</div>
                        <div className='review-box-score'>{workload}<span className="score-out-of">/10</span></div>
                        <div className={worScoreColor}>
                            <div className='review-score-text'>{worScoreText}</div>
                        </div>
                    </div>

                    <div className='review-enjoyment-box'>
                        <div className='review-box-header'>Enjoyment</div>
                        <div className='review-box-score'>{enjoyment}<span className="score-out-of">/10</span></div>
                        <div className={enjScoreColor}>
                            <div className='review-score-text'>{enjScoreText}</div>
                        </div>
                    </div>

                    <div className='review-tags-box'>
                        <div className='review-tags-container'>
                        {tagArray.map((tag, index) => (
                            <Tag key={index} name={tag} isSelected={false} isClickable={false} />
                        ))}
                        </div>
                    </div>

                    <div className='flag-box'>
                        <a onClick={handleFlagClick}> 
                            <img src={require('../css/images/flag.png')} alt="Flag Icon" />
                        </a>
                    </div>
                </div>

            </div>
        );
    }

    return (
        <div className='review-m'>
            <div className='review-very-top-m'>
                <div className='review-very-top-left-m'>
                    <div className='review-course-m'>
                    <img src={require('../css/images/cap.png')} alt="Icon 1" />
                        {university_id && course_id ? (
                            <span onClick={() => {navigate(`/university/${university_id}/${course_id}`); window.scrollTo(0, 0);}} style={{ cursor: 'pointer' }}>
                                {code}{number}
                            </span>
                        ) : (
                            <span style={{ textDecoration: 'none' }}>
                                {code}{number}
                            </span>
                        )}
                    </div>
                </div>

                <div className='review-very-top-right-m'>
                    <div className='review-timestamp-m'>
                        {formattedDate}
                    </div>
                </div>
            </div>

            <div className='review-top-m'>
                <div className='review-top-text-m'>
                    Taken With: &nbsp;
                    <b className={`semi-bold-m ${professor.length > 20 ? 'professor-name-small-m' : 'professor-name-m'}`}>
                        {professor}
                    </b>
                </div>
                <div className='review-top-text-m'>
                    Recommended: &nbsp;<b className='semi-bold-m'>{recommend}</b>
                </div>

                <div className='review-tags-box-m'>
                    <div className='review-tags-container-m'>
                    {tagArray.map((tag, index) => (
                        <Tag key={index} name={tag} isSelected={false} isClickable={false} />
                    ))}
                    </div>
                </div>
                
            </div>

            <div className='review-middle-m'>
                <div className='review-review-m'>
                    {reviewText}
                </div>
            </div>

            <div className='review-bottom-m'>
                <div className='review-difficulty-box-m'>
                    <div className='review-box-header-m'>Difficulty</div>
                    <div className='review-box-score-m'>{difficulty}<span className="score-out-of-m">/10</span></div>
                    <div className={difScoreColor}>
                        <div className='review-score-text-m'>{difScoreText}</div>
                    </div>
                </div>

                <div className='review-workload-box-m'>
                    <div className='review-box-header-m'>Workload</div>
                    <div className='review-box-score-m'>{workload}<span className="score-out-of-m">/10</span></div>
                    <div className={worScoreColor}>
                        <div className='review-score-text-m'>{worScoreText}</div>
                    </div>
                </div>

                <div className='review-enjoyment-box-m'>
                    <div className='review-box-header-m'>Enjoyment</div>
                    <div className='review-box-score-m'>{enjoyment}<span className="score-out-of-m">/10</span></div>
                    <div className={enjScoreColor}>
                        <div className='review-score-text-m'>{enjScoreText}</div>
                    </div>
                </div>

                <div className='flag-box-m'>
                    <a onClick={handleFlagClick}> 
                        <img src={require('../css/images/flag.png')} alt="Flag Icon" />
                    </a>
                </div>
            </div>

        </div>
    );

};

export default Review;
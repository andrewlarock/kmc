import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UniversityFormatter from '../components/UniversityFormatter.js';
import Tag from '../components/Tag';
import '../css/ReviewForm.css';
import '../css/mobile/ReviewFormMobile.css';
import { Filter } from 'bad-words';

const ReviewForm = () => {

    const { universityId, courseId } = useParams(); // Extract universityId and courseId from the URL

    const [reviewSchool, setSchool] = useState('');
    const [reviewCC, setCC] = useState('');
    const [reviewCN, setCN] = useState('');
    const [reviewProfessor, setProfessor] = useState('');
    const [reviewDifficulty, setDifficulty] = useState('');
    const [reviewWorkload, setWorkload] = useState('');
    const [reviewEnjoyment, setEnjoyment] = useState('');
    const [reviewRecommended, setRecommended] = useState('');
    const [reviewReview, setReview] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [error, setError] = useState('');
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 475);

    const reviewFilter = new Filter();
    const navigate = useNavigate();

    const availableTags = [
      'Lecture Heavy', 'Reading Heavy', 'Project Heavy', 'Exam Heavy', 'Writing Intensive', 'Strict Grading', 'Lenient Grading', 'Attendance Graded', 'Textbook Required', 'Presentations', 'Group Work', 'Discussion Based', 'Frequent Quizzes', 'No Final Exam', 'Open Book Exams', 'Remote', 'Online Lectures', 'Weekly Assignments', 'Disorganized', 'Well Structured', 'Extra Credit', 'Hands-On', 'Fast Paced', 'Self Paced', 'Low Stress', 'Lab Required', 'Fieldwork Required', 'Case Studies', 'Research Intensive', 'Capstone Course', 'Research Papers', 'Design Projects', 'Beginner Friendly', 'Flexibility', 'No Flexibility', 'Overly Complex'
  ];

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
    // Function to fetch course details from the URL and auto-fill into form
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/courses/${courseId}`); // Use the correct backend URL
        
        if (response.status === 204) { // Handles course not being found
          console.error('Course not found');
          return;
        } 
  
        if (response.ok) {
          const courseData = await response.json();
          setCC(courseData.code);
          setCN(courseData.number);
        } else {
          console.error('Failed to fetch course details');
        }
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };
  
    // Function to fetch university name from the URL and auto-fill into form
    const fetchUniversityName = async () => {
      try {
        const response = await fetch(`http://localhost:5000/universities/${universityId}`); // Fetch university by ID
  
        if (response.status === 204) { // Handles university not being found
          console.error('University not found');
          navigate('/');
        }
  
        if (response.ok) {
          const universityData = await response.json();
  
          // formats university name
          const { formattedName, formattedLocation } = UniversityFormatter({
            name: universityData.name,
            location: universityData.location
          });
  
          setSchool(formattedName); // Assuming "name" is the field in the response
        } else {
          console.error('Failed to fetch university name');
        }
      } catch (error) {
        console.error('Error fetching university name:', error);
      }
    };
  
    // Only fetch course details if courseId exists
    if (courseId) {
      fetchCourseDetails();
    }
  
    // Only fetch university name if universityId exists
    if (universityId) {
      fetchUniversityName();
    }

  }, [courseId, universityId]);

    const handleTagClick = (tag) => {
      setSelectedTags(prevTags => {
          if (prevTags.includes(tag)) {
              return prevTags.filter(t => t !== tag);
          } else if (prevTags.length < 4) {
              return [...prevTags, tag];
          }
          return prevTags;
      });
    };

    const validateCourse = async (universityId, code, number) => {
        try {

        const normalizedCode = code.toUpperCase();
        const normalizedNumber = number.toUpperCase();

        // Make sure course code and number are valid inputs
        const validCodePattern = /^[A-Z]{2,5}$/;  // Pattern for 2-5 uppercase letters only
        const validNumberPattern = /^[0-9]{2,5}$/;  // Pattern for 2-5 digits only

        // Validate normalizedCode
        if (!validCodePattern.test(normalizedCode)) {
            setError('Invalid course code: must be 2-5 letters with no numbers, spaces, or special characters. To learn how to format a course code, look for "Searching for a Class & Formatting a Class Name" on the About page.');
            throw new Error('Invalid course code: must be 2-5 uppercase letters with no numbers, spaces or special characters.');
        }

        // Validate normalizedNumber
        if (!validNumberPattern.test(normalizedNumber)) {
            setError('Invalid course number: must be 2-5 digits with no spaces or special characters. To learn how to format a course number, look for "Searching for a Class & Formatting a Class Name" on the About page.');
            throw new Error('Invalid course number: must be 2-5 digits with no spaces or special characters.');
        }
        
        // Check if the course exists
        let response = await axios.get('http://localhost:5000/courses', {
        params: { university_id: universityId, code: normalizedCode, number: normalizedNumber },
        });
    
        // Course exists, return the course ID
        if (response.status === 200) {
        return response.data.id;
        }

        // Course does not exist, create it
        if (response.status === 204) {
        try {
            const createResponse = await axios.post('http://localhost:5000/courses', {
                university_id: universityId,
                code: normalizedCode,
                number: normalizedNumber,
            });
            // Return the newly created course ID
            return (await axios.get('http://localhost:5000/courses', {
            params: { university_id: universityId, code: normalizedCode, number: normalizedNumber },
            })).data.id;
        } catch (createError) {
            console.error('Error creating course:', createError);
            throw createError; // Re-throw error for handling in the submit function
        }}

        } catch (error) {
            console.error('Error:', error);
            throw error; // Re-throw to stop execution in handleCourseReviewSubmit
        }
      };

    const validateFormInputs = () => {
        return (
            reviewSchool.trim() !== '' &&
            reviewProfessor.trim() !== '' &&
            reviewCC.trim() !== '' &&
            reviewCN.trim() !== '' &&
            reviewDifficulty !== '' &&
            reviewWorkload !== '' &&
            reviewEnjoyment !== '' &&
            reviewRecommended !== '' &&
            reviewReview.trim() !== '' &&
            selectedTags.length > 0
        );
    };

    const handleCourseReviewSubmit = async (e) => {
        e.preventDefault();

        if (!validateFormInputs()) {
          setError('Please fill out all fields and select at least one tag.');
          return;
        }

        // Check for profanity in the review
        if (reviewFilter.isProfane(reviewReview)) {
          setError('Your review contains inappropriate language. Please remove any foul language and try again.'); 
          return;
        }

        try {
            // Fetch university ID by university name using HTTP request
            const schoolUppercase = reviewSchool.toUpperCase();
            const response = await axios.get(`http://localhost:5000/universities/name/${schoolUppercase}`);
            const universityId = response.data.id;

            // Validate the course and get its ID
            const courseId = await validateCourse(universityId, reviewCC, reviewCN);

            // Prepare the review data
            const reviewData = {
                university_id: universityId,
                course_id: courseId,
                professor: reviewProfessor,
                CC: reviewCC.toUpperCase(),
                CN: reviewCN.toUpperCase(),
                difficulty: reviewDifficulty,
                workload: reviewWorkload,
                enjoyment: reviewEnjoyment,
                recommended: reviewRecommended,
                review: reviewReview,
                tags: selectedTags
            };

            // Submit the review
            const submitResponse = await axios.post('http://localhost:5000/reviews', reviewData);

            // Handle successful submission
            if (submitResponse.status === 201) {

                // Reset all fields to their initial state
                setSchool('');
                setCC('');
                setCN('');
                setProfessor('');
                setDifficulty('');
                setWorkload('');
                setEnjoyment('');
                setRecommended('');
                setReview('');
                setSelectedTags([]);

                // Navigate to the university and course page
                setError('')
                navigate(`/university/${universityId}/${courseId}`);
                window.scrollTo(0, 0);
            } else {
                console.error('Unexpected response status:', submitResponse.status);
            }

    } catch (error) {
        console.error('Error:', error);
    }
};

    const handleRatingClick = (setter) => (value) => {
      setter(value);
    };

  if (isDesktop) {
    return (
      <div className="form-page-wrapper">

      <div className="form-container">
          <form onSubmit={handleCourseReviewSubmit}>

          <div className="form-header">
              <div className='form-header-text'>Leave a Course Review</div>
              <div className='form-header-subtext'>Help future students by rating this course and sharing your experience.</div>
          </div>
            
              <div className="form-body">
                  {/* Row 1: School and Professor */}
                  <div className="form-row">
                      <div className="input-container">
                          <label className="input-header">School</label>
                          <label className="input-subheader">The name of the school you took this course at.</label>
                          <input type="text" className='form-input' value={reviewSchool} onChange={(e) => setSchool(e.target.value)} readOnly/>
                      </div>

                      <div className="input-container">
                          <label className="input-header">Professor</label>
                          <label className="input-subheader">Enter the professor's name for this course.</label>
                          <input type="text" className='form-input' placeholder="ex. John Doe, Jane Doe" value={reviewProfessor} onChange={(e) => setProfessor(e.target.value)} maxLength={50}/>
                      </div>
                  </div>

                  {/* Row 2: Course Code and Number */}
                  <div className="form-row">
                      <div className="input-container">
                          <label className="input-header">Course Code</label>
                          <label className="input-subheader">
                              Please enter the 2-4 letter code used to uniquely identify this course at your university, such as 'PHY' or 'MATH'.
                              For more info on this, <span onClick={() => window.open('/about', '_blank')} style={{ textDecoration: 'underline', cursor: 'pointer' }}>see here</span>.
                          </label>
                          <input type="text" className='form-input' placeholder="ex. PHY, MATH, CSE, GE" value={reviewCC} onChange={(e) => setCC(e.target.value)} />
                      </div>

                      <div className="input-container">
                          <label className="input-header">Course Number</label>
                          <label className="input-subheader">
                              Enter the numerical code that identifies this course at your university, consisting of 2-4 digits, such as '101' or '346'.
                              For more info on this, <span onClick={() => window.open('/about', '_blank')} style={{ textDecoration: 'underline', cursor: 'pointer' }}>see here</span>.
                          </label>
                          <input type="text" className='form-input' placeholder="ex. 101, 346, 2000, 106A" value={reviewCN} onChange={(e) => setCN(e.target.value)} />
                      </div>
                  </div>

                  {/* Row 3: Workload and Difficulty */}
                  <div className="form-row">
                      <div className="input-container">
                          <label className="input-header">Difficulty</label>
                          <label className="input-subheader">Rate how challenging the course material was to grasp and understand based on your experience on a scale from 1-10.</label>
                          <div className="rating-container">
                              {Array.from({ length: 10 }, (_, index) => (
                                  <div
                                      key={index + 1}
                                      className={`rating-box ${reviewDifficulty === index + 1 ? 'selected' : ''}`}
                                      onClick={() => handleRatingClick(setDifficulty)(index + 1)}
                                  >
                                      {index + 1}
                                  </div>
                              ))}
                          </div>
                      </div>

                      <div className="input-container">
                          <label className="input-header">Workload</label>
                          <label className="input-subheader">Rate how demanding the course was in terms of workload (assignments, quizzes, etc.) on a scale from 1-10.</label>
                          <div className="rating-container">
                              {Array.from({ length: 10 }, (_, index) => (
                                  <div
                                      key={index + 1}
                                      className={`rating-box ${reviewWorkload === index + 1 ? 'selected' : ''}`}
                                      onClick={() => handleRatingClick(setWorkload)(index + 1)}
                                  >
                                      {index + 1}
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>

                  {/* Row 4: Enjoyment and Recommendation */}
                  <div className="form-row">
                      <div className="input-container">
                          <label className="input-header">Enjoyment</label>
                          <label className="input-subheader">Assess how much you enjoyed the course, how interested you were in the material, and how fulfilling the experience was on a scale from 1-10.</label>
                          <div className="rating-container">
                              {Array.from({ length: 10 }, (_, index) => (
                                  <div
                                      key={index + 1}
                                      className={`enjoyment-rating-box ${reviewEnjoyment === index + 1 ? 'selected' : ''}`}
                                      onClick={() => handleRatingClick(setEnjoyment)(index + 1)}
                                  >
                                      {index + 1}
                                  </div>
                              ))}
                          </div>
                      </div>

                      <div className="input-container recommendation-input">
                          <label className="input-header">Would You Recommend?</label>
                          <label className="input-subheader">Based on your experience, would you recommend this class to other students?</label>
                          <div className="recommendation-options">
                              <label className="recommendation-option">
                                  <input
                                      type="radio"
                                      name="recommended"
                                      value="Yes"
                                      checked={reviewRecommended === 'Yes'}
                                      onChange={() => setRecommended('Yes')}
                                  />
                                  <div className="circle"></div>
                                  <span className="recommendation-text">Yes</span>
                              </label>
                              <label className="recommendation-option">
                                  <input
                                      type="radio"
                                      name="recommended"
                                      value="No"
                                      checked={reviewRecommended === 'No'}
                                      onChange={() => setRecommended('No')}
                                  />
                                  <div className="circle"></div>
                                  <span className="recommendation-text">No</span>
                              </label>
                          </div>
                      </div>
                  </div>

                  {/* Row: Full Review */}
                  <div className="form-row full-review-row">
                      <div className="input-container full-review-container">
                          <label className="input-header">Review</label>
                          <label className="input-subheader">Describe your overall experience with the course. Include your impressions of the material, workload, instructor, and any significant aspects of your experience. Your feedback will provide valuable information for others considering this class.</label>
                          <div className='form-guidelines'>
                            <img src={require('../css/images/exclamation-mark.png')} alt="Icon 1"/> 
                            Please do not use profanity or derogatory terms. &nbsp;<span onClick={() => window.open('/review-form/guidelines', '_blank')} style={{ textDecoration: 'underline', cursor: 'pointer' }}>See Guidelines</span>
                          </div>
                          <textarea
                              className="form-textarea"
                              value={reviewReview}
                              onChange={(e) => setReview(e.target.value)}
                              placeholder="Write your review here..."
                              maxLength={600}
                          />
                      </div>
                  </div>

                  {/* Row: Tags */}
                  <div className="form-row tags-row">
                      <div className="input-container tags-container">
                          <label className="input-header">Tags</label>
                          <label className="input-subheader">Select up to 4 tags that best describe the key characteristics of this class.</label>
                          <div className="tags-selection">
                              {availableTags.map(tag => (
                                  <Tag
                                      key={tag}
                                      name={tag}
                                      isSelected={selectedTags.includes(tag)}
                                      onClick={handleTagClick}
                                      isClickable={true}
                                  />
                              ))}
                          </div>
                      </div>
                  </div>

                  {error && <div className="review-error">{error}</div>}

              </div>

                <div className="form-footer">
                    <button type="submit" className="form-button">
                        <div className='form-button-text'>
                            Post Review
                        </div>
                    </button>

                  <div className='form-footer-disclaimer-container'>
                    <div className='form-disclaimer-text'>
                        All reviews are completely anonymous. By submitting this review, I confirm that I have read and agree to the 
                        <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => window.open('/review-form/guidelines', '_blank')}> Review Guidelines</span>. 
                        I understand that the submitted review will become the property of KickMyCourse.
                    </div>
                  </div>
              </div>
          </form>
      </div>
  </div>
  );
}

  return (
    <div className="form-page-wrapper-m">

    <div className="form-container-m">
        <form onSubmit={handleCourseReviewSubmit}>

        <div className="form-header-m">
            <div className='form-header-text-m'>Leave a Course Review</div>
            <div className='form-header-subtext-m'>Help future students by rating this course and sharing <br></br>your experience.</div>
        </div>
          
            <div className="form-body-m">
                {/* School and Professor */}
                <div className="form-row-m">
                    <div className="input-container-m">
                        <label className="input-header-m">School</label>
                        <label className="input-subheader-m">The name of the school you took this course at.</label>
                        <input type="text" className='form-input-m' value={reviewSchool} onChange={(e) => setSchool(e.target.value)} readOnly/>
                    </div>

                    <div className="input-container-m">
                        <label className="input-header-m">Professor</label>
                        <label className="input-subheader-m">Enter the professor's name for this course.</label>
                        <input type="text" className='form-input-m' placeholder="ex. John Doe, Jane Doe" value={reviewProfessor} onChange={(e) => setProfessor(e.target.value)} maxLength={50}/>
                    </div>
                </div>

                {/* Course Code and Number */}
                <div className="form-row-m">
                    <div className="input-container-m">
                        <label className="input-header-m">Course Code</label>
                        <label className="input-subheader-m">
                              Please enter the 2-4 letter code used to uniquely identify this course at your university, such as 'PHY' or 'MATH'.
                              For more info on this, <span onClick={() => window.open('/about', '_blank')} style={{ textDecoration: 'underline', cursor: 'pointer' }}>see here</span>.
                          </label>
                        <input type="text" className='form-input-m' placeholder="ex. PHY, MATH, CSE, GE" value={reviewCC} onChange={(e) => setCC(e.target.value)} />
                    </div>

                    <div className="input-container-m">
                        <label className="input-header-m">Course Number</label>
                        <label className="input-subheader-m">
                              Enter the numerical code that identifies this course at your university, consisting of 2-4 digits, such as '101' or '346'.
                              For more info on this, <span onClick={() => window.open('/about', '_blank')} style={{ textDecoration: 'underline', cursor: 'pointer' }}>see here</span>.
                          </label>
                        <input type="text" className='form-input-m' placeholder="ex. 101, 346, 2000, 106A" value={reviewCN} onChange={(e) => setCN(e.target.value)} />
                    </div>
                </div>

                {/* Workload and Difficulty */}
                <div className="form-row-m">
                    <div className="input-container-m">
                        <label className="input-header-m">Difficulty</label>
                        <label className="input-subheader-m">Rate how challenging the course material was to grasp and understand based on your experience on a scale from 1-10.</label>
                        <div className="rating-container-m">
                            {Array.from({ length: 10 }, (_, index) => (
                                <div
                                    key={index + 1}
                                    className={`rating-box-m ${reviewDifficulty === index + 1 ? 'selected' : ''}`}
                                    onClick={() => handleRatingClick(setDifficulty)(index + 1)}
                                >
                                    {index + 1}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="input-container-m">
                        <label className="input-header-m">Workload</label>
                        <label className="input-subheader-m">Rate how demanding the course was in terms of workload (assignments, quizzes, etc.) on a scale from 1-10.</label>
                        <div className="rating-container-m">
                            {Array.from({ length: 10 }, (_, index) => (
                                <div
                                    key={index + 1}
                                    className={`rating-box-m ${reviewWorkload === index + 1 ? 'selected' : ''}`}
                                    onClick={() => handleRatingClick(setWorkload)(index + 1)}
                                >
                                    {index + 1}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Enjoyment and Recommendation */}
                <div className="form-row-m">
                    <div className="input-container-m">
                        <label className="input-header-m">Enjoyment</label>
                        <label className="input-subheader-m">Assess how much you enjoyed the course, how interested you were in the material, and how fulfilling the experience was on a scale from 1-10.</label>
                        <div className="rating-container-m">
                            {Array.from({ length: 10 }, (_, index) => (
                                <div
                                    key={index + 1}
                                    className={`enjoyment-rating-box-m ${reviewEnjoyment === index + 1 ? 'selected' : ''}`}
                                    onClick={() => handleRatingClick(setEnjoyment)(index + 1)}
                                >
                                    {index + 1}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="input-container-m recommendation-input-m">
                        <label className="input-header-m">Would You Recommend?</label>
                        <label className="input-subheader-m">Based on your experience, would you recommend this class to other students?</label>
                        <div className="recommendation-options-m">
                            <label className="recommendation-option-m">
                                <input
                                    type="radio"
                                    name="recommended"
                                    value="Yes"
                                    checked={reviewRecommended === 'Yes'}
                                    onChange={() => setRecommended('Yes')}
                                />
                                <div className="circle-m"></div>
                                <span className="recommendation-text-m">Yes</span>
                            </label>
                            <label className="recommendation-option-m">
                                <input
                                    type="radio"
                                    name="recommended"
                                    value="No"
                                    checked={reviewRecommended === 'No'}
                                    onChange={() => setRecommended('No')}
                                />
                                <div className="circle-m"></div>
                                <span className="recommendation-text-m">No</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Full Review */}
                <div className="form-row-m full-review-row-m">
                    <div className="input-container-m full-review-container-m">
                        <label className="input-header-m">Review</label>
                        <label className="input-subheader-m">Describe your overall experience with the course. Include your impressions of the material, workload, instructor, and any significant aspects of your experience. Your feedback will provide valuable information for others considering this class.</label>
                        <div className='form-guidelines-m'>
                          <img src={require('../css/images/exclamation-mark.png')} alt="Icon 1"/> 
                          Please do not use profanity or derogatory terms. &nbsp;<span onClick={() => window.open('/review-form/guidelines', '_blank')} style={{ textDecoration: 'underline', cursor: 'pointer' }}>See Guidelines</span>
                        </div>
                        <textarea
                            className="form-textarea-m"
                            value={reviewReview}
                            onChange={(e) => setReview(e.target.value)}
                            placeholder="Write your review here..."
                            maxLength={600}
                        />
                    </div>
                </div>

                {/* Tags */}
                <div className="form-row tags-row-m">
                    <div className="input-container tags-container-m">
                        <label className="input-header-m">Tags</label>
                        <label className="input-subheader-m">Select up to 4 tags that best describe the key characteristics of this class.</label>
                        <div className="tags-selection-m">
                            {availableTags.map(tag => (
                                <Tag
                                    key={tag}
                                    name={tag}
                                    isSelected={selectedTags.includes(tag)}
                                    onClick={handleTagClick}
                                    isClickable={true}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {error && <div className="review-error-m">{error}</div>}

            </div>

            <div className="form-footer-m">
                <button type="submit" className="form-button-m">
                    <div className='form-button-text-m'>
                        Post Review
                    </div>
                </button>
                <div className='form-footer-disclaimer-container-m'>
                    <div className='form-disclaimer-text-m'>
                        All reviews are completely anonymous. By submitting this review, I confirm that I have read and agree to the 
                        <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => window.open('/review-form/guidelines', '_blank')}> Review Guidelines</span>. 
                        I understand that the submitted review will become the property of KickMyCourse.
                    </div>
                </div>
            </div>
        </form>
    </div>
  </div>
  );

};

export default ReviewForm;
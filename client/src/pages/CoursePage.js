import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import UniversityFormatter from '../components/UniversityFormatter.js';
import Tag from '../components/Tag.js';
import Review from '../components/Review.js';
import Chart from '../components/Chart.js';
import '../css/CoursePage.css';
import '../css/mobile/CoursePageMobile.css';
import { AuthContext } from '../context/AuthContext';
import logo from '../css/images/logo.png';

const CoursePage = () => {
  const { id, courseId } = useParams(); // Get the ID from the URL
  const [university, setUniversity] = useState(null);
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewCC, setCC] = useState('');
  const [reviewCN, setCN] = useState('');
  const [percentage, setPercentage] = useState(0)
  const [topTags, setTopTags] = useState([]);
  const [averages, setAverages] = useState({ difficulty: 0, workload: 0, enjoyment: 0 }); // State for average scores

  const [visibleReviews, setVisibleReviews] = useState(20);
  const [selectedProfessor, setSelectedProfessor] = useState(''); // New state for selected professor
  const [uniqueProfessors, setUniqueProfessors] = useState([]); // State for unique professors
  const [showDropdown, setShowDropdown] = useState(false); // State for showing dropdown
  const [filteredReviewCount, setFilteredReviewCount] = useState(0); 

  const [feedback, setFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('')
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 475);

  const navigate = useNavigate();
  const {isAuthenticated} = useContext(AuthContext);

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

  useEffect(() => {
    const fetchReviews = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/reviews`); // Adjust the URL as necessary
            // Filter reviews based on university_id and sort by timestamp
            const filteredReviews = response.data
                .filter(review => review.university_id == id) // Match university_id with the id from URL
                .filter(review => review.course_id == courseId) // Match course_id with the id from URL
                .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)); // Sort by timestamp in descending order

            setReviews(filteredReviews); // Set the filtered and sorted reviews
            
            // Extract unique professors
            const professors = [...new Set(filteredReviews.map(review => review.professor))];
            setUniqueProfessors(professors);

            // Calculate the percentage of reviews with 'Yes' for recommended
            const yesCount = filteredReviews.filter(review => review.recommended == 'Yes').length;
            const totalReviews = filteredReviews.length;
            const percent = totalReviews > 0 ? (yesCount / totalReviews) * 100 : 0;

            setPercentage(percent.toFixed(0)); // Set percentage and limit to 2 decimal places

            // Find the 3 most popular tags
            const tagCount = {};
            filteredReviews.forEach(review => {

                // Check if tags is a string, and split it into an array if necessary
                const tagsArray = typeof review.tags === 'string' ? review.tags.replace(/["{}]/g, '').split(',') : review.tags;
    
                tagsArray.forEach(tag => {
                    tagCount[tag.trim()] = (tagCount[tag.trim()] || 0) + 1;
                });
            });

            // Convert tagCount object to an array of [tag, count] and sort by count in descending order
            const sortedTags = Object.entries(tagCount).sort((a, b) => b[1] - a[1]);

            // Extract the top 3 most popular tags
            const topThreeTags = sortedTags.slice(0, 3).map(tag => tag[0]);
            setTopTags(topThreeTags); // Set the top 3 tags

            // Calculate the average scores for difficulty, workload, and enjoyment
            const totalScores = filteredReviews.reduce(
              (acc, review) => {
                acc.difficulty += review.difficulty;
                acc.workload += review.workload;
                acc.enjoyment += review.enjoyment;
                return acc;
              },
              { difficulty: 0, workload: 0, enjoyment: 0 }
            );

            const averages = {
              difficulty: Math.floor(totalScores.difficulty / totalReviews),
              workload: Math.floor(totalScores.workload / totalReviews),
              enjoyment: Math.ceil(totalScores.enjoyment / totalReviews),
            };

            setAverages(averages); // Set the average scores            

        } catch (error) {
            console.error('Error fetching reviews:', error);
            setError('Failed to fetch reviews.'); // Optionally set an error message
        }
    };

    fetchReviews();
}, [id, courseId]); // Add id and courseId to dependency array to refetch if it changes

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/courses/${courseId}`);
        
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

    fetchCourseDetails();
  }, [courseId]);

  useEffect(() => {
    const fetchUniversity = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/universities/${id}`);
        setUniversity(response.data);
      } catch (error) {
        console.error('Error fetching university data:', error);
        setError('This university does not exist!');
      }
    };

    fetchUniversity();
  }, [id]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/courses/${courseId}`);
        if (response.data.university_id == id) {
          setCourse(response.data);
        } else {
          setCourse(null)
          setUniversity(null)
        }
      } catch (error) {
        console.error('Error fetching course data:', error);
        setError('This course does not exist!');
      }
    };

    fetchCourse();
  }, [courseId]);

  useEffect(() => {
    // Update the filtered review count whenever the reviews or selected professor changes
    const filteredReviewsCount = selectedProfessor 
      ? reviews.filter(review => review.professor === selectedProfessor).length 
      : reviews.length;

    setFilteredReviewCount(filteredReviewsCount); // Set the count of filtered reviews
  }, [reviews, selectedProfessor]); // Update count based on reviews or selected professor

  const handleBookmark = async () => {
    if (!isAuthenticated) {
      handleFeedback('Log in to use this feature!');
      return;
    }
  
    // Get the token from localStorage
    const token = localStorage.getItem('token');

    console.log(id, courseId)
  
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/bookmark/add`,
        {
          universityId: id, // Use id from useParams
          courseId: courseId, // Use courseId from useParams
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
  
      if (response.status === 200) {
        handleFeedback('Bookmark added!');
      } else if (response.status === 205) {
        handleFeedback('Bookmark removed!');
      } else {
        handleFeedback('Failed to add bookmark.');
      }
    } catch (error) {
      console.error('Error handling bookmark:', error);
      handleFeedback('Error adding bookmark.');
    }
  };

  // Function to handle setting feedback message
  const handleFeedback = (message) => {
    setFeedback(true);
    setFeedbackMessage(message);
  
    // Set a new timeout to hide the message 1.5 seconds after the most recent call
    setTimeout(() => {
      setFeedback(false);
      setFeedbackMessage('');
    }, 1500); // Keep the message visible for 1.5 seconds from the last function call
  };


  if (error) {
    return  <div className="not-found-container">
              <img src={logo} alt="Logo" />
              <p>{error}</p>
            </div>;
  }

  if (!university) {
    return  <div className="not-found-container">
              <img src={logo} alt="Logo" />
              <p>Loading...</p>
            </div>;
  }

  if (!course) {
    return  <div className="not-found-container">
              <img src={logo} alt="Logo" />
              <p>Loading...</p>
            </div>;
  }

  const { formattedName, formattedLocation } = UniversityFormatter({
    name: university.name,
    location: university.location
  });

  const handleProfessorChange = (event) => {
    const professor = event.target.value;
    setSelectedProfessor(professor);
    setVisibleReviews(20); // Reset visible reviews when changing filter
  };

  // Filter reviews based on selected professor
  const filteredReviews = selectedProfessor
    ? reviews.filter(review => review.professor === selectedProfessor)
    : reviews;

  // This returns an empty review page if there are no reviews for the course page
  if (isDesktop && reviews.length === 0) {
    return (
      <div className='university-container'>
        <div className="university-banner">
          <div className="university-banner-text">
            <div className='university-banner-htext' onClick={() => navigate(`/university/${id}`)} style={{ cursor: 'pointer' }}>
              {formattedName}
            </div>
            <div className="university-banner-stext">{formattedLocation}</div>
          </div>
        </div>

        <div className="course-header-container">
          <div className="course-header-left">
            <div className="course-name-header">
              {reviewCC}{reviewCN}
              <img src={require('../css/images/bookmark.png')} alt="Bookmark" onClick={handleBookmark} style={{ cursor: 'pointer' }}/>
            </div>
            <div className="course-name-subheader">
              {formattedName}
            </div>
          </div>
        </div>

        <div className="no-reviews-container">
          <div className="no-reviews-header"> No reviews have been posted for this course yet.</div>
          <div className="no-reviews-subheader"> Be the first to share your experience!</div>
        </div>

        <div className='course-no-reviews-button-container'>
          <button className="course-button" onClick={() => {navigate(`/review-form/${id}/${courseId}`); window.scrollTo(0, 0) }}>
              <div className='course-button-text'>
                <img src={require('../css/images/pencil.png')} alt="Pencil" />
                Post a Review
              </div>
          </button>
        </div>

      </div>
    );
  }

  if (!isDesktop && reviews.length === 0) {
    return (
      <div className='university-container-m'>
        <div className="university-banner-m">
          <div className="university-banner-text-m">
            <div className='university-banner-htext-m' onClick={() => navigate(`/university/${id}`)} style={{ cursor: 'pointer' }}>
              {formattedName}
            </div>
            <div className="university-banner-stext-m">{formattedLocation}</div>
          </div>
        </div>

        <div className="course-header-container-m">
          <div className="course-header-left-m">
            <div className="course-name-header-m">
              {reviewCC}{reviewCN}
              <img src={require('../css/images/bookmark.png')} alt="Bookmark" onClick={handleBookmark} style={{ cursor: 'pointer' }}/>
            </div>
            <div className="course-name-subheader">
              {formattedName}
            </div>
          </div>
        </div>

        <div className="no-reviews-container-m">
          <div className="no-reviews-header-m"> No reviews have been posted for <br></br>this course yet.</div>
          <div className="no-reviews-subheader-m"> Be the first to share your experience!</div>
        </div>

        <div className='course-no-reviews-button-container-m'>
          <button className="course-button-m" onClick={() => {navigate(`/review-form/${id}/${courseId}`); window.scrollTo(0, 0) }}>
              <div className='course-button-text-m'>
                <img src={require('../css/images/pencil.png')} alt="Pencil" />
                Post a Review
              </div>
          </button>
        </div>

      </div>
    );
  }

    // set dyanmic styles baesd on difficulty rating

    if (averages.difficulty > 0 && averages.difficulty <= 2) {
        difScoreColor = 'score-subheader-green';
        difScoreText = 'BASIC';
    } else if (averages.difficulty > 2 && averages.difficulty <= 4) {
        difScoreColor = 'score-subheader-green';
        difScoreText = 'INTERMEDIATE';
    } else if (averages.difficulty > 4 && averages.difficulty <= 7) {
        if (averages.difficulty <= 5) {
            difScoreColor = 'score-subheader-green';
        } else {
            difScoreColor = 'score-subheader-gray';
        }
        difScoreText = 'MODERATE';
    } else if (averages.difficulty > 7 && averages.difficulty <= 8) {
        difScoreColor = 'score-subheader-red';
        difScoreText = 'CHALLENGING';
    } else if (averages.difficulty > 8 && averages.difficulty <= 10) {
        difScoreColor = 'score-subheader-red';
        difScoreText = 'INTENSE';
    }

    // set dyanmic styles based on workload rating

    if (averages.workload > 0 && averages.workload <= 2) {
      worScoreColor = 'score-subheader-green';
      worScoreText = 'MINIMAL';
  } else if (averages.workload > 2 && averages.workload <= 4) {
      worScoreColor = 'score-subheader-green';
      worScoreText = 'LIGHT';
  } else if (averages.workload > 4 && averages.workload <= 7) {
      if (averages.workload <= 5) {
          worScoreColor = 'score-subheader-green';
      } else {
          worScoreColor = 'score-subheader-gray';
      }
      worScoreText = 'MANAGEABLE';
  } else if (averages.workload > 7 && averages.workload <= 8) {
      worScoreColor = 'score-subheader-red';
      worScoreText = 'HEAVY';
  } else if (averages.workload > 8 && averages.workload <= 10) {
      worScoreColor = 'score-subheader-red';
      worScoreText = 'INTENSE';
  }

    // set dyanmic styles based on enjoyment rating

    if (averages.enjoyment > 0 && averages.enjoyment <= 2) {
      enjScoreColor = 'score-subheader-red';
      enjScoreText = 'DID NOT';
  } else if (averages.enjoyment > 2 && averages.enjoyment <= 4) {
      enjScoreColor = 'score-subheader-red';
      enjScoreText = 'SOMEWHAT';
  } else if (averages.enjoyment > 4 && averages.enjoyment <= 6) {
      if (averages.enjoyment <= 5) {
        enjScoreColor = 'score-subheader-gray';
      } else {
        enjScoreColor = 'score-subheader-green';
      }
      enjScoreText = 'SATISFIED';
  } else if (averages.enjoyment > 6 && averages.enjoyment <= 8) {
      enjScoreColor = 'score-subheader-green';
      enjScoreText = 'ENJOYED';
  } else if (averages.enjoyment > 8 && averages.enjoyment <= 10) {
      enjScoreColor = 'score-subheader-green';
      enjScoreText = 'LOVED';
  }

  if (isDesktop) {
    return (
      <div className='university-container'>
        <div className="university-banner">
            <div className="university-banner-text">
              <div className='university-banner-htext' onClick={() => navigate(`/university/${id}`)} style={{ cursor: 'pointer' }}>
                {formattedName}
              </div>
                <div className='university-banner-stext'>{formattedLocation}</div>
            </div>
        </div>

        <div className='course-header-container'>

          <div className='course-header-left'>
            <div className='course-name-header'>
              {reviewCC}{reviewCN}
              <div className="tooltip">
                <img
                  src={require('../css/images/bookmark.png')}
                  alt="Bookmark"
                  onClick={handleBookmark}
                  style={{ cursor: 'pointer' }}
                />
                <span className="tooltip-text">Add to Bookmarks</span> {/* Tooltip text */}
              </div>
            </div>
            <div className='course-name-subheader' onClick={() => navigate(`/university/${id}`)} style={{ cursor: 'pointer' }}>
              {formattedName}
            </div>
          </div>

          <div className='course-header-right'>
              <div className='percentage-header'>
                {percentage}%
              </div>
              <div className='percentage-subheader'>
                of students said they would recommend taking this class
              </div>
          </div>

        </div>

        <div className="gauges-wrapper">
            <div className="gauge-container">
              {<Chart score={averages.difficulty}/>}
              <div className="gauge-label">
                Difficulty Score
                <div style={{ cursor: 'pointer' }}>
                  <div className='tooltip-score'>
                    <img src={require('../css/images/info.png')} alt="Difficulty Info" />
                    <span className="tooltip-text-score">This score reflects how challenging students found the course material was to grasp.</span>
                  </div>
                </div>
              </div>
              <div className={difScoreColor}>{difScoreText}</div>
            </div>
            <div className="gauge-container">
              {<Chart score={averages.workload}/>}
              <div className="gauge-label">
                Workload Score
                <div style={{ cursor: 'pointer' }}>
                  <div className='tooltip-score'>
                    <img src={require('../css/images/info.png')} alt="Workload Info" />
                    <span className="tooltip-text-score">This score shows how much time and effort students felt they needed to put into the class.</span>
                  </div>
                </div>
              </div>
              <div className={worScoreColor}>{worScoreText}</div>
            </div>
            <div className="gauge-container">
              {<Chart score={averages.enjoyment}/>}
              <div className="gauge-label">
                Enjoyment Score
                <div style={{ cursor: 'pointer' }}>
                  <div className='tooltip-score'>
                    <img src={require('../css/images/info.png')} alt="Enjoyment Info" />
                    <span className="tooltip-text-score">This score reflects how enjoyable and fulfilling the students found the course overall.</span>
                  </div>
                </div>
              </div>
              <div className={enjScoreColor}>{enjScoreText}</div>
            </div>
        </div>

        <div className="popular-tags-container">
              <span className="popular-tags-header">Popular Tags:</span>
              <div className="tag-container">
                {topTags.map((tag, index) => (
                  <Tag 
                    key={index} 
                    name={tag} 
                    isClickable={false} 
                    isSelected={false}
                    onClick={() => {}}
                  />
                ))}
              </div>
        </div>

        <div className='course-reviews-header-container'>

          <div className='course-reviews-header-left'>
            <img src={require('../css/images/logo.png')} alt="Logo"/>
          </div>

          <div className='course-reviews-header-right'>
            reviews from students at <b>{formattedName}&nbsp;</b>for<b> all courses</b>:
          </div>

        </div>

        <div className='course-button-container'>
            <div className='course-button-container-left'>
              <button className="course-button" onClick={() => {navigate(`/review-form/${id}/${courseId}`); window.scrollTo(0, 0) }}>
                <div className='course-button-text'>
                  <img src={require('../css/images/pencil.png')} alt="Icon 1"/>
                  Post Review
                </div>
              </button>
            </div>

            <div className='course-button-container-right'>
              <button
                className="course-button"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <div className='course-button-text'>
                  <img src={require('../css/images/filter.png')} alt="Icon 1" />
                  Filter Results
                </div>
              </button>

              {showDropdown && (
                <div className="filter-dropdown">
                  <label>Filter by Professor:</label>
                  <select
                    value={selectedProfessor}
                    onChange={handleProfessorChange}
                  >
                    <option value="">All Professors</option>
                    {uniqueProfessors.map((professor, index) => (
                      <option key={index} value={professor}>
                        {professor}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>

        <div className='reviews-container'>
          {/* Display reviews limited to visibleReviews */}
          {filteredReviews.slice(0, visibleReviews).map((review, index) => (
              <Review
                  key={index}
                  id={review.id}
                  professor={review.professor}
                  code={review.cc}
                  number={review.cn}
                  difficulty={review.difficulty}
                  workload={review.workload}
                  enjoyment={review.enjoyment}
                  recommend={review.recommended}
                  text={review.review}
                  tags={review.tags}
                  timestamp={review.timestamp}
              />
          ))}
        </div>

        {/* Load More Ratings Button */}
        {visibleReviews < filteredReviewCount && filteredReviewCount > 20 && ( // Ensure count is more than 20
          <div className="load-more-container">
            <button className="load-more-button" onClick={() => setVisibleReviews(prev => prev + 20)}>
              Load More Ratings
            </button>
          </div>
        )}

        {/* Popup Message */}
        {feedback && (
          <div className="popup-message">
            {feedbackMessage}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className='university-container-m'>
      <div className="university-banner-m">
          <div className="university-banner-text-m">
            <div className='university-banner-htext-m' onClick={() => navigate(`/university/${id}`)} style={{ cursor: 'pointer' }}>
              {formattedName}
            </div>
              <div className='university-banner-stext-m'>{formattedLocation}</div>
          </div>
      </div>

      <div className='course-header-container-m'>

        <div className='course-header-left-m'>
          <div className={`course-name-header-m ${reviewCC.length + reviewCN.length >= 8 ? 'small-font-m' : ''}`}>
            {reviewCC}{reviewCN}
            <div className="tooltip-m">
              <img
                src={require('../css/images/bookmark.png')}
                alt="Bookmark"
                onClick={handleBookmark}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
          <div className='course-name-subheader-m' onClick={() => navigate(`/university/${id}`)} style={{ cursor: 'pointer' }}>
            {formattedName}
          </div>
        </div>

        <div className='course-header-right-m'>
            <div className='percentage-header-m'>
              {percentage}%
            </div>
            <div className='percentage-subheader-m'>
              of students said they would recommend taking this class
            </div>
        </div>

      </div>

      <div className="metrics-container-m">
          <div className="chart1-m">
            <div className="gauge-container-m">
              {<Chart score={averages.difficulty}/>}
              <div className="gauge-label-m">
                Difficulty Score
                <div style={{ cursor: 'pointer' }}>
                  <div className='tooltip-score-m'>
                    <img src={require('../css/images/info.png')} alt="Difficulty Info" />
                    <span className="tooltip-text-score-m">This score reflects how challenging students found the course material was to grasp.</span>
                  </div>
                </div>
              </div>
              <div className={difScoreColor}>{difScoreText}</div>
            </div>
          </div>

          <div className="chart2-m">
            <div className="gauge-container-m">
              {<Chart score={averages.workload}/>}
              <div className="gauge-label-m">
                Workload Score
                <div style={{ cursor: 'pointer' }}>
                  <div className='tooltip-score-m'>
                    <img src={require('../css/images/info.png')} alt="Workload Info" />
                    <span className="tooltip-text-score-m">This score shows how much time and effort students felt they needed to put into the class.</span>
                  </div>
                </div>
              </div>
              <div className={worScoreColor}>{worScoreText}</div>
            </div>
          </div>

          <div className="chart3-m">
            <div className="gauge-container-m">
              {<Chart score={averages.enjoyment}/>}
              <div className="gauge-label-m">
                Enjoyment Score
                <div style={{ cursor: 'pointer' }}>
                  <div className='tooltip-score-m'>
                    <img src={require('../css/images/info.png')} alt="Enjoyment Info" />
                    <span className="tooltip-text-score-m">This score reflects how enjoyable and fulfilling the students found the course overall.</span>
                  </div>
                </div>
              </div>
              <div className={enjScoreColor}>{enjScoreText}</div>
            </div>
          </div>

          <div className="metrics-popular-tags-m">
            <div className="popular-tags-container-m">
              <span className="popular-tags-header-m">Popular Tags:</span>
              <div className="tag-container-m">
                {topTags.map((tag, index) => (
                  <Tag 
                    key={index} 
                    name={tag} 
                    isClickable={false} 
                    isSelected={false}
                    onClick={() => {}}
                    isSmall={true}
                  />
                ))}
              </div>
            </div>
          </div>
      </div>

      <div className="divider-line-m"></div>

      <div className='course-reviews-header-container-m'>

        <div className='course-reviews-header-left-m'>
          <img src={require('../css/images/logo.png')} alt="Logo"/>
        </div>
        
        <div className='course-reviews-header-right-m'>
          reviews for<b>&nbsp;{reviewCC}{reviewCN}&nbsp;</b>at<b> {formattedName}</b>:
        </div>

      </div>

      <div className='course-button-container-m'>
          <div className='course-button-container-left-m'>
            <button className="course-button-m" onClick={() => {navigate(`/review-form/${id}/${courseId}`); window.scrollTo(0, 0) }}>
              <div className='course-button-text-m'>
                <img src={require('../css/images/pencil.png')} alt="Icon 1"/>
                Post Review
              </div>
            </button>
          </div>

          <div className='course-button-container-right-m'>
            <button
              className="course-button-m"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <div className='course-button-text-m'>
                <img src={require('../css/images/filter.png')} alt="Icon 1" />
                Filter Results
              </div>
            </button>

            {showDropdown && (
              <div className="filter-dropdown-m">
                <label>Filter by Professor:</label>
                <select
                  value={selectedProfessor}
                  onChange={handleProfessorChange}
                >
                  <option value="">All Professors</option>
                  {uniqueProfessors.map((professor, index) => (
                    <option key={index} value={professor}>
                      {professor}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

      <div className='reviews-container-m'>
        {/* Display reviews limited to visibleReviews */}
        {filteredReviews.slice(0, visibleReviews).map((review, index) => (
            <Review
                key={index}
                id={review.id}
                professor={review.professor}
                code={review.cc}
                number={review.cn}
                difficulty={review.difficulty}
                workload={review.workload}
                enjoyment={review.enjoyment}
                recommend={review.recommended}
                text={review.review}
                tags={review.tags}
                timestamp={review.timestamp}
            />
        ))}
      </div>

      {/* Load More Ratings Button */}
      {visibleReviews < filteredReviewCount && filteredReviewCount > 20 && ( // Ensure count is more than 20
        <div className="load-more-container-m">
          <button className="load-more-button-m" onClick={() => setVisibleReviews(prev => prev + 20)}>
            Load More Ratings
          </button>
        </div>
      )}

      {/* Popup Message */}
      {feedback && (
        <div className="popup-message-m">
          {feedbackMessage}
        </div>
      )}
    </div>
  );

};

export default CoursePage;
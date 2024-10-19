import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import UniversityFormatter from '../components/UniversityFormatter.js';
import Review from '../components/Review.js';
import '../css/UniversityPage.css';
import '../css/mobile/UniversityPageMobile.css';
import logo from '../css/images/logo.png';

const UniversityPage = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [university, setUniversity] = useState(null);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 475);

  const [showFilter, setShowFilter] = useState(false);
  const [sortOption, setSortOption] = useState('noFilter'); // State for sorting option
  
  const [displayLimit, setDisplayLimit] = useState(20); // Limit for how many reviews to show at a time
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const [feedback, setFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('')

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
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/reviews`);
        const filteredReviews = response.data
          .filter(review => review.university_id == id)
          .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  
        setReviews(filteredReviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setError('Failed to fetch reviews.');
      }
    };
  
    fetchReviews();
  }, [id]);

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

  const validateAndExtract = (input) => {
    // Match 2-5 letters for the course code, followed by 2-5 digits for the course number
    const validPattern = /^(?<code>[A-Z]{2,5})(?<number>[0-9]{2,5})$/;
    const match = input.toUpperCase().trim().match(validPattern);
    
    if (!match) {
        handleFeedback('Please enter a valid course code and number. To learn how to format a course name, look for "Searching for a Class & Formatting a Class Name" on the About page.');
        return null;
    }

    const { code, number } = match.groups;
    return { code, number };
};

  // Function to sort reviews based on enjoyment rating
  const sortedReviews = () => {
    if (sortOption === 'noFilter') {
      return reviews; // Return original reviews if no filter is selected
    }

    return [...reviews].sort((a, b) => {
      return sortOption === 'highest' 
        ? b.enjoyment - a.enjoyment 
        : a.enjoyment - b.enjoyment;
    });
  };

  // Function to load more reviews
  const loadMoreReviews = () => {
    setDisplayLimit(prevLimit => prevLimit + 20); // Increase the display limit by 20
  };

  const getUniqueCourses = () => {
    const courseSet = new Set();
    reviews.forEach(review => {
      const course = `${review.cc}${review.cn}`;
      courseSet.add(course);
    });
  
    // Convert set to array and sort by course number (cn)
    return Array.from(courseSet).sort((a, b) => {
      const courseNumberA = parseInt(a.match(/\d+$/)[0], 10); // Extract and convert cn to a number
      const courseNumberB = parseInt(b.match(/\d+$/)[0], 10); // Same for course B
      return courseNumberA - courseNumberB; // Sort numerically by cn
    });
  };

  // Function to handle course selection from dropdown
  const handleCourseSelection = async (course) => {
    setInput(course); // Update the input field with the selected course for display purposes
    
    const result = validateAndExtract(course); // Pass the course directly to validation
    if (result) {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/courses`, {
          params: { university_id: id, code: result.code, number: result.number },
        });
  
        if (response.data) {
          // Navigate to the correct course page
          navigate(`/university/${response.data.university_id}/${response.data.id}`);
          setInput(''); // Clear input field
        } else {
          // If course does not exist, create it
          const createResponse = await axios.post(`${process.env.REACT_APP_API_URL}/courses`, {
            university_id: id,
            code: result.code,
            number: result.number,
          });
  
          if (createResponse.status === 201) {
            navigate(`/university/${id}/${createResponse.data}`);
            setInput('');
          } else {
            handleFeedback("Failed to create course.");
            setInput('');
          }
        }
      } catch (err) {
        console.error('Error fetching course:', err);
        setInput('');
        handleFeedback("An error occurred while fetching the course.");
      }
    }
  };

  // Function to handle user input and filter the courses
  const handleInputChange = (e) => {
    const userInput = e.target.value.toUpperCase();
    setInput(userInput);

    if (userInput.length > 0) {
      const uniqueCourses = getUniqueCourses();
      const filtered = uniqueCourses.filter(course =>
        course.startsWith(userInput)
      );
      setFilteredCourses(filtered);
      setShowDropdown(filtered.length > 0);
    } else {
      setShowDropdown(false);
    }
  };

  // Function to handle setting feedback error message
  const handleFeedback = (error) => {
    setFeedback(true);
    setFeedbackMessage(error);
    setTimeout(() => {
      setFeedback(false);
      setFeedbackMessage('');
    }, 4000); // Hide after 4 seconds
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

  const { formattedName, formattedLocation } = UniversityFormatter({
    name: university.name,
    location: university.location
  });

  // Choose which reviews to display (filtered or all) and limit the number
  const reviewsToDisplay = sortedReviews().slice(0, displayLimit);

  // This returns an empty review page if there are no reviews for the course page
  if (reviews.length === 0) {
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

        <div className="university-no-reviews-container">
          <img src={require('../css/images/logo.png')} alt="Icon 1"/> 
          <div className="university-no-reviews-header"> No reviews have been posted for this school yet.</div>
          <div className="university-no-reviews-subheader"> Be the first to share your experience!</div>
        </div>

        <div className='university-no-reviews-button-container'>
          <button className="course-button" onClick={() => {navigate(`/review-form/${id}`); window.scrollTo(0, 0) }}>
              <div className='course-button-text'>
                <img src={require('../css/images/pencil.png')} alt="Pencil" />
                Post a Review
              </div>
          </button>
        </div>

      </div>
    );
  }

  if (isDesktop) {
    return (
      <div className='university-container'>
        <div className="university-banner">
            <div className="university-banner-text">
                <div className='university-banner-htext'>{formattedName}</div>
                <div className='university-banner-stext'>{formattedLocation}</div>
            </div>
        </div>
            {/* Search bar with autofill */}
            <div className='class-search-container'>
            <input
              type="text"
              placeholder="Find a class (e.g., CSE116 or MATH341)"
              className="class-search-bar"
              value={input}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleCourseSelection(input);
                }
              }}
            />
            {showDropdown && (
              <div className="course-dropdown-container">
                <div className="course-white-space"></div>
                <ul className='course-dropdown'>
                {filteredCourses.map((course, index) => (
                  <li
                    key={index}
                    className="course-dropdown-item"
                    onClick={() => {
                      handleCourseSelection(course);
                    }}
                  >
                    <div className="course-dropdown-name">
                      <img src={require('../css/images/cap.png')} alt="Cap"/> 
                      {course}
                    </div>
                    <div className="course-dropdown-location">{formattedName}</div>

                  </li>
                ))}
                </ul>
              </div>
            )}
          </div>

          {/* Popup Message */}
          {feedback && (
            <div className="popup-message">
              {feedbackMessage}
            </div>
          )}

        <div className='university-reviews-header'>
          <img src={require('../css/images/logo.png')} alt="Logo"/> 
            reviews from students at <b>&nbsp;{formattedName}&nbsp;</b>for&nbsp;<b> all courses</b>:
        </div>

        <div className='university-button-container'>

          <div className='university-button-container-left'>
            <button className="university-button" onClick={() => {navigate(`/review-form/${id}`); window.scrollTo(0, 0) }}>
              <div className='university-button-text'>
                <img src={require('../css/images/pencil.png')} alt="Pencil"/>
                Post Review
              </div>
            </button>
          </div>

          <div className='university-button-container-right'>
            <button
              className="university-button"
              onClick={() => setShowFilter(!showFilter)}
            >
              <div className='university-button-text'>
                <img src={require('../css/images/filter.png')} alt="Filter" /> 
                Filter Results
              </div>
            </button>

            {showFilter && (
              <div className="university-filter-dropdown">
                <label>Sort by Enjoyment:</label>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="noFilter">No filter selected</option>
                  <option value="highest">Highest First</option>
                  <option value="lowest">Lowest First</option>
                </select>
              </div>
            )}
          </div>

        </div>

        <div className='reviews-container'>
          {reviewsToDisplay.map((review, index) => (
            <Review
              key={index}
              id={review.id}
              university_id={review.university_id}
              course_id={review.course_id}
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

        {/* Show Load More button if there are more reviews to load */}
        {reviewsToDisplay.length < reviews.length && (
          <div className="load-more-container">
            <button className="load-more-button" onClick={loadMoreReviews}>
              See More Reviews
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className='university-container-m'>
      <div className="university-banner-m">
          <div className="university-banner-text-m">
              <div className='university-banner-htext-m'>{formattedName}</div>
              <div className='university-banner-stext-m'>{formattedLocation}</div>
          </div>
      </div>
          {/* Search bar with autofill */}
          <div className='class-search-container-m'>
          <input
            type="text"
            placeholder="Find a class (e.g., MATH341)"
            className="class-search-bar-m"
            value={input}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCourseSelection(input);
              }
            }}
          />
          {showDropdown && (
            <div className="course-dropdown-container-m">
              <div className="course-white-space-m"></div>
              <ul className='course-dropdown-m'>
              {filteredCourses.map((course, index) => (
                <li
                  key={index}
                  className="course-dropdown-item-m"
                  onClick={() => {
                    handleCourseSelection(course);
                  }}
                >
                  <div className="course-dropdown-name-m">
                    <img src={require('../css/images/cap.png')} alt="Cap"/> 
                    {course}
                  </div>
                  <div className="course-dropdown-location-m">{formattedName}</div>

                </li>
              ))}
              </ul>
            </div>
          )}
        </div>

        {/* Popup Message */}
        {feedback && (
          <div className="popup-message-m">
            {feedbackMessage}
          </div>
        )}

      <div className='university-reviews-header-container-m'>

        <div className='university-reviews-header-left-m'>
          <img src={require('../css/images/logo.png')} alt="Logo"/>
        </div>
        
        <div className='university-reviews-header-right-m'>
          reviews from students at <b>{formattedName}&nbsp;</b>for<b> all courses</b>:
        </div>

      </div>

      <div className='university-button-container-m'>

        <div className='university-button-container-left-m'>
          <button className="university-button-m" onClick={() => {navigate(`/review-form/${id}`); window.scrollTo(0, 0) }}>
            <div className='university-button-text-m'>
              <img src={require('../css/images/pencil.png')} alt="Pencil"/>
              Post Review
            </div>
          </button>
        </div>

        <div className='university-button-container-right-m'>
          <button
            className="university-button-m"
            onClick={() => setShowFilter(!showFilter)}
          >
            <div className='university-button-text-m'>
              <img src={require('../css/images/filter.png')} alt="Filter" /> 
              Filter Results
            </div>
          </button>

          {showFilter && (
            <div className="university-filter-dropdown-m">
              <label>Sort by Enjoyment:</label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="noFilter">No filter selected</option>
                <option value="highest">Highest First</option>
                <option value="lowest">Lowest First</option>
              </select>
            </div>
          )}
        </div>

      </div>

      <div className='reviews-container-m'>
        {reviewsToDisplay.map((review, index) => (
          <Review
            key={index}
            id={review.id}
            university_id={review.university_id}
            course_id={review.course_id}
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

      {/* Show Load More button if there are more reviews to load */}
      {reviewsToDisplay.length < reviews.length && (
        <div className="load-more-container-m">
          <button className="load-more-button-m" onClick={loadMoreReviews}>
            See More Reviews
          </button>
        </div>
      )}
    </div>
  );

};

export default UniversityPage;
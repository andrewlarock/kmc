import React, { useState, useEffect } from 'react';
import universities from '../universities';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Home.css';
import '../css/mobile/HomeMobile.css';

// Starting off, these are helper functions for formatting each university name and location.
// Turn this functionality into a reusable component for other pages in the future

const exceptions = ["at", "of"]; // Keep these lower case
const acronyms = ["SUNY", "CUNY", "A&M", "A&T"]; // Keep these capitalized

const capitalizeWord = (word, index) => {
    // Keep acronyms fully capitalized
  if (acronyms.includes(word.toUpperCase())) {
    return word.toUpperCase();
  }
  // Capitalize the first letter unless it's an exception and not the first word
  if (exceptions.includes(word) && index !== 0) {
    return word;
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
};

const formatUniversityName = (name) => {
  // First, apply the normal title case logic
  let formattedName = name
    .toLowerCase()
    .split(' ')
    .map((word, index) => capitalizeWord(word, index))
    .join(' ');

  // Then capitalize the first letter after any dash while keeping the dash
  formattedName = formattedName.replace(/-([a-z])/g, (match, p1) => `-${p1.toUpperCase()}`);

  return formattedName;
};

const formatLocation = (location) => {
  const [city, state] = location.toLowerCase().split(', ');

  // Apply the same title case logic to the city, but preserve state as uppercase
  let formattedCity = city
    .split(' ')
    .map((word, index) => capitalizeWord(word, index))
    .join(' ');

  // Capitalize the first letter after any dash in the city name
  formattedCity = formattedCity.replace(/-([a-z])/g, (match, p1) => `-${p1.toUpperCase()}`);

  return `${formattedCity}, ${state.toUpperCase()}`;
};

const getFontSize = (name) => {
  return name.length > 60 ? '0.8rem' : '1rem'; // Adjust sizes as needed
};

const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 475);
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

  // Handle input change for university search input
  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);

    // Filter universities based on user input
    if (input.length > 0) {
      const filtered = universities.filter((university) =>
        university.name.toLowerCase().includes(input.toLowerCase())
      )
      .slice(0, 50) // Slice early to limit the size for efficiency
      .sort((a, b) => a.name.length - b.name.length); // Sort the sliced array

      setFilteredUniversities(filtered);
      setDropdownVisible(filtered.length > 0); // Show dropdown if filtered universities exist
    } else {
      setFilteredUniversities([]);
      setDropdownVisible(false); // Hide dropdown if input is empty
    }
  };

  // Handle selecting a university
  const handleSelectUniversity = async (university) => {
    setSearchInput('');
    setFilteredUniversities([]);
    setDropdownVisible(false); // Hide dropdown after selection

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/universities`, {
        name: university.name,
        location: university.location
      });
  
      const universityId = response.data.id;
      navigate(`/university/${universityId}`);
    } catch (error) {
      console.error('Error handling university selection:', error);
    }
  };

  // Conditional rendering based on the screen size (isDesktop)
  if (isDesktop) {
    return (
      <div className="home-container">
        <div className="content-container">
          <div className="text-container">
            <div className="header-text">
              Find the Perfect Courses for You.
            </div>
            <div className="subheader-text">
              Rate your college courses, share your experiences, and see what other students are saying—all anonymously.&nbsp;
              Create a schedule that suits your needs based on real reviews.
            </div>
          </div>
          <div className="search-container">
          <input
              type="text"
              placeholder="Find your school"
              className={`search-bar ${dropdownVisible ? 'no-shadow' : ''}`} // Conditional class for box shadow
              value={searchInput}
              onChange={handleInputChange}
            />

            {/* Dropdown container */}
            {filteredUniversities.length > 0 && (
              <div className="dropdown-container">
                <div className="white-space"></div>
                <ul className="dropdown">
                  {filteredUniversities.map((university, index) => (
                    <li
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleSelectUniversity(university)}
                    >
                      <div
                        className="university-name"
                        style={{ fontSize: getFontSize(university.name) }}
                      >
                        {formatUniversityName(university.name)}
                      </div>
                      <div className="university-location">{formatLocation(university.location)}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
        </div>
      </div>
    );
  }

  // Mobile Layout
  return (
    <div className="home-container-m">
      <div className="text-container-m">
        <div className="header-text-m">
          Find the Perfect Courses for You.
        </div>
        <div className="subheader-text-m">
          Rate your college courses, share your experiences, and see what other students are saying—all anonymously.&nbsp;
          <span className="linebreak-target-m">Create a schedule that suits your needs based on real reviews.</span>
        </div>
        <div className="search-container-m">
        <input
            type="text"
            placeholder="Find your school"
            className={`search-bar-m ${dropdownVisible ? 'no-shadow' : ''}`} // Conditional class for box shadow
            value={searchInput}
            onChange={handleInputChange}
          />

          {/* Dropdown container */}
          {filteredUniversities.length > 0 && (
            <div className="dropdown-container-m">
              <div className="white-space-m"></div>
              <ul className="dropdown-m">
                {filteredUniversities.map((university, index) => (
                  <li
                    key={index}
                    className="dropdown-item-m"
                    onClick={() => handleSelectUniversity(university)}
                  >
                    <div
                      className="university-name-m"
                      style={{ fontSize: getFontSize(university.name) }}
                    >
                      {formatUniversityName(university.name)}
                    </div>
                    <div className="university-location-m">{formatLocation(university.location)}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
      </div>
    </div>
  );

};

export default Home;
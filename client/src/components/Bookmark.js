import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Bookmark.css';

const Bookmark = ({ university_id, course_id, fetchBookmarks}) => {

    const [university, setUniversity] = useState(null);
    const [CC, setCC] = useState(null);
    const [CN, setCN] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUniversity = async () => {
          try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/universities/${university_id}`);
            setUniversity(response.data.name);
          } catch (error) {
            console.error('Error fetching university data:', error);
          }
        };
    
        fetchUniversity();
      }, [university_id]);
    
    useEffect(() => {
        const fetchCourseDetails = async () => {
            try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/courses/${course_id}`); // Use the correct backend URL
            
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
    }, [course_id]);

    const handleBookmark = async (event) => {
      event.stopPropagation();
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/bookmark/add`,
          {
            universityId: university_id,
            courseId: course_id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`, // Send token in headers
            },
          }
        );
    
        if (response.status === 205) {
          fetchBookmarks(); // Re-fetch bookmarks from parent component
        }
      } catch (error) {
        console.error('Error handling bookmark:', error);
      }
    };

    return (
        <div className="bookmark-container">
            <div className="bookmark-info">
                <div className="bookmark-course" onClick={() => navigate(`/university/${university_id}/${course_id}`)} style={{ cursor: 'pointer' }}>
                    {CC}{CN}
                    <img
                        src={require('../css/images/remove.png')}
                        alt="Remove"
                        onClick={handleBookmark}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <div className="bookmark-university" onClick={() => navigate(`/university/${university_id}`)} style={{ cursor: 'pointer' }}>
                    {university}
                </div>
            </div>
        </div>
    );
};

export default Bookmark;
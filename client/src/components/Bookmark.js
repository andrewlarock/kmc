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
            const response = await axios.get(`http://localhost:5000/universities/${university_id}`);
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
            const response = await fetch(`http://localhost:5000/courses/${course_id}`); // Use the correct backend URL
            
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
        event.stopPropagation(); // Prevent the event from bubbling up
        try {
          const response = await axios.post('http://localhost:5000/bookmark/add', {
            universityId: university_id,
            courseId: course_id,
          }, {
            withCredentials: true
          });

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
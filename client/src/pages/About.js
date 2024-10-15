import React, { useState, useEffect } from 'react';
import '../css/About.css';
import '../css/mobile/AboutMobile.css';

const About = () => {
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

  if (isDesktop) {
    return (
      <div className='about-container'>
        <div className="about-banner">
          <div className="about-banner-text">
            <div className='about-banner-htext'>About Our Platform</div>
          </div>
        </div>
        <div className='about-info-container'>
          <div className='about-info-htext'>
            <img src={require('../css/images/logo.png')} alt="Logo"/> 
          </div>
          <div className='about-info-stext' style={{ marginBottom: '6rem' }}>
              At KickMyCourse, our mission is simple: to empower students with transparent, honest, and valuable feedback about the courses at their university. We believe that knowledge is power, and by sharing experiences and ratings, students can better plan their academic path and succeed in their studies. By fostering a supportive community of shared anonymous insights, we aim to make course selection less stressful and more informed. <br></br><br></br><b><u>FAQ's:</u></b>
              <br /><br />
              <a href="#search-school">Searching for Your School</a>
              <span> &bull; </span>
              <a href="#search-class">Searching for a Class & Formatting a Class Name</a>
              <span> &bull; </span>
              <a href="#review-course">Reviewing a Course</a>
              <span> &bull; </span>
              <a href="#average-metrics">Understanding Average Course Metrics</a>
              <span> &bull; </span>
              <a href="#bookmark-course">Bookmarking a Course</a>
          </div>
        </div>

        <div className='about-subbanner' id="search-school">
          <div className='about-info-htext'>
            Searching for your School
          </div>
        </div>

        <div className='about-info-container'>
          <div className="about-search-container">
            <input
                type="text"
                placeholder="Find your school"
                className='about-search-bar'
                readOnly
            />
          </div>
          <div className='about-info-stext' style={{ textAlign: 'left' }}>
            Finding your university is easy! When you arrive on the homepage, you'll be greeted with this "Find Your School" search bar. Simply start typing the name of your school, and relevant matches will appear as you type. Once you find your university in the dropdown, click on it, and you’ll be directed to the page dedicated to your school’s course reviews.
          </div>
        </div>

        <div className='about-subbanner' id="search-class">
          <div className='about-info-htext'>
            Searching for a Class & Formatting a Class Name
          </div>
        </div>

        <div className='about-info-container'>
          <div className="about-search-container">
            <input
                type="text"
                placeholder="Find a class (e.g., CSE116 or MATH341)"
                className='about-search-bar'
                readOnly
            />
          </div>
          <div className='about-info-stext' style={{ textAlign: 'left' }}>
            After landing on your school page, you can search for a specific course within your school’s page. Use the search bar that says “Find a class” and start typing in the course code and number. If the course has already been reviewed, it will autofill as you type. If it’s not yet reviewed, you can manually enter it by pressing enter after typing it. Here's a guide on how to properly format the course information:
            <ul>
              <li><strong>Course Code:</strong> &nbsp;A short combination of 2-4 letters (usually representing the department)</li>
              <li><strong>Course Number:</strong> &nbsp;A 2-4 digit number specific to the class</li>
            </ul>
            Each university may structure their course names slightly differently. For example, valid formats might look like this:
            <ul>
              <li><strong>ENG101</strong> &nbsp;for an English 101 class. The code is ENG and the number is 101.</li>
              <li><strong>MATH2010</strong> &nbsp;for a higher-level mathematics course. The code is MATH and the number is 2010.</li>
              <li><strong>CS50</strong> &nbsp;for a higher-level mathematics course. The code is CS and the number is 50.</li>
            </ul>
            If you're unsure of the exact course code and number, refer to your university’s course catalog for accurate information:
          </div>
          <img src={require('../css/images/catalog.png')} alt="Catalog" className="catalog-image" />
          <div className='about-info-stext' style={{ textAlign: 'left' }}>
            When searching for a specific class, it’s important to only use the <b>course code</b> and <b>course number</b>. Some schools may include additional information after the course number, such as "LR," "LAB," or other designations, like in the example above.
            In these cases, make sure to leave out the extra designations (like "LR" or "LAB") when typing the course into the search bar. For example, to search for PHY 107LR, you would simply enter PHY 107. The only required format is the course code (e.g., PHY) followed by the course number (e.g., 107). If the class is a lab-designated class, add the "Lab Required" tag to your review to help other students identify that the course involves lab work.
          </div>
        </div>

        <div className='about-subbanner' id="review-course">
          <div className='about-info-htext'>
            How to Review a Course
          </div>
        </div>

        <div className='about-info-container'>
          <button className="info-course-button">
            <div className='info-course-button-text'>
              <img src={require('../css/images/pencil.png')} alt="Pencil" />
              Post a Review
            </div>
          </button>
          <div className='about-info-stext' style={{ textAlign: 'left' }}>
            Have you taken a class and want to share your experience? You can help other students by posting a review. Here’s how:<br/><br/>
            <b>1.</b>&nbsp;&nbsp;&nbsp;Go to your university's page or any course page from your university.<br/>
            <b>2.</b>&nbsp;&nbsp;&nbsp;Click the blue "Post Review" button as seen above.<br/>
            <b>3.</b>&nbsp;&nbsp;&nbsp;Fill out the form with your feedback. You’ll be asked to rate various aspects of the course, such as difficulty, workload, and enjoyment. You can also select tags that describe the course and indicate whether you would recommend it.<br/><br/>
            Your review will help future students make informed decisions about their course choices. Your honest feedback is key to building a reliable resource for your peers!
          </div>
        </div>

        <div className='about-subbanner' id="average-metrics">
          <div className='about-info-htext'>
            Understanding Average Course Metrics
          </div>
        </div>

        <div className='about-info-container'>
          <div className='about-info-stext' style={{ textAlign: 'left', marginTop: '3rem', marginBottom: '2rem' }}>
            At the top of each course page, you'll find several important metrics that help summarize the feedback students have left for that course. Here's what each metric means:<br/><br/>

            <b>Recommendation Percentage:</b> This shows the percentage of students who would recommend taking this course.<br/><br/>
            <b>Difficulty Score (out of 10):</b> This score reflects how challenging students found the course material was to grasp.<br/><br/>
            <b>Workload Score (out of 10):</b> This score shows how much time and effort students felt they needed to put into the class.<br/><br/>
            <b>Enjoyment Score (out of 10):</b> This score reflects how enjoyable and fulfilling the students found the course overall.<br/><br/>
            <b>Popular Tags:</b> These are common descriptors students have selected for the course, like “Lecture Heavy” or “Textbook Required” to give you a better idea of what the class will be like.<br/><br/>
            These metrics are based on reviews from all students who have taken the course, giving you a well-rounded view of what to expect.
          </div>
        </div>

        <div className='about-subbanner' id="bookmark-course">
          <div className='about-info-htext'>
            How to Bookmark a Course
          </div>
        </div>

        <div className='about-info-container'>
          <div className='course-name-header'>
            PHY101
            <img src={require('../css/images/bookmark.png')} alt="Bookmark" style={{ cursor: 'pointer', border: '2px solid red' }}/>
          </div>

          <div className='about-info-stext' style={{ textAlign: 'left', marginTop: '2rem', marginBottom: '3rem' }}>
            On each course page, you will find a tiny bookmark icon to the right of the name of the course. For users who are logged in, you can click this bookmark icon to bookmark that specific class. <br/><br/>
            <img src={require('../css/images/bookmark-info.png')} alt="Catalog" className="bookmark-image" style={{ display: 'block', margin: '0 auto', marginTop: '1rem', marginBottom: '-.5rem'}}/><br></br><br></br>
            To see all the courses that you've bookmarked, navigate to the account settings page and click on Bookmarks from the left side of the menu. From here, you can click on the course name to be taken to that course or remove any bookmarked course by clicking the x icon next to the course you’ve bookmarked.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='about-container-m'>
      <div className="about-banner-m">
        <div className="about-banner-text-m">
          <div className='about-banner-htext-m'>About Our Platform</div>
        </div>
      </div>
      <div className='about-info-container-m'>
        <div className='about-info-htext-m'>
          <img src={require('../css/images/logo.png')} alt="Logo"/> 
        </div>
        <div className='about-info-stext-m' style={{ marginBottom: '4.5rem' }}>
            At KickMyCourse, our mission is simple: to empower students with transparent, honest, and valuable feedback about the courses at their university. We believe that knowledge is power, and by sharing experiences and ratings, students can better plan their academic path and succeed in their studies. By fostering a supportive community of shared anonymous insights, we aim to make course selection less stressful and more informed. <br></br><br></br><b><u>FAQ's:</u></b>
            <br /><br />
            <a href="#search-school">Searching for Your School</a>
            <span> &bull; </span>
            <a href="#search-class">Searching for a Class & Formatting a Class Name</a>
            <span> &bull; </span>
            <a href="#review-course">Reviewing a Course</a>
            <span> &bull; </span>
            <a href="#average-metrics">Understanding Average Course Metrics</a>
            <span> &bull; </span>
            <a href="#bookmark-course">Bookmarking a Course</a>
        </div>
      </div>

      <div className='about-subbanner-m' id="search-school">
        <div className='about-info-htext-m'>
          Searching for your School
        </div>
      </div>

      <div className='about-info-container-m'>
        <div className="about-search-container-m">
          <input
              type="text"
              placeholder="Find your school"
              className='about-search-bar-m'
              readOnly
          />
        </div>
        <div className='about-info-stext-m' style={{ textAlign: 'left' }}>
          Finding your university is easy! When you arrive on the homepage, you'll be greeted with this "Find Your School" search bar. Simply start typing the name of your school, and relevant matches will appear as you type. Once you find your university in the dropdown, click on it, and you’ll be directed to the page dedicated to your school’s course reviews.
        </div>
      </div>

      <div className='about-subbanner-m' id="search-class" style={{ marginTop: '2.5rem' }}>
        <div className='about-info-htext-m'>
          Searching for a Class & Formatting a Class Name
        </div>
      </div>

      <div className='about-info-container-m'>
        <div className="about-search-container-m">
          <input
              type="text"
              placeholder="Find a class (e.g., CSE116 or MATH341)"
              className='about-search-bar-m'
              readOnly
          />
        </div>
        <div className='about-info-stext-m' style={{ textAlign: 'left' }}>
          After landing on your school page, you can search for a specific course within your school’s page. Use the search bar that says “Find a class” and start typing in the course code and number. If the course has already been reviewed, it will autofill as you type. If it’s not yet reviewed, you can manually enter it by pressing enter after typing it. Here's a guide on how to properly format the course information:
          <ul>
            <li><strong>Course Code:</strong> &nbsp;A short combination of 2-4 letters (usually representing the department)</li>
            <li><strong>Course Number:</strong> &nbsp;A 2-4 digit number specific to the class</li>
          </ul>
          Each university may structure their course names slightly differently. For example, valid formats might look like this:
          <ul>
            <li><strong>ENG101</strong> &nbsp;for an English 101 class. The code is ENG and the number is 101.</li>
            <li><strong>MATH2010</strong> &nbsp;for a higher-level mathematics course. The code is MATH and the number is 2010.</li>
            <li><strong>CS50</strong> &nbsp;for a higher-level mathematics course. The code is CS and the number is 50.</li>
          </ul>
          If you're unsure of the exact course code and number, refer to your university’s course catalog for accurate information:
        </div>
        <img src={require('../css/images/catalog.png')} alt="Catalog" className="catalog-image-m" />
        <div className='about-info-stext-m' style={{ textAlign: 'left' }}>
          When searching for a specific class, it’s important to only use the <b>course code</b> and <b>course number</b>. Some schools may include additional information after the course number, such as "LR," "LAB," or other designations, like in the example above.
          In these cases, make sure to leave out the extra designations (like "LR" or "LAB") when typing the course into the search bar. For example, to search for PHY 107LR, you would simply enter PHY 107. The only required format is the course code (e.g., PHY) followed by the course number (e.g., 107). If the class is a lab-designated class, add the "Lab Required" tag to your review to help other students identify that the course involves lab work.
        </div>
      </div>

      <div className='about-subbanner-m' id="review-course" style={{ marginTop: '2.5rem' }}>
        <div className='about-info-htext-m'>
          How to Review a Course
        </div>
      </div>

      <div className='about-info-container-m'>
        <button className="info-course-button-m">
          <div className='info-course-button-text-m'>
            <img src={require('../css/images/pencil.png')} alt="Pencil" />
            Post a Review
          </div>
        </button>
        <div className='about-info-stext-m' style={{ textAlign: 'left' }}>
          Have you taken a class and want to share your experience? You can help other students by posting a review. Here’s how:<br/><br/>
          <b>1.</b>&nbsp;&nbsp;&nbsp;Go to your university's page or any course page from your university.<br/>
          <b>2.</b>&nbsp;&nbsp;&nbsp;Click the blue "Post Review" button as seen above.<br/>
          <b>3.</b>&nbsp;&nbsp;&nbsp;Fill out the form with your feedback. You’ll be asked to rate various aspects of the course, such as difficulty, workload, and enjoyment. You can also select tags that describe the course and indicate whether you would recommend it.<br/><br/>
          Your review will help future students make informed decisions about their course choices. Your honest feedback is key to building a reliable resource for your peers!
        </div>
      </div>

      <div className='about-subbanner-m' id="average-metrics" style={{ marginTop: '2.5rem' }}>
        <div className='about-info-htext-m'>
          Understanding Average Course Metrics
        </div>
      </div>

      <div className='about-info-container-m'>
        <div className='about-info-stext-m' style={{ textAlign: 'left', marginTop: '3rem', marginBottom: '2rem' }}>
          At the top of each course page, you'll find several important metrics that help summarize the feedback students have left for that course. Here's what each metric means:<br/><br/>

          <b>Recommendation Percentage:</b> This shows the percentage of students who would recommend taking this course.<br/><br/>
          <b>Difficulty Score (out of 10):</b> This score reflects how challenging students found the course material was to grasp.<br/><br/>
          <b>Workload Score (out of 10):</b> This score shows how much time and effort students felt they needed to put into the class.<br/><br/>
          <b>Enjoyment Score (out of 10):</b> This score reflects how enjoyable and fulfilling the students found the course overall.<br/><br/>
          <b>Popular Tags:</b> These are common descriptors students have selected for the course, like “Lecture Heavy” or “Textbook Required” to give you a better idea of what the class will be like.<br/><br/>
          These metrics are based on reviews from all students who have taken the course, giving you a well-rounded view of what to expect.
        </div>
      </div>

      <div className='about-subbanner-m' id="bookmark-course" style={{ marginTop: '2.5rem' }}>
        <div className='about-info-htext-m'>
          How to Bookmark a Course
        </div>
      </div>

      <div className='about-info-container-m'>
        <div className='about-course-name-header-m'>
          PHY101
          <img src={require('../css/images/bookmark.png')} alt="Bookmark" style={{ cursor: 'pointer', border: '2px solid red' }}/>
        </div>

        <div className='about-info-stext-m' style={{ textAlign: 'left', marginTop: '2rem', marginBottom: '3rem' }}>
          On each course page, you will find a tiny bookmark icon to the right of the name of the course. For users who are logged in, you can click this bookmark icon to bookmark that specific class. <br/><br/>
          <img src={require('../css/images/bookmark-info.png')} alt="Catalog" className="bookmark-image-m" style={{ display: 'block', margin: '0 auto', marginTop: '1rem', marginBottom: '-.5rem'}}/><br></br><br></br>
          To see all the courses that you've bookmarked, navigate to the account settings page and click on Bookmarks from the left side of the menu. From here, you can click on the course name to be taken to that course or remove any bookmarked course by clicking the x icon next to the course you’ve bookmarked.
        </div>
      </div>
    </div>
  );

};

export default About;
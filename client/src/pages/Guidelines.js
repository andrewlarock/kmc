import React, { useEffect, useState } from 'react';
import '../css/Guidelines.css';
import '../css/mobile/GuidelinesMobile.css';

const Guidelines = () => {
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
      <div className="guidelines">
          <div className="guidelines-text">
          Course Review Guidelines
          </div>
          <div className="guidelines-subheader">
          Thank you for contributing to our platform by submitting a course review! Your feedback is invaluable for helping other students make informed decisions about their classes. To ensure your review is constructive and helpful, please adhere to the following guidelines:
          </div>

          <div className="guidelines-header">
          Student Guidelines:
          </div>
          <div className="guidelines-subheader">
          <b>Be Honest:</b>&nbsp;
          Share your genuine experience with the course and instructor. Authentic feedback is essential for other students to gauge the course's value. Avoid exaggerating or minimizing your experiences; provide an accurate representation of what to expect.<br></br><br></br>
          
          <b>Be Fair:</b>&nbsp;
          Evaluate all aspects of the course, including workload, teaching style, and course materials. Consider both the positive and negative elements. A balanced review helps readers understand the full scope of the course.<br></br><br></br>
          
          <b>Focus on Relevant Details:</b>&nbsp;
          Highlight specific aspects of the course such as lectures, assignments, exams, and the professor’s teaching style. Providing concrete examples allows others to better understand your experience and the course’s structure.<br></br><br></br>
          
          <b>Use Constructive Criticism:</b>&nbsp;
          If you have negative feedback, present it in a constructive manner. For instance, instead of simply stating that a course was "bad," explain what made it difficult (e.g., unclear assignments, pacing issues) and suggest ways it could be improved.<br></br><br></br>
          
          <b>Be Respectful:</b>&nbsp;
          Maintain a respectful tone throughout your review. Even if you had a negative experience, it’s important to treat the professor and fellow students with courtesy. Avoid personal attacks or inflammatory language.
          </div>

          <div className="guidelines-header">
          Prohibited Content:
          </div>
          <div className="guidelines-subheader">
          <b>Profanity or Foul Language:</b>&nbsp;
          Avoid using inappropriate or offensive language in your review. This includes swear words, slurs, and any derogatory terms. A professional tone enhances the credibility of your feedback.<br></br><br></br>
          
          <b>Make Personal Threats:</b>&nbsp;
          Do not include any threats or aggressive comments directed at the instructor or other students. Personal safety and respect are paramount in any educational environment.<br></br><br></br>
          
          <b>Reveal Personal Information:</b>&nbsp;
          Protect your privacy and the privacy of others by refraining from disclosing personal information (e.g., full names, email addresses, phone numbers). This helps maintain a safe space for all users.<br></br><br></br>
          
          <b>Submit Irrelevant Reviews:</b>&nbsp;
          Stay on topic and focus solely on your course experience. Avoid discussing unrelated matters (e.g., university politics, campus events) that do not pertain to the course content or instruction.<br></br><br></br>
          
          <b>Submit Fake Reviews:</b>&nbsp;
          Avoid posting reviews for courses you haven’t taken or based on hearsay. Authentic experiences are crucial, as they provide the most accurate insights to prospective students.<br></br><br></br>
          
          <b>Discriminate or Harass:</b>&nbsp;
          Refrain from using any discriminatory language or making harassing comments regarding race, gender, sexuality, or religion. Our community thrives on diversity and respect; fostering a welcoming environment is essential.<br></br><br></br>
          
          <b>Duplicate Content:</b>&nbsp;
          Do not submit multiple reviews for the same course. Each course should have only one review per student to ensure fair representation and clarity in feedback.<br></br><br></br>
          
          <b>Post Spam or Promotional Content:</b>&nbsp;
          Do not use the review section to advertise or promote other businesses or services. Your review should focus on the course and its merits, not as a platform for marketing.
          </div>
          <div className="guidelines-header">
          Flagging a Review:
          </div>
          <div className="guidelines-subheader">
          If you come across a review that you believe violates any of the guidelines outlined above, we encourage you to take action. Your vigilance helps maintain the integrity of our review platform. To flag a rating, simply locate the flag icon at the bottom right corner of each review and click it twice to report the review for violating our community guidelines. Once flagged, the review will be evaluated by our site administrators, who will assess the content against our guidelines to determine if it should be removed or if further action is necessary. Thank you for helping us keep our platform respectful and constructive for all users!
          </div>
      </div>
    );
  }

  return (
    <div className="guidelines-m">
        <div className="guidelines-text-m">
        Course Review Guidelines
        </div>
        <div className="guidelines-subheader-m">
        Thank you for contributing to our platform by submitting a course review! Your feedback is invaluable for helping other students make informed decisions about their classes. To ensure your review is constructive and helpful, please adhere to the following guidelines:
        </div>

        <div className="guidelines-header-m">
        Student Guidelines:
        </div>
        <div className="guidelines-subheader-m">
        <b>Be Honest:</b>&nbsp;
        Share your genuine experience with the course and instructor. Authentic feedback is essential for other students to gauge the course's value. Avoid exaggerating or minimizing your experiences; provide an accurate representation of what to expect.<br></br><br></br>
        
        <b>Be Fair:</b>&nbsp;
        Evaluate all aspects of the course, including workload, teaching style, and course materials. Consider both the positive and negative elements. A balanced review helps readers understand the full scope of the course.<br></br><br></br>
        
        <b>Focus on Relevant Details:</b>&nbsp;
        Highlight specific aspects of the course such as lectures, assignments, exams, and the professor’s teaching style. Providing concrete examples allows others to better understand your experience and the course’s structure.<br></br><br></br>
        
        <b>Use Constructive Criticism:</b>&nbsp;
        If you have negative feedback, present it in a constructive manner. For instance, instead of simply stating that a course was "bad," explain what made it difficult (e.g., unclear assignments, pacing issues) and suggest ways it could be improved.<br></br><br></br>
        
        <b>Be Respectful:</b>&nbsp;
        Maintain a respectful tone throughout your review. Even if you had a negative experience, it’s important to treat the professor and fellow students with courtesy. Avoid personal attacks or inflammatory language.
        </div>

        <div className="guidelines-header-m">
        Prohibited Content:
        </div>
        <div className="guidelines-subheader-m">
        <b>Profanity or Foul Language:</b>&nbsp;
        Avoid using inappropriate or offensive language in your review. This includes swear words, slurs, and any derogatory terms. A professional tone enhances the credibility of your feedback.<br></br><br></br>
        
        <b>Make Personal Threats:</b>&nbsp;
        Do not include any threats or aggressive comments directed at the instructor or other students. Personal safety and respect are paramount in any educational environment.<br></br><br></br>
        
        <b>Reveal Personal Information:</b>&nbsp;
        Protect your privacy and the privacy of others by refraining from disclosing personal information (e.g., full names, email addresses, phone numbers). This helps maintain a safe space for all users.<br></br><br></br>
        
        <b>Submit Irrelevant Reviews:</b>&nbsp;
        Stay on topic and focus solely on your course experience. Avoid discussing unrelated matters (e.g., university politics, campus events) that do not pertain to the course content or instruction.<br></br><br></br>
        
        <b>Submit Fake Reviews:</b>&nbsp;
        Avoid posting reviews for courses you haven’t taken or based on hearsay. Authentic experiences are crucial, as they provide the most accurate insights to prospective students.<br></br><br></br>
        
        <b>Discriminate or Harass:</b>&nbsp;
        Refrain from using any discriminatory language or making harassing comments regarding race, gender, sexuality, or religion. Our community thrives on diversity and respect; fostering a welcoming environment is essential.<br></br><br></br>
        
        <b>Duplicate Content:</b>&nbsp;
        Do not submit multiple reviews for the same course. Each course should have only one review per student to ensure fair representation and clarity in feedback.<br></br><br></br>
        
        <b>Post Spam or Promotional Content:</b>&nbsp;
        Do not use the review section to advertise or promote other businesses or services. Your review should focus on the course and its merits, not as a platform for marketing.
        </div>
        <div className="guidelines-header-m">
        Flagging a Review:
        </div>
        <div className="guidelines-subheader-m">
        If you come across a review that you believe violates any of the guidelines outlined above, we encourage you to take action. Your vigilance helps maintain the integrity of our review platform. To flag a rating, simply locate the flag icon at the bottom right corner of each review and click it twice to report the review for violating our community guidelines. Once flagged, the review will be evaluated by our site administrators, who will assess the content against our guidelines to determine if it should be removed or if further action is necessary. Thank you for helping us keep our platform respectful and constructive for all users!
        </div>
    </div>
  );

};

export default Guidelines;
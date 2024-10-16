const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors'); // Resource sharing, for when front-end and back-end are on dif ports
const bcrypt = require('bcrypt'); // bcrypt for password hashing
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser'); // Add cookie-parser to handle cookies
const { encode } = require('html-entities');
const validator = require('validator');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cookieParser()); // Enable cookie parsing

// CORS configuration to allow specific origin and credentials
const corsOptions = {
  origin: 'https://bespoke-kataifi-e2f4d5.netlify.app/' || 'http://localhost:3000',  // Front-end URL
  credentials: true,                // Allow credentials (cookies)
};

app.use(cors(corsOptions));  // Apply CORS middleware with options

// Configure PostgreSQL client
const pool = new Pool({
  connectionString: process.env.DB_URL, // Using environment variable for security
});

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token; // Get token from HTTP-only cookie
  if (!token) {
     // Return a 200 status with a message instead of an error code
     return res.status(200).json({ isAuthenticated: false, message: 'No token provided' });
  }

  jwt.verify(token, 'your_jwt_secret', (err, user) => {
     if (err) {
        return res.status(200).json({ isAuthenticated: false, message: 'Invalid token' });
     }

     req.user = user; // Attach the decoded user info to the request object
     next(); // Proceed to the next middleware or route handler
  });
};

// Check token authentication endpoint
app.get('/auth/check-token', authenticateToken, (req, res) => {
  // Only send the authenticated response if the token is valid and the middleware passed
  res.json({ isAuthenticated: true, email: req.user.email, name: req.user.name }); // Return the user's name from the decoded token
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body; // contains JSON sent by client

  try {
    // Fetch the user by email
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    
    // If no user is found, return an error
    if (result.rows.length === 0) { 
        return res.status(401).send('Invalid credentials');
    }

    const user = result.rows[0]; // get the user from the returned row

    // Compare the hashed password with the password provided by the user
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(401).send('Invalid credentials');
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email, name: user.name }, 
      'your_jwt_secret',
      { expiresIn: '1h' }
    );

    // Set token in HTTP-Only cookie
    res.cookie('token', token, {
      httpOnly: true,    // Cannot be accessed via JavaScript (prevents XSS)
      sameSite: 'Strict',  // Helps prevent CSRF attacks
      maxAge: 2 * 60 * 60 * 1000 // 2 hour expiration
    });

    // Send a success message
    return res.status(200).json({ message: 'Login successful', email: user.email, name: user.name });

  } catch (err) {
    console.error(err);
    return res.status(500).send('Server error');
  }
});

// Refresh token endpoint
app.post('/auth/refresh-token', authenticateToken, (req, res) => {
  const userId = req.user.userId;
  const email = req.user.email;
  const name = req.user.name;

  // Generate a new JWT token
  const newToken = jwt.sign(
    { userId, email, name },
    'your_jwt_secret',
    { expiresIn: '1h' }
  );

  // Set the new token as an HTTP-Only cookie
  res.cookie('token', newToken, {
    httpOnly: true,
    sameSite: 'Strict',
    maxAge: 2 * 60 * 60 * 1000 // 2 hours expiration
  });

  // Send response indicating success
  res.status(200).json({ message: 'Token refreshed successfully.' });
});

// Signup endpoint
app.post('/signup', async (req, res) => {
  let { email, password, name } = req.body;
  name = encode(name);
  email = validator.normalizeEmail(email);

  try {
      // Check if the email already exists
      const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      if (existingUser.rows.length > 0) {
          return res.status(400).send('Email already exists!');
      }

      // Hash the password using bcrypt before saving it to the database
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds for bcrypt
      const newUser = await pool.query('INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING id, email, name', [email, hashedPassword, name]);

      // Create JWT token valid for 1 hour
      const token = jwt.sign(
        { userId: newUser.rows[0].id, email: newUser.rows[0].email, name: newUser.rows[0].name },
        'your_jwt_secret',
        { expiresIn: '1h' }
      );

      // Set token as HTTP-Only cookie
      res.cookie('token', token, {
        httpOnly: true,  // Cannot be accessed via JavaScript
        sameSite: 'Strict',  // Prevents CSRF attacks
        maxAge: 2 * 60 * 60 * 1000 // 1 hour expiration
      });

      res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
  }
});

// Log out endpoint
app.post('/logout', (req, res) => {
  res.clearCookie('token', {
     httpOnly: true,
     sameSite: 'Strict'
  });
  res.status(200).json({ message: 'Logged out successfully' });
});

// Create course endpoint
app.post('/courses', async (req, res) => {
  const { university_id, code, number } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO courses (university_id, code, number) VALUES ($1, $2, $3) RETURNING id',
      [university_id, code, number]
    );

    const courseId = result.rows[0].id;

    res.status(201).json(courseId);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Get course id by code and number endpoint
app.get('/courses', async (req, res) => {
  const { university_id, code, number } = req.query; // Get code and number from query parameters

  try {

      // Normalize input to uppercase for case-insensitive comparison
      const normalizedCode = code.toUpperCase();
      const normalizedNumber = number.toUpperCase();

      const result = await pool.query(
          'SELECT * FROM courses WHERE university_id = $1 AND UPPER(code) = $2 AND UPPER(number) = $3',
          [university_id, normalizedCode, normalizedNumber]
      );

      if (result.rows.length === 0) {
          return res.status(204).send('Course not found');
      }

      res.status(200).json(result.rows[0]);
  } catch (err) {
      console.error('Error fetching courses:', err);
      res.status(500).send('Server error');
  }
});

// Get course details by course id endpoint
app.get('/courses/:id', async (req, res) => {
  const { id } = req.params; // Get course id from URL parameters

  try {
      const result = await pool.query(
          'SELECT code, number, university_id FROM courses WHERE id = $1',
          [id]
      );

      if (result.rows.length === 0) {
          return res.status(204).send('Course not found');
      }

      res.status(200).json(result.rows[0]); // Return the code, number, and university_id
  } catch (err) {
      console.error('Error fetching course details:', err);
      res.status(500).send('Server error');
  }
});

// Get all reviews endpoint
app.get('/reviews', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM reviews');
    res.status(200).json(result.rows); // Return the reviews as JSON
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Create review endpoint
app.post('/reviews', async (req, res) => {
  let { university_id, course_id, professor, CC, CN, difficulty, workload, enjoyment, recommended, review, tags, timestamp } = req.body;
  professor = encode(professor);
  review = encode(review);

  try {
    await pool.query(
      'INSERT INTO reviews (university_id, course_id, professor, CC, CN, difficulty, workload, enjoyment, recommended, review, tags, timestamp) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)',
      [university_id, course_id, professor, CC, CN, difficulty, workload, enjoyment, recommended, review, tags, timestamp]
    );
    res.status(201).send('Review added successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Flag a review endpoint
app.post('/reviews/flag', async (req, res) => {
  const { reviewId } = req.body; // Expecting reviewId in the request body

  if (!reviewId) {
    return res.status(400).send('Review ID is required');
  }

  try {
    const result = await pool.query(
      'UPDATE reviews SET flags = flags + 1 WHERE id = $1 RETURNING flags',
      [reviewId]
    );

    if (result.rowCount === 0) {
      return res.status(404).send('Review not found');
    }

    res.status(200).json({ message: 'Flags incremented successfully', flags: result.rows[0].flags });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Add university endpoint
app.post('/universities', async (req, res) => {
  let { name, location } = req.body;

  if (!name || !location) {
    return res.status(400).send('Name and location are required');
  }

  try {
    // Check if the university already exists
    const result = await pool.query('SELECT id FROM universities WHERE name = $1 AND location = $2', [name, location]);

    if (result.rows.length > 0) {
      // University exists, return its ID
      return res.status(200).json({ id: result.rows[0].id });
    }

    // University does not exist, insert it
    const insertResult = await pool.query(
      'INSERT INTO universities (name, location) VALUES ($1, $2) RETURNING id',
      [name, location]
    );

    // Return the ID of the newly inserted university
    res.status(201).json({ id: insertResult.rows[0].id });
  } catch (err) {
    console.error('Error adding university:', err);
    res.status(500).send('Server error');
  }
});

// Get university by ID
app.get('/universities/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM universities WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(204).send('University not found');
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching university data:', err);
    res.status(500).send('Server error');
  }
});

// Get university by name
app.get('/universities/name/:name', async (req, res) => {
  const { name } = req.params;

  try {
    const result = await pool.query('SELECT * FROM universities WHERE name = $1', [name]);

    if (result.rows.length === 0) {
      return res.status(404).send('University not found');
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching university data:', err);
    res.status(500).send('Server error');
  }
});

// Update email endpoint
app.put('/account/update-email', authenticateToken, async (req, res) => {
  let { newEmail } = req.body;
  const userId = req.user.userId;
  newEmail = validator.normalizeEmail(newEmail); // Normalize email

  try {
    // Check if the new email already exists in the database
    const existingEmail = await pool.query('SELECT * FROM users WHERE email = $1', [newEmail]);
    if (existingEmail.rows.length > 0) {
      return res.status(400).json({ message: 'Email already in use.' });
    }

    // Update the user's email in the database
    await pool.query('UPDATE users SET email = $1 WHERE id = $2', [newEmail, userId]);

    // Generate a new JWT token with the updated email
    const newToken = jwt.sign(
      { userId, email: newEmail, name: req.user.name }, // Include the updated email
      'your_jwt_secret',
      { expiresIn: '1h' }
    );

    // Set the new token as an HTTP-Only cookie
    res.cookie('token', newToken, {
      httpOnly: true,  // Cannot be accessed via JavaScript
      sameSite: 'Strict', // Helps prevent CSRF attacks
      maxAge: 2 * 60 * 60 * 1000, // 1 hour expiration
    });

    // Return success response
    res.status(200).json({ message: 'Email updated successfully.' });
  } catch (error) {
    console.error('Error updating email:', error);
    res.status(500).json({ message: 'Server error occurred while updating email.' });
  }
});

// Update password endpoint
app.put('/account/update-password', authenticateToken, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const userId = req.user.userId;

  try {
      // Fetch the current password hash from the database
      const userResult = await pool.query('SELECT password FROM users WHERE id = $1', [userId]);

      if (userResult.rows.length === 0) {
          return res.status(404).json({ message: 'User not found.' });
      }

      const user = userResult.rows[0];

      // Verify the current password matches the hash stored in the database
      const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);

      if (!isCurrentPasswordValid) {
          return res.status(400).json({ message: 'Current password is incorrect.' });
      }

      // Hash the new password
      const hashedNewPassword = await bcrypt.hash(newPassword, 10);

      // Update the password in the database
      await pool.query('UPDATE users SET password = $1 WHERE id = $2', [hashedNewPassword, userId]);

      res.status(200).json({ message: 'Password updated successfully.' });
  } catch (error) {
      console.error('Error updating password:', error);
      res.status(500).json({ message: 'Server error occurred while updating password.' });
  }
});

// Update name endpoint
app.put('/account/update-name', authenticateToken, async (req, res) => {
  let { newName } = req.body;
  const userId = req.user.userId;
  newName = encode(newName);
  
  try {

    // Update the user's name in the database
    await pool.query('UPDATE users SET name = $1 WHERE id = $2', [newName, userId]);

    // Generate a new JWT token with the updated name
    const newToken = jwt.sign(
      { userId, email: req.user.email, name: newName }, // Include the updated name
      'your_jwt_secret',
      { expiresIn: '1h' }
    );

    // Set the new token as an HTTP-Only cookie
    res.cookie('token', newToken, {
      httpOnly: true,  // Cannot be accessed via JavaScript
      sameSite: 'Strict', // Helps prevent CSRF attacks
      maxAge: 2 * 60 * 60 * 1000, // 1 hour expiration
    });

    // Return success response
    res.status(200).json({ message: 'Name updated successfully.' });
  } catch (error) {
    console.error('Error updating name:', error);
    res.status(500).json({ message: 'Server error occurred while updating name.' });
  }
});

// Delete account endpoint
app.delete('/account/delete', authenticateToken, async (req, res) => {
  const userId = req.user.userId; // Retrieve the user ID from the JWT

  try {
    // Check if the user exists
    const userResult = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);

    if (userResult.rows.length === 0) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Delete the user account
    await pool.query('DELETE FROM users WHERE id = $1', [userId]);

    // Clear the authentication token cookie after deletion
    res.clearCookie('token', {
      httpOnly: true,
      sameSite: 'Strict',
    });

    return res.status(200).json({ message: 'Account deleted successfully.' });
  } catch (error) {
    console.error('Error deleting account:', error);
    res.status(500).json({ message: 'Server error occurred while deleting account.' });
  }
});

// Add bookmark endpoint

app.post('/bookmark/add', authenticateToken, async (req, res) => {
  const { universityId, courseId } = req.body;
  const userId = req.user.userId;

  try {
    // Fetch current bookmarks for the user
    const result = await pool.query(
      'SELECT bookmarks FROM users WHERE id = $1',
      [userId]
    );
    let bookmarks = result.rows[0].bookmarks || [];

    const newBookmark = `${universityId}:${courseId}`;

    // Check if the bookmark already exists
    if (bookmarks.includes(newBookmark)) {
      // Remove the bookmark if it exists
      bookmarks = bookmarks.filter(bookmark => bookmark !== newBookmark);

      await pool.query(
        'UPDATE users SET bookmarks = $1 WHERE id = $2',
        [bookmarks, userId]
      );

      return res.status(205).json({ message: 'Bookmark removed successfully' });
    }

    // Add the new bookmark
    bookmarks = [...bookmarks, newBookmark];

    await pool.query(
      'UPDATE users SET bookmarks = $1 WHERE id = $2',
      [bookmarks, userId]
    );

    return res.status(200).json({ message: 'Bookmark added successfully' });
  } catch (error) {
    console.error('Error adding/removing bookmark:', error);
    return res.status(500).send('Server error');
  }
});

app.get('/bookmark', authenticateToken, async (req, res) => {
  const userId = req.user.userId;

  try {
      // Get the user's bookmarks
      const result = await pool.query(
          'SELECT bookmarks FROM users WHERE id = $1',
          [userId]
      );
      const bookmarks = result.rows[0].bookmarks || [];
      
      // Format bookmarks into an array of objects
      const formattedBookmarks = bookmarks.map(bookmark => {
          const [universityId, courseId] = bookmark.split(':');
          return { universityId, courseId };
      });

      return res.status(200).json(formattedBookmarks);
  } catch (error) {
      console.error('Error retrieving bookmarks:', error);
      return res.status(500).send('Server error');
  }
});

// Submitting feedback through endpoint
app.post('/feedback', async (req, res) => {
  let { feedback } = req.body;
  feedback = encode(feedback);

  try {
    // Check if feedback is provided
    if (!feedback) {
      return res.status(400).send('Feedback cannot be empty!');
    }

    // Insert feedback into the feedback table
    await pool.query('INSERT INTO feedback (feedback) VALUES ($1)', [feedback]);

    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
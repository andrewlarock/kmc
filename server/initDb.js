const { Pool } = require('pg');
require('dotenv').config();

// Configure PostgreSQL client to connect to the default postgres database
const pool = new Pool({ // manages a pool of connections to the PostgreSQL database. this allows multiple connections and queries to be handled efficiently
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Function to check if a database exists
const checkDatabaseExists = async (dbName) => {
  try {
    const result = await pool.query(`SELECT 1 FROM pg_database WHERE datname = $1`, [dbName]);
    return result.rows.length > 0; // If it returns a row, the database exists
  } catch (err) {
    console.error('Error checking for database:', err);
    return false;
  }
};

// Function to initialize the database and create the users table
const initDb = async () => {
  try {
    const dbName = 'kmc';

    // Check if the database exists
    const dbExists = await checkDatabaseExists(dbName);

    if (!dbExists) {
      // Create the 'kmc' database if it doesn't exist
      await pool.query(`CREATE DATABASE ${dbName}`);
      console.log(`Database ${dbName} created successfully!`);
    } else {
      console.log(`Database ${dbName} already exists.`);
    }

    // Now connect to 'kmc' database to create the 'users' table
    const pool = new Pool({ // manages a pool of connections to the PostgreSQL database. this allows multiple connections and queries to be handled efficiently
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    });

    // Create the 'users' table if it doesn't exist
    await kmcPool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            name VARCHAR(255) NOT NULL,
            bookmarks TEXT[] DEFAULT '{}'
        )
    `);
    console.log('Table users created (or already exists).');

    // Create the 'universities' table if it doesn't exist
    await kmcPool.query(`
        CREATE TABLE IF NOT EXISTS universities (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          location VARCHAR(255)
        )
      `);
      console.log('Table universities created (or already exists).');

    // Create the 'courses' table if it doesn't exist
    await kmcPool.query(`
        CREATE TABLE IF NOT EXISTS courses (
          id SERIAL PRIMARY KEY,
          university_id INTEGER REFERENCES universities(id) ON DELETE CASCADE,
          code VARCHAR(255) NOT NULL,
          number VARCHAR(255) NOT NULL
        )
      `);
      console.log('Table courses created (or already exists).');

    // Create the 'reviews' table if it doesn't exist
    await kmcPool.query(`
        CREATE TABLE IF NOT EXISTS reviews (
            id SERIAL PRIMARY KEY,
            university_id INTEGER REFERENCES universities(id) ON DELETE CASCADE,
            course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
            professor VARCHAR(255) NOT NULL,
            CC VARCHAR(255) NOT NULL,
            CN VARCHAR(255) NOT NULL,
            difficulty INTEGER CHECK (difficulty >= 1 AND difficulty <= 10),
            workload INTEGER CHECK (workload >= 1 AND workload <= 10),
            enjoyment INTEGER CHECK (enjoyment >= 1 AND enjoyment <= 10),
            recommended VARCHAR(255) NOT NULL,
            review TEXT,
            tags TEXT[],
            flags INTEGER DEFAULT 0,
            timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
      console.log('Table feedback created (or already exists).');

      await kmcPool.query(`
        CREATE TABLE IF NOT EXISTS feedback (
            id SERIAL PRIMARY KEY,
            feedback TEXT
        )
      `);
      console.log('Table reviews created (or already exists).');

    await kmcPool.end();
  } catch (err) {
    console.error('Error initializing database:', err);
  } finally {
    await pool.end();
  }
};

// Call the function to initialize the database
initDb();
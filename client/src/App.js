import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UniversityPage from './pages/UniversityPage';
import CoursePage from './pages/CoursePage';
import ReviewForm from './pages/ReviewForm';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AccountSettings from './pages/AccountSettings/AccountSettings';
import ChangeEmail from './pages/AccountSettings/ChangeEmail';
import ChangePassword from './pages/AccountSettings/ChangePassword';
import ChangeName from './pages/AccountSettings/ChangeName';
import Guidelines from './pages/Guidelines';
import NotFound from './pages/NotFound';
import About from './pages/About';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/account" element={<AccountSettings />} />
            <Route path="/about" element={<About />} />
            <Route path="/account/change-email" element={<ChangeEmail />} />
            <Route path="/account/change-password" element={<ChangePassword />} />
            <Route path="/account/change-name" element={<ChangeName />} />
            <Route path="/university/:id" element={<UniversityPage />} />
            <Route path="/university/:id/:courseId" element={<CoursePage />} />
            <Route path="/review-form/:universityId" element={<ReviewForm />} />
            <Route path="/review-form/:universityId/:courseId" element={<ReviewForm />} />
            <Route path="/review-form/guidelines" element={<Guidelines />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
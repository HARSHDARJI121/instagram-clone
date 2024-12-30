// src/pages/Signup.jsx
import React from 'react';
import Header from '../components/Header'; // Correct path to Header component
import AuthForm from '../components/AuthForm';

const Signup = () => {
  return (
    <div className="signup-page">
      <Header />
      <div className="auth-container">
        <AuthForm title="Sign Up for Instagram" buttonText="Sign Up" isSignup={true} />
      </div>
    </div>
  );
};

export default Signup;

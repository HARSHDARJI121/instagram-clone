// src/pages/Login.jsx
import React, { useState } from 'react';
import Header from '../components/Header'; // Make sure you are importing correctly
import AuthForm from '../components/AuthForm';
import '../pages/Login.css';

const Login = () => {
  const [isSignup, setIsSignup] = useState(false); // State to toggle between Login and Signup

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="login-page">
      <Header />
      <div className="auth-container">
        <h1>{isSignup ? "Sign Up for Instagram" : "Login to Instagram"}</h1>
        <AuthForm
          title={isSignup ? "Sign Up for Instagram" : "Login to Instagram"}
          buttonText={isSignup ? "Sign Up" : "Log In"}
          isSignup={isSignup}
        />
        <div className="signup-link">
          {isSignup ? (
            <p>
              Already have an account?{' '}
              <a href="#" onClick={toggleSignup}>
                Log In
              </a>
            </p>
          ) : (
            <p>
              New to Instagram?{' '}
              <a href="#" onClick={toggleSignup}>
                Sign Up
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

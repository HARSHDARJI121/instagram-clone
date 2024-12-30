// src/components/AuthForm.jsx
import React, { useState } from 'react';

const AuthForm = ({ title, buttonText, isSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle authentication logic (this is where you would connect to backend)
  };

  return (
    <div className="auth-form">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{buttonText}</button>
      </form>
      {isSignup && (
        <div className="additional-info">
          <span>By signing up, you agree to our Terms and Conditions.</span>
        </div>
      )}
    </div>
  );
};

export default AuthForm;

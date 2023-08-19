import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSignupPage = () => {
  const navigate = useNavigate();  // Initialize useNavigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTeacher, setIsTeacher] = useState(false);

  const handleLoginSignup = (e) => {
    e.preventDefault();
    // Perform login/signup logic here, e.g., sending data to the server

    // For this example, let's just navigate to the dashboard page after successful login/signup
    navigate('/dashboard');  // Use navigate for navigation
  };

  return (
    <div className="login-signup-page">
      <h2>{isTeacher ? 'Teacher' : 'Student'} {isTeacher ? 'Login' : 'Signup'}</h2>
      <form onSubmit={handleLoginSignup}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          <input
            type="checkbox"
            checked={isTeacher}
            onChange={() => setIsTeacher(!isTeacher)}
          />
          I am a teacher
        </label>
        <button type="submit">{isTeacher ? 'Login' : 'Signup'}</button>
      </form>
    </div>
  );
};

export default LoginSignupPage;

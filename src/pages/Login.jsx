import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    alert('Login functionality will be implemented with backend integration.');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="login-branding">
            <div className="brand-icon">🏏</div>
            <h2>15 गाव क्रिकेट फेडरेशन</h2>
            <p>15 Gaon Cricket Federation</p>
            <div className="brand-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Access your player profile</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>View match schedules</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Track your statistics</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Stay updated with news</span>
              </div>
            </div>
          </div>
        </div>

        <div className="login-right">
          <div className="login-form-container">
            <h1>Welcome Back!</h1>
            <p className="login-subtitle">Login to your account</p>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                />
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>

              <button type="submit" className="btn-login">
                Login
              </button>
            </form>

            <div className="login-footer">
              <p>Don't have an account? <Link to="/registration">Register here</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


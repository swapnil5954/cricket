import React, { useState } from 'react';
import './Registration.css';

const Registration = () => {
  const [userType, setUserType] = useState('player');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    village: '',
    age: '',
    // Player specific
    battingStyle: '',
    bowlingStyle: '',
    playerRole: '',
    // Umpire specific
    umpireLevel: '',
    umpireExperience: '',
    // Scorer specific
    scoringExperience: '',
    digitalScoring: false,
    // Commentator specific
    languages: '',
    commentaryExperience: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const nextStep = () => {
    setCurrentStep(Math.min(currentStep + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(Math.max(currentStep - 1, 1));
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
    setCurrentStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted:', { userType, ...formData });
    alert('Registration submitted successfully! We will contact you soon.');
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      village: '',
      age: '',
      battingStyle: '',
      bowlingStyle: '',
      playerRole: '',
      umpireLevel: '',
      umpireExperience: '',
      scoringExperience: '',
      digitalScoring: false,
      languages: '',
      commentaryExperience: ''
    });
    setCurrentStep(1);
  };

  const villages = Array.from({ length: 15 }, (_, i) => `Village ${i + 1}`);

  return (
    <div className="registration-page">
      <div className="page-header">
        <h1>Registration</h1>
        <p>Join the 15 Gaon Cricket Federation family</p>
      </div>

      <div className="container">
        <div className="registration-container">
          {/* Step Progress Indicator */}
          <div className="step-indicator">
            <div className={`step ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
              <div className="step-circle">1</div>
              <div className="step-label">Select Role</div>
            </div>
            <div className="step-line"></div>
            <div className={`step ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
              <div className="step-circle">2</div>
              <div className="step-label">Basic Info</div>
            </div>
            <div className="step-line"></div>
            <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
              <div className="step-circle">3</div>
              <div className="step-label">Additional Details</div>
            </div>
          </div>

          {/* Step 1: User Type Selection */}
          {currentStep === 1 && (
            <div className="step-content">
              <h2>Choose Your Role</h2>
              <div className="user-type-selector">
                <button
                  className={`type-btn ${userType === 'player' ? 'active' : ''}`}
                  onClick={() => handleUserTypeChange('player')}
                >
                  <span className="type-icon">🏏</span>
                  <span className="type-label">Player</span>
                  <span className="type-desc">Join as a cricket player</span>
                </button>
                <button
                  className={`type-btn ${userType === 'umpire' ? 'active' : ''}`}
                  onClick={() => handleUserTypeChange('umpire')}
                >
                  <span className="type-icon">⚖️</span>
                  <span className="type-label">Umpire</span>
                  <span className="type-desc">Officiate matches</span>
                </button>
                <button
                  className={`type-btn ${userType === 'scorer' ? 'active' : ''}`}
                  onClick={() => handleUserTypeChange('scorer')}
                >
                  <span className="type-icon">📊</span>
                  <span className="type-label">Scorer</span>
                  <span className="type-desc">Keep match records</span>
                </button>
                <button
                  className={`type-btn ${userType === 'commentator' ? 'active' : ''}`}
                  onClick={() => handleUserTypeChange('commentator')}
                >
                  <span className="type-icon">🎤</span>
                  <span className="type-label">Commentator</span>
                  <span className="type-desc">Provide match commentary</span>
                </button>
              </div>
              <div className="step-actions">
                <button type="button" className="btn btn-next" onClick={nextStep}>
                  Next Step →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Basic Information */}
          {currentStep === 2 && (
            <form className="registration-form step-content">
              <h2>Basic Information</h2>
              <p className="form-subtitle">Register as {userType.charAt(0).toUpperCase() + userType.slice(1)}</p>

              {/* Common Fields */}
              <div className="form-grid">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label>Email *</label>
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
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="form-group">
                <label>Village *</label>
                <select
                  name="village"
                  value={formData.village}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your village</option>
                  {villages.map(village => (
                    <option key={village} value={village}>{village}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Age *</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  min="10"
                  max="100"
                  placeholder="Enter your age"
                />
              </div>
            </div>

            <div className="step-actions">
              <button type="button" className="btn btn-prev" onClick={prevStep}>
                ← Previous
              </button>
              <button type="button" className="btn btn-next" onClick={nextStep}>
                Next Step →
              </button>
            </div>
          </form>
          )}

          {/* Step 3: Additional Details */}
          {currentStep === 3 && (
            <form className="registration-form step-content" onSubmit={handleSubmit}>
              <h2>Additional Details</h2>
              <p className="form-subtitle">Complete your {userType} registration</p>

              {/* Player Specific Fields */}
            {userType === 'player' && (
              <div className="form-grid">
                <div className="form-group">
                  <label>Player Role *</label>
                  <select
                    name="playerRole"
                    value={formData.playerRole}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select role</option>
                    <option value="batsman">Batsman</option>
                    <option value="bowler">Bowler</option>
                    <option value="all-rounder">All-rounder</option>
                    <option value="wicket-keeper">Wicket-keeper</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Batting Style *</label>
                  <select
                    name="battingStyle"
                    value={formData.battingStyle}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select batting style</option>
                    <option value="right-hand">Right-hand</option>
                    <option value="left-hand">Left-hand</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Bowling Style</label>
                  <select
                    name="bowlingStyle"
                    value={formData.bowlingStyle}
                    onChange={handleChange}
                  >
                    <option value="">Select bowling style</option>
                    <option value="right-arm-fast">Right-arm Fast</option>
                    <option value="right-arm-medium">Right-arm Medium</option>
                    <option value="right-arm-spin">Right-arm Spin</option>
                    <option value="left-arm-fast">Left-arm Fast</option>
                    <option value="left-arm-medium">Left-arm Medium</option>
                    <option value="left-arm-spin">Left-arm Spin</option>
                    <option value="none">Does not bowl</option>
                  </select>
                </div>
              </div>
            )}

            {/* Umpire Specific Fields */}
            {userType === 'umpire' && (
              <div className="form-grid">
                <div className="form-group">
                  <label>Certification Level *</label>
                  <select
                    name="umpireLevel"
                    value={formData.umpireLevel}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select level</option>
                    <option value="level1">Level 1</option>
                    <option value="level2">Level 2</option>
                    <option value="level3">Level 3</option>
                    <option value="uncertified">Not yet certified</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Years of Experience *</label>
                  <input
                    type="number"
                    name="umpireExperience"
                    value={formData.umpireExperience}
                    onChange={handleChange}
                    required
                    min="0"
                    placeholder="Enter years of experience"
                  />
                </div>
              </div>
            )}

            {/* Scorer Specific Fields */}
            {userType === 'scorer' && (
              <div className="form-grid">
                <div className="form-group">
                  <label>Years of Experience *</label>
                  <input
                    type="number"
                    name="scoringExperience"
                    value={formData.scoringExperience}
                    onChange={handleChange}
                    required
                    min="0"
                    placeholder="Enter years of experience"
                  />
                </div>

                <div className="form-group checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      name="digitalScoring"
                      checked={formData.digitalScoring}
                      onChange={handleChange}
                    />
                    <span>Familiar with digital scoring systems</span>
                  </label>
                </div>
              </div>
            )}

            {/* Commentator Specific Fields */}
            {userType === 'commentator' && (
              <div className="form-grid">
                <div className="form-group">
                  <label>Languages Known *</label>
                  <input
                    type="text"
                    name="languages"
                    value={formData.languages}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Marathi, Hindi, English"
                  />
                </div>

                <div className="form-group">
                  <label>Years of Experience *</label>
                  <input
                    type="number"
                    name="commentaryExperience"
                    value={formData.commentaryExperience}
                    onChange={handleChange}
                    required
                    min="0"
                    placeholder="Enter years of experience"
                  />
                </div>
              </div>
            )}

            <div className="form-actions">
              <button type="button" className="btn btn-prev" onClick={prevStep}>
                ← Previous
              </button>
              <button type="submit" className="btn btn-submit">
                ✓ Submit Registration
              </button>
            </div>
          </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;


import React, { useState } from 'react';
import './TeamPages.css';

const ScorerPanel = () => {
  const [selectedScorer, setSelectedScorer] = useState(null);

  const scorers = [
    { 
      id: 1, 
      name: 'Pradeep Joshi', 
      specialization: 'Lead Scorer', 
      experience: '10 years', 
      village: 'Village 5', 
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop',
      matches: 120,
      bio: 'Expert in traditional and digital scoring methods.'
    },
    { 
      id: 2, 
      name: 'Sachin Kadam', 
      specialization: 'Digital Scorer', 
      experience: '7 years', 
      village: 'Village 8', 
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop',
      matches: 85,
      bio: 'Specialist in modern scoring software and live updates.'
    },
    { 
      id: 3, 
      name: 'Ashok Shinde', 
      specialization: 'Statistics Manager', 
      experience: '9 years', 
      village: 'Village 1', 
      image: 'https://images.unsplash.com/photo-1502378735452-bc7d86632805?w=400&h=400&fit=crop',
      matches: 100,
      bio: 'Maintains comprehensive match and player statistics database.'
    },
    { 
      id: 4, 
      name: 'Nilesh Parab', 
      specialization: 'Scorer', 
      experience: '5 years', 
      village: 'Village 12', 
      image: 'https://images.unsplash.com/photo-1520409364224-63400afe26e5?w=400&h=400&fit=crop',
      matches: 60,
      bio: 'Detail-oriented scorer ensuring accuracy in every match.'
    },
    { 
      id: 5, 
      name: 'Rahul Dange', 
      specialization: 'Scorer', 
      experience: '4 years', 
      village: 'Village 7', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      matches: 50,
      bio: 'Quick and efficient scorer with excellent record keeping.'
    },
  ];

  return (
    <div className="team-page">
      <div className="page-header">
        <div className="header-background"></div>
        <div className="header-content">
          <h1 className="animate-fade-in">Scorer Panel</h1>
          <p className="animate-fade-in-delay">Accurate scoring and statistics management</p>
        </div>
      </div>

      <div className="container">
        <div className="team-intro">
          <p>
            Our professional scorer panel maintains accurate records of all matches, including 
            detailed statistics, player performances, and match summaries. They use both traditional 
            and digital scoring methods to ensure precision and reliability.
          </p>
        </div>

        <div className="team-grid">
          {scorers.map(scorer => (
            <div 
              key={scorer.id} 
              className={`team-card ${selectedScorer === scorer.id ? 'selected' : ''}`}
              onClick={() => setSelectedScorer(selectedScorer === scorer.id ? null : scorer.id)}
            >
              <div className="team-image">
                <img src={scorer.image} alt={scorer.name} />
                <div className="team-overlay">
                  <div className="position-badge">{scorer.specialization}</div>
                </div>
              </div>
              <div className="team-info">
                <h3>{scorer.name}</h3>
                <div className="position">{scorer.specialization}</div>
                <div className="experience">Experience: {scorer.experience}</div>
                <div className="village">{scorer.village}</div>
                {selectedScorer === scorer.id && (
                  <div className="member-details">
                    <p className="bio">{scorer.bio}</p>
                    <div className="stats">
                      <span className="stat-badge">📊 {scorer.matches} Matches Scored</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScorerPanel;

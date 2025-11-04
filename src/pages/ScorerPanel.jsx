import React, { useState, useEffect } from 'react';
import { fetchScorers } from '../services/api';
import './TeamPages.css';

const ScorerPanel = () => {
  const [scorers, setScorers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadScorers();
  }, []);

  const loadScorers = async () => {
    try {
      setLoading(true);
      const data = await fetchScorers();
      setScorers(data);
    } catch (error) {
      console.error('Error loading scorers:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="team-page">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading scorers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="team-page">
      <div className="page-header">
        <div className="header-background"></div>
        <div className="header-content">
          <h1 className="animate-fade-in">Our Scorers</h1>
          <p className="animate-fade-in-delay">Dedicated scorers maintaining accurate match records</p>
        </div>
      </div>

      <div className="container">
        <div className="team-intro">
          <p>
            Our team of experienced scorers ensures every run, wicket, and milestone is accurately recorded.
            From traditional manual scoring to modern digital systems, they maintain the integrity of match statistics.
          </p>
        </div>

        <div className="members-grid">
          {scorers.map((scorer) => (
            <div key={scorer.scorer_id} className="member-card">
              <div className="member-image">
                <img 
                  src={'https://i.pravatar.cc/300?img=' + (scorer.scorer_id + 20)} 
                  alt={scorer.full_name} 
                />
                {scorer.digital_scoring && (
                  <div className="level-badge">Digital Scorer</div>
                )}
              </div>
              <div className="member-content">
                <h3>{scorer.full_name}</h3>
                <div className="role">
                  {scorer.digital_scoring ? '💻 Digital Scorer' : '📝 Manual Scorer'}
                </div>
                <div className="stats">
                  <div className="stat-item">
                    <span className="stat-label">Experience:</span>
                    <span className="stat-value">{scorer.experience_years} years</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Matches Scored:</span>
                    <span className="stat-value">{scorer.matches_scored}</span>
                  </div>
                </div>
                <div className="village">{scorer.village_name}</div>
                {scorer.phone && (
                  <div className="contact">📞 {scorer.phone}</div>
                )}
                {scorer.email && (
                  <div className="contact">✉️ {scorer.email}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {scorers.length === 0 && (
          <div className="empty-state">
            <p>No scorers found. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScorerPanel;

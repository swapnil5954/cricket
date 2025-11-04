import React, { useState, useEffect } from 'react';
import { fetchUmpires } from '../services/api';
import './TeamPages.css';

const UmpirePanel = () => {
  const [umpires, setUmpires] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUmpires();
  }, []);

  const loadUmpires = async () => {
    try {
      setLoading(true);
      const data = await fetchUmpires();
      setUmpires(data);
    } catch (error) {
      console.error('Error loading umpires:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="team-page">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading umpires...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="team-page">
      <div className="page-header">
        <div className="header-background"></div>
        <div className="header-content">
          <h1 className="animate-fade-in">Our Umpires</h1>
          <p className="animate-fade-in-delay">Certified officials ensuring fair play</p>
        </div>
      </div>

      <div className="container">
        <div className="team-intro">
          <p>
            Our panel of certified umpires brings professionalism and integrity to every match.
            With years of experience and deep knowledge of cricket laws, they ensure fair play across all tournaments.
          </p>
        </div>

        <div className="members-grid">
          {umpires.map((umpire) => (
            <div key={umpire.umpire_id} className="member-card">
              <div className="member-image">
                <img 
                  src={umpire.photo_url || 'https://i.pravatar.cc/300?img=11'} 
                  alt={umpire.full_name} 
                />
                <div className="level-badge">{umpire.level}</div>
              </div>
              <div className="member-content">
                <h3>{umpire.full_name}</h3>
                <div className="role">Certified Umpire</div>
                <div className="stats">
                  <div className="stat-item">
                    <span className="stat-label">Experience:</span>
                    <span className="stat-value">{umpire.experience_years} years</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Matches:</span>
                    <span className="stat-value">{umpire.matches_officiated}</span>
                  </div>
                  {umpire.certification && (
                    <div className="stat-item">
                      <span className="stat-label">Certification:</span>
                      <span className="stat-value">{umpire.certification}</span>
                    </div>
                  )}
                </div>
                <div className="village">{umpire.village_name}</div>
                {umpire.phone && (
                  <div className="contact">📞 {umpire.phone}</div>
                )}
                {umpire.email && (
                  <div className="contact">✉️ {umpire.email}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {umpires.length === 0 && (
          <div className="empty-state">
            <p>No umpires found. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UmpirePanel;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { villagesData } from '../data/villagesData';
import './Villages.css';

const Villages = () => {
  const navigate = useNavigate();
  const [selectedVillage, setSelectedVillage] = useState(null);
  const [expandedVadi, setExpandedVadi] = useState(null);

  const handleVillageClick = (villageId) => {
    setSelectedVillage(selectedVillage === villageId ? null : villageId);
    setExpandedVadi(null);
  };

  const handleVadiClick = (vadiName) => {
    setExpandedVadi(expandedVadi === vadiName ? null : vadiName);
  };

  const getTotalVadis = () => {
    return villagesData.reduce((sum, village) => sum + village.vadis.length, 0);
  };

  const getTotalTeams = () => {
    return villagesData.reduce((sum, village) => sum + village.vadis.length, 0);
  };

  return (
    <div className="villages-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-background"></div>
        <div className="header-content">
          <h1 className="animate-fade-in">15 Gaon Villages & Vadis</h1>
          <p className="animate-fade-in-delay">Explore villages with their vadis (localities) and cricket teams</p>
        </div>
      </div>

      <div className="container">
        {/* Summary Stats */}
        <div className="villages-summary">
          <div className="summary-card">
            <div className="summary-icon">🏘️</div>
            <div className="summary-number">{villagesData.length}</div>
            <div className="summary-label">Villages</div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">📍</div>
            <div className="summary-number">{getTotalVadis()}</div>
            <div className="summary-label">Vadis</div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🏏</div>
            <div className="summary-number">{getTotalTeams()}</div>
            <div className="summary-label">Teams</div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">👥</div>
            <div className="summary-number">{villagesData.reduce((sum, v) => sum + v.population, 0)}</div>
            <div className="summary-label">Population</div>
          </div>
        </div>

        {/* Villages Grid */}
        {!selectedVillage ? (
          <div className="villages-grid">
          {villagesData.map(village => (
              <div 
                key={village.id} 
                className="village-card-modern"
                onClick={() => handleVillageClick(village.id)}
              >
                <div className="village-image-wrapper">
                <img src={village.image} alt={village.name} />
                  <div className="village-overlay">
                    <div className="village-badge">{village.vadis.length} Vadis</div>
                  </div>
                </div>
                <div className="village-content-modern">
                  <h3 className="village-name">{village.name}</h3>
                  <div className="village-info-row">
                    <span className="info-item">
                      <span className="icon">👥</span>
                      {village.population}
                    </span>
                    <span className="info-item">
                      <span className="icon">🏏</span>
                      {village.vadis.length} Teams
                    </span>
                  </div>
                  <button className="view-details-btn">View Vadis & Teams →</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="village-detail-view">
            <button className="back-button" onClick={() => setSelectedVillage(null)}>
              ← Back to All Villages
            </button>
            
            {villagesData
              .filter(v => v.id === selectedVillage)
              .map(village => (
                <div key={village.id}>
                  <div className="detail-header">
                    <img src={village.image} alt={village.name} className="detail-hero-img" />
                    <div className="detail-header-content">
                      <h2>{village.name}</h2>
                      <div className="detail-stats">
                        <span>Population: {village.population}</span>
                        <span>•</span>
                        <span>{village.vadis.length} Vadis</span>
                        <span>•</span>
                        <span>{village.vadis.length} Teams</span>
                      </div>
                          </div>
                        </div>

                  <div className="vadis-section">
                    <h3 className="section-title">Vadis & Teams</h3>
                    <div className="vadis-grid">
                      {village.vadis.map((vadi, idx) => (
                        <div 
                          key={idx} 
                          className="vadi-card"
                          onClick={() => navigate(`/vadi-details/${village.id}/${idx}`)}
                          style={{ cursor: 'pointer' }}
                        >
                          <div className="vadi-header">
                            <div className="vadi-info">
                              <h4>{vadi.name}</h4>
                              <div className="team-preview">
                                <span className="team-icon-sm">🏏</span>
                                <span className="team-name-sm">{vadi.team.name}</span>
                              </div>
                              <span className="team-count">1 Team • {vadi.team.players.length} Players</span>
                                </div>
                            <div className="expand-icon">
                              →
                            </div>
                          </div>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default Villages;

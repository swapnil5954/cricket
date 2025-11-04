import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { villagesData } from '../data/villagesData';
import './VadiDetails.css';

const VadiDetails = () => {
  const { villageId, vadiIndex } = useParams();

  // Sample player data with photos, ages, and roles
  // In production, this would come from an API or database
  const getPlayerData = (playerName, index) => {
    const roles = ['Batsman', 'Bowler', 'All-Rounder', 'Wicket-Keeper'];
    const ages = [22, 25, 28, 24, 26, 23, 27, 29, 21, 30, 24, 25, 26, 28, 22];
    const photos = [
      `https://i.pravatar.cc/200?img=${10 + index}`,
      `https://i.pravatar.cc/200?img=${20 + index}`,
      `https://i.pravatar.cc/200?img=${30 + index}`,
      `https://i.pravatar.cc/200?img=${40 + index}`,
      `https://i.pravatar.cc/200?img=${50 + index}`
    ];
    
    const roleIndex = index % roles.length;
    return {
      name: playerName,
      age: ages[index % ages.length],
      role: roles[roleIndex],
      photo: photos[index % photos.length],
      matches: Math.floor(Math.random() * 50) + 10,
      runs: roleIndex !== 1 ? Math.floor(Math.random() * 800) + 100 : Math.floor(Math.random() * 200) + 20,
      wickets: roleIndex !== 0 ? Math.floor(Math.random() * 50) + 5 : Math.floor(Math.random() * 5),
      battingStyle: index % 2 === 0 ? 'Right-hand' : 'Left-hand',
      bowlingStyle: roleIndex !== 0 ? (index % 2 === 0 ? 'Right-arm Fast' : 'Right-arm Spin') : 'N/A'
    };
  };

  const village = villagesData.find(v => v.id === parseInt(villageId));
  
  if (!village || !village.vadis[vadiIndex]) {
    return (
      <div className="vadi-details-page">
        <div className="container">
          <div className="not-found">
            <h2>Vadi Not Found</h2>
            <Link to="/villages" className="btn-back">← Back to Villages</Link>
          </div>
        </div>
      </div>
    );
  }

  const vadi = village.vadis[vadiIndex];
  const team = vadi.team;
  const playersWithDetails = team.players.map((player, index) => getPlayerData(player, index));

  return (
    <div className="vadi-details-page">
      {/* Hero Section */}
      <div className="vadi-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content-vadi">
          <Link to="/villages" className="back-link-vadi">← Back to Villages</Link>
          <h1>{vadi.name}</h1>
          <p className="village-name-badge">{village.name}</p>
          <div className="team-info-hero">
            <h2 className="team-name-hero">
              <span className="team-icon-hero">🏏</span>
              {team.name}
            </h2>
            <p className="captain-info-hero">
              <span className="captain-icon-hero">👨‍✈️</span>
              Captain: {team.captain}
            </p>
          </div>
        </div>
      </div>

      {/* Team Stats */}
      <div className="container">
        <div className="team-stats-section">
          <div className="stat-box">
            <div className="stat-icon">👥</div>
            <div className="stat-number">{team.players.length}</div>
            <div className="stat-label">Players</div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">🏏</div>
            <div className="stat-number">{playersWithDetails.filter(p => p.role === 'Batsman').length}</div>
            <div className="stat-label">Batsmen</div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">⚾</div>
            <div className="stat-number">{playersWithDetails.filter(p => p.role === 'Bowler').length}</div>
            <div className="stat-label">Bowlers</div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">⭐</div>
            <div className="stat-number">{playersWithDetails.filter(p => p.role === 'All-Rounder').length}</div>
            <div className="stat-label">All-Rounders</div>
          </div>
        </div>

        {/* Players Section */}
        <div className="players-section-detail">
          <h2 className="section-title-detail">
            <span className="title-icon-detail">👥</span>
            Squad Members
          </h2>

          <div className="players-grid-detail">
            {playersWithDetails.map((player, index) => (
              <div key={index} className="player-card-detail">
                <div className="player-photo-wrapper">
                  <img src={player.photo} alt={player.name} className="player-photo" />
                  <div className="player-role-badge" data-role={player.role.toLowerCase()}>
                    {player.role}
                  </div>
                </div>
                
                <div className="player-info-detail">
                  <h3 className="player-name-detail">{player.name}</h3>
                  <p className="player-age">Age: {player.age} years</p>
                  
                  {/* <div className="player-stats-grid">
                    <div className="stat-item-player">
                      <span className="stat-label-small">Matches</span>
                      <span className="stat-value-small">{player.matches}</span>
                    </div>
                    {player.role !== 'Bowler' && (
                      <div className="stat-item-player">
                        <span className="stat-label-small">Runs</span>
                        <span className="stat-value-small">{player.runs}</span>
                      </div>
                    )}
                    {player.role !== 'Batsman' && (
                      <div className="stat-item-player">
                        <span className="stat-label-small">Wickets</span>
                        <span className="stat-value-small">{player.wickets}</span>
                      </div>
                    )}
                  </div> */}

                  <div className="player-style-info">
                    <p><strong>Batting:</strong> {player.battingStyle}</p>
                    {player.role !== 'Batsman' && (
                      <p><strong>Bowling:</strong> {player.bowlingStyle}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VadiDetails;


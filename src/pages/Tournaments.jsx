import React, { useState } from 'react';
import './Tournaments.css';

const Tournaments = () => {
  const [selectedTournament, setSelectedTournament] = useState(null);

  const tournaments = [
    {
      id: 1,
      name: 'Annual Championship 2024',
      year: '2024',
      date: 'October 2024',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&h=600&fit=crop',
      winner: {
        team: 'Village 7 Warriors',
        captain: 'Rohit Deshmukh',
        trophy: '🏆'
      },
      teams: [
        { name: 'Village 7 Warriors', village: 'Village 7', position: '1st' },
        { name: 'Village 3 Tigers', village: 'Village 3', position: '2nd' },
        { name: 'Village 12 Eagles', village: 'Village 12', position: '3rd' },
        { name: 'Village 5 Lions', village: 'Village 5', position: '4th' }
      ],
      awards: {
        bestBatsman: {
          name: 'Sagar Pawar',
          team: 'Village 3 Tigers',
          stats: '456 runs',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
        },
        bestBowler: {
          name: 'Akash Jadhav',
          team: 'Village 12 Eagles',
          stats: '24 wickets',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
        },
        bestFielder: {
          name: 'Mayur Shinde',
          team: 'Village 5 Lions',
          stats: '18 catches',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
        }
      },
      matches: 12,
      totalRuns: 3450
    },
    {
      id: 2,
      name: 'Summer Cup 2024',
      year: '2024',
      date: 'June 2024',
      image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=1200&h=600&fit=crop',
      winner: {
        team: 'Village 3 Tigers',
        captain: 'Sagar Pawar',
        trophy: '🏆'
      },
      teams: [
        { name: 'Village 3 Tigers', village: 'Village 3', position: '1st' },
        { name: 'Village 7 Warriors', village: 'Village 7', position: '2nd' },
        { name: 'Village 11 Strikers', village: 'Village 11', position: '3rd' },
        { name: 'Village 14 Champions', village: 'Village 14', position: '4th' }
      ],
      awards: {
        bestBatsman: {
          name: 'Pratik Mane',
          team: 'Village 14 Champions',
          stats: '398 runs',
          image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop'
        },
        bestBowler: {
          name: 'Vaibhav Kale',
          team: 'Village 3 Tigers',
          stats: '21 wickets',
          image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop'
        },
        bestFielder: {
          name: 'Rohit Deshmukh',
          team: 'Village 7 Warriors',
          stats: '15 catches',
          image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=200&h=200&fit=crop'
        }
      },
      matches: 10,
      totalRuns: 2980
    },
    {
      id: 3,
      name: 'Monsoon Premier League 2024',
      year: '2024',
      date: 'August 2024',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&h=600&fit=crop',
      winner: {
        team: 'Village 12 Eagles',
        captain: 'Akash Jadhav',
        trophy: '🏆'
      },
      teams: [
        { name: 'Village 12 Eagles', village: 'Village 12', position: '1st' },
        { name: 'Village 5 Lions', village: 'Village 5', position: '2nd' },
        { name: 'Village 2 Panthers', village: 'Village 2', position: '3rd' },
        { name: 'Village 9 Royals', village: 'Village 9', position: '4th' }
      ],
      awards: {
        bestBatsman: {
          name: 'Nikhil Patil',
          team: 'Village 5 Lions',
          stats: '412 runs',
          image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop'
        },
        bestBowler: {
          name: 'Sachin Kamble',
          team: 'Village 12 Eagles',
          stats: '26 wickets',
          image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop'
        },
        bestFielder: {
          name: 'Varun Desai',
          team: 'Village 2 Panthers',
          stats: '20 catches',
          image: 'https://images.unsplash.com/photo-1502378735452-bc7d86632805?w=200&h=200&fit=crop'
        }
      },
      matches: 11,
      totalRuns: 3120
    }
  ];

  return (
    <div className="tournaments-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-background"></div>
        <div className="header-content">
          <h1 className="animate-fade-in">Tournaments</h1>
          <p className="animate-fade-in-delay">Celebrating cricket excellence across 15 villages</p>
        </div>
      </div>

      <div className="container">
        {tournaments.map((tournament, index) => (
          <div key={tournament.id} className="tournament-section">
            {/* Winner Banner */}
            <div className="winner-banner" style={{ backgroundImage: `url(${tournament.image})` }}>
              <div className="winner-overlay"></div>
              <div className="winner-content">
                <div className="trophy-icon">{tournament.winner.trophy}</div>
                <h2 className="tournament-title">{tournament.name}</h2>
                <div className="winner-info">
                  <span className="winner-label">Tournament Winner</span>
                  <h3 className="winner-team">{tournament.winner.team}</h3>
                  <p className="winner-captain">Captain: {tournament.winner.captain}</p>
                </div>
                <div className="tournament-meta">
                  <span className="meta-item">📅 {tournament.date}</span>
                  <span className="meta-item">🏏 {tournament.matches} Matches</span>
                  <span className="meta-item">📊 {tournament.totalRuns} Runs</span>
                </div>
              </div>
            </div>

            {/* Participating Teams */}
            <div className="teams-section">
              <h3 className="section-title">Participating Teams</h3>
              <div className="teams-grid">
                {tournament.teams.map((team, idx) => (
                  <div 
                    key={idx} 
                    className={`team-card ${team.position === '1st' ? 'winner' : ''}`}
                  >
                    <div className="team-position">{team.position}</div>
                    <div className="team-name">{team.name}</div>
                    <div className="team-village">{team.village}</div>
                    {team.position === '1st' && <div className="winner-badge">🏆 Winner</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Awards Section */}
            <div className="awards-section">
              <h3 className="section-title">Tournament Awards</h3>
              <div className="awards-grid">
                {/* Best Batsman */}
                <div className="award-card">
                  <div className="award-icon">🏏</div>
                  <h4 className="award-title">Best Batsman</h4>
                  <div className="award-winner">
                    <img src={tournament.awards.bestBatsman.image} alt={tournament.awards.bestBatsman.name} />
                    <div className="award-info">
                      <p className="player-name">{tournament.awards.bestBatsman.name}</p>
                      <p className="player-team">{tournament.awards.bestBatsman.team}</p>
                      <p className="player-stats">{tournament.awards.bestBatsman.stats}</p>
                    </div>
                  </div>
                </div>

                {/* Best Bowler */}
                <div className="award-card">
                  <div className="award-icon">⚾</div>
                  <h4 className="award-title">Best Bowler</h4>
                  <div className="award-winner">
                    <img src={tournament.awards.bestBowler.image} alt={tournament.awards.bestBowler.name} />
                    <div className="award-info">
                      <p className="player-name">{tournament.awards.bestBowler.name}</p>
                      <p className="player-team">{tournament.awards.bestBowler.team}</p>
                      <p className="player-stats">{tournament.awards.bestBowler.stats}</p>
                    </div>
                  </div>
                </div>

                {/* Best Fielder */}
                <div className="award-card">
                  <div className="award-icon">🧤</div>
                  <h4 className="award-title">Best Fielder</h4>
                  <div className="award-winner">
                    <img src={tournament.awards.bestFielder.image} alt={tournament.awards.bestFielder.name} />
                    <div className="award-info">
                      <p className="player-name">{tournament.awards.bestFielder.name}</p>
                      <p className="player-team">{tournament.awards.bestFielder.team}</p>
                      <p className="player-stats">{tournament.awards.bestFielder.stats}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider between tournaments */}
            {index < tournaments.length - 1 && <div className="tournament-divider"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;


import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchTournamentById, fetchMatches } from '../services/api';
import './TournamentDetails.css';

const TournamentDetails = () => {
  const { id } = useParams();
  const [selectedDay, setSelectedDay] = useState(0);
  const [tournament, setTournament] = useState(null);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTournamentDetails();
  }, [id]);

  const loadTournamentDetails = async () => {
    try {
      setLoading(true);
      
      // Fetch tournament details
      const tournamentData = await fetchTournamentById(id);
      setTournament(tournamentData);
      
      // Fetch matches for this tournament
      const matchesData = await fetchMatches({ tournament_id: id });
      
      // Group matches by date
      const groupedByDate = groupMatchesByDate(matchesData);
      setMatches(groupedByDate);
      
    } catch (error) {
      console.error('Error loading tournament details:', error);
    } finally {
      setLoading(false);
    }
  };

  const groupMatchesByDate = (matchesData) => {
    const grouped = {};
    matchesData.forEach((match) => {
      const matchDate = match.match_date;
      if (!grouped[matchDate]) {
        grouped[matchDate] = [];
      }
      grouped[matchDate].push(match);
    });
    
    // Convert to array format
    return Object.keys(grouped).map((date, index) => ({
      dayNumber: index + 1,
      dayName: `Day ${index + 1}`,
      date: new Date(date).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      matches: grouped[date].map(match => ({
        id: match.match_id,
        time: match.match_time,
        team1: match.team1,
        team2: match.team2,
        status: match.status,
        winner: match.winner
      }))
    }));
  };

  if (loading) {
    return (
      <div className="tournament-details-page">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading tournament details...</p>
        </div>
      </div>
    );
  }

  if (!tournament) {
    return (
      <div className="tournament-details-page">
        <div className="container">
          <div className="empty-state">
            <h2>Tournament Not Found</h2>
            <Link to="/tournaments" className="btn">Back to Tournaments</Link>
          </div>
        </div>
      </div>
    );
  }

  const currentDayMatches = matches[selectedDay] || { matches: [] };

  return (
    <div className="tournament-details-page">
      {/* Tournament Banner */}
      <div className="tournament-banner" style={{ 
        backgroundImage: `url(${tournament.banner_image_url || 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&h=400&fit=crop'})`
      }}>
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <Link to="/tournaments" className="back-btn">← Back to Tournaments</Link>
          <h1>{tournament.tournament_name}</h1>
          <div className="tournament-meta">
            <span>📅 {tournament.date_formatted || tournament.start_date}</span>
            <span>📍 {tournament.venue}</span>
            <span>🏏 {tournament.total_teams} Teams</span>
            <span>💰 Prize: ₹{tournament.prize_first}</span>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Day Selector */}
        {matches.length > 0 && (
          <div className="day-selector">
            <h2>Match Schedule</h2>
            <div className="day-tabs">
              {matches.map((day, index) => (
                <button
                  key={index}
                  className={`day-tab ${selectedDay === index ? 'active' : ''}`}
                  onClick={() => setSelectedDay(index)}
                >
                  <span className="day-name">{day.dayName}</span>
                  <span className="day-date">{day.date}</span>
                  <span className="matches-count">{day.matches.length} Matches</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Matches Grid */}
        <div className="matches-section">
          {currentDayMatches.matches.length > 0 ? (
            <div className="matches-grid">
              {currentDayMatches.matches.map((match) => (
                <div key={match.id} className="match-card">
                  <div className="match-time">
                    <span className="time-icon">🕐</span>
                    <span>{match.time}</span>
                  </div>
                  <div className="match-teams">
                    <div className="team">
                      <span className="team-name">{match.team1}</span>
                    </div>
                    <div className="vs">VS</div>
                    <div className="team">
                      <span className="team-name">{match.team2}</span>
                    </div>
                  </div>
                  <div className="match-status">
                    <span className={`status-badge ${match.status?.toLowerCase()}`}>
                      {match.status || 'Scheduled'}
                    </span>
                  </div>
                  {match.winner && (
                    <div className="match-winner">
                      🏆 Winner: {match.winner}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="no-matches">
              <p>Match schedule will be announced soon!</p>
            </div>
          )}
        </div>

        {/* Tournament Info */}
        <div className="tournament-info-section">
          <div className="info-card">
            <h3>Tournament Details</h3>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Status:</span>
                <span className={`status-badge ${tournament.status?.toLowerCase()}`}>
                  {tournament.status}
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">Total Teams:</span>
                <span className="info-value">{tournament.total_teams}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Venue:</span>
                <span className="info-value">{tournament.venue}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Prize Pool:</span>
                <span className="info-value">₹{tournament.prize_first + tournament.prize_second + tournament.prize_third + tournament.prize_fourth}</span>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3>Prize Distribution</h3>
            <div className="prize-list">
              <div className="prize-row">
                <span>🥇 1st Place:</span>
                <span className="prize-amount">₹{tournament.prize_first}</span>
              </div>
              <div className="prize-row">
                <span>🥈 2nd Place:</span>
                <span className="prize-amount">₹{tournament.prize_second}</span>
              </div>
              <div className="prize-row">
                <span>🥉 3rd Place:</span>
                <span className="prize-amount">₹{tournament.prize_third}</span>
              </div>
              <div className="prize-row">
                <span>4th Place:</span>
                <span className="prize-amount">₹{tournament.prize_fourth}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentDetails;

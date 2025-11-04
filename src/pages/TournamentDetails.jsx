import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './TournamentDetails.css';

const TournamentDetails = () => {
  const { id } = useParams();
  const [selectedDay, setSelectedDay] = useState(1);

  // Tournament data (in production, this would come from an API)
  const tournamentsData = {
    1: {
      id: 1,
      name: "15 Gaon Premier League 2025",
      date: "December 15-25, 2025",
      place: "Central Cricket Stadium, Satara",
      teams: 40,
      prize: "₹5,00,000",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&h=400&fit=crop",
      days: [
        {
          dayNumber: 1,
          dayName: "Day 1",
          date: "December 15, 2025",
          matches: [
            { id: 1, time: "9:00 AM", team1: "Panchgani Warriors", team2: "Khingar Royals" },
            { id: 2, time: "11:00 AM", team1: "Mahabaleshwar Panthers", team2: "Metgutad Champions" },
            { id: 3, time: "1:00 PM", team1: "Wai Tigers", team2: "Dhom Riders" },
            { id: 4, time: "3:00 PM", team1: "Satara Eagles", team2: "Powai Thunders" },
            { id: 5, time: "5:00 PM", team1: "Karad Lions", team2: "Malkapur Kings" },
            { id: 6, time: "7:00 PM", team1: "Koregaon Knights", team2: "Vaduj Victors" }
          ]
        },
        {
          dayNumber: 2,
          dayName: "Day 2",
          date: "December 16, 2025",
          matches: [
            { id: 7, time: "9:00 AM", team1: "Lonand Warriors", team2: "Khatav Spartans" },
            { id: 8, time: "11:00 AM", team1: "Phaltan Spartans", team2: "Nimbalkar Heroes" },
            { id: 9, time: "1:00 PM", team1: "Rahimatpur Royals", team2: "Mhaisal Fighters" },
            { id: 10, time: "3:00 PM", team1: "Mhaswad Hurricanes", team2: "Pusegaon Pirates" },
            { id: 11, time: "5:00 PM", team1: "Khandala Strikers", team2: "Borgaon Bullets" },
            { id: 12, time: "7:00 PM", team1: "Medha Eagles", team2: "Velhe Vipers" }
          ]
        },
        {
          dayNumber: 3,
          dayName: "Day 3",
          date: "December 17, 2025",
          matches: [
            { id: 13, time: "9:00 AM", team1: "Tasgaon Dynamos", team2: "Kavathesar Challengers" },
            { id: 14, time: "11:00 AM", team1: "Umbraj Champions", team2: "Mardhe Mavericks" },
            { id: 15, time: "1:00 PM", team1: "Javali Storm", team2: "Shinoli Strikers" },
            { id: 16, time: "3:00 PM", team1: "Panchgani Warriors", team2: "Metgutad Champions" },
            { id: 17, time: "5:00 PM", team1: "Wai Tigers", team2: "Powai Thunders" },
            { id: 18, time: "7:00 PM", team1: "Karad Lions", team2: "Vaduj Victors" }
          ]
        }
      ]
    },
    2: {
      id: 2,
      name: "Village Champions Trophy",
      date: "January 5-15, 2026",
      place: "15 Gaon Sports Complex",
      teams: 32,
      prize: "₹3,00,000",
      image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=1200&h=400&fit=crop",
      days: []
    },
    3: {
      id: 3,
      name: "Inter-Vadi Cricket Cup",
      date: "February 1-10, 2026",
      place: "Multiple Venues",
      teams: 30,
      prize: "₹2,00,000",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&h=400&fit=crop",
      days: []
    }
  };

  const tournament = tournamentsData[id];

  if (!tournament) {
    return (
      <div className="tournament-details-page">
        <div className="container">
          <div className="not-found">
            <h2>Tournament Not Found</h2>
            <Link to="/" className="btn-back">← Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="tournament-details-page">
      {/* Hero Section */}
      <div className="tournament-hero" style={{ backgroundImage: `url(${tournament.image})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <Link to="/" className="back-link">← Back to Home</Link>
          <h1>{tournament.name}</h1>
          <div className="tournament-meta">
            <span className="meta-item">📅 {tournament.date}</span>
            <span className="meta-item">📍 {tournament.place}</span>
            <span className="meta-item">🏏 {tournament.teams} Teams</span>
            <span className="meta-item">🏆 {tournament.prize}</span>
          </div>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="container">
        <div className="schedule-section">
          <h2 className="section-title">
            <span className="title-icon">📅</span>
            Tournament Schedule
          </h2>

          {tournament.days && tournament.days.length > 0 ? (
            <>
              {/* Day Tabs */}
              <div className="day-tabs">
                {tournament.days.map((day) => (
                  <button
                    key={day.dayNumber}
                    className={`day-tab ${selectedDay === day.dayNumber ? 'active' : ''}`}
                    onClick={() => setSelectedDay(day.dayNumber)}
                  >
                    <span className="day-icon">📅</span>
                    <span className="day-tab-name">{day.dayName}</span>
                    <span className="day-tab-date">{day.date}</span>
                  </button>
                ))}
              </div>

              {/* Selected Day Content */}
              {tournament.days
                .filter(day => day.dayNumber === selectedDay)
                .map(day => (
                  <div key={day.dayNumber} className="day-content">
                    <div className="day-info-header">
                      <h3>{day.dayName} Schedule</h3>
                      <p className="day-subtitle">{day.date} • {day.matches.length} Matches • 12 Teams</p>
                    </div>

                    {/* All Matches for this Day */}
                    <div className="matches-grid-simple">
                      {day.matches.map((match) => (
                        <div key={match.id} className="match-card-simple">
                          <div className="match-time-header">
                            <span className="time-icon">🕐</span>
                            <span className="match-time-text">{match.time}</span>
                          </div>
                          
                          <div className="match-teams-vs">
                            <div className="team-box">
                              <div className="team-name-simple">{match.team1}</div>
                            </div>
                            <div className="vs-divider">
                              <span className="vs-text">VS</span>
                            </div>
                            <div className="team-box">
                              <div className="team-name-simple">{match.team2}</div>
                            </div>
                          </div>

                          <div className="match-venue-simple">
                            <span className="venue-icon">📍</span>
                            <span>Central Ground</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </>
          ) : (
            <div className="no-lots">
              <div className="no-lots-icon">🎰</div>
              <h3>Schedule Coming Soon</h3>
              <p>The tournament schedule will be announced soon. Stay tuned!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TournamentDetails;

import React, { useState } from 'react';
import './TeamPages.css';

const PrideOf15Gao = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const pridePlayers = [
    { 
      id: 1, 
      name: 'Rohit Deshmukh', 
      role: 'All-rounder', 
      achievement: 'Best Player 2024', 
      village: 'Village 7',
      stats: '850 runs, 45 wickets',
      image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&h=400&fit=crop',
      bio: 'Exceptional all-rounder who consistently delivers match-winning performances.',
      highlights: ['5 Man of the Match awards', '2 centuries', 'Best economy rate']
    },
    { 
      id: 2, 
      name: 'Sagar Pawar', 
      role: 'Batsman', 
      achievement: 'Highest Run Scorer', 
      village: 'Village 3',
      stats: '1200 runs',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Elegant batsman known for aggressive stroke play and consistency.',
      highlights: ['3 centuries', 'Highest individual score: 156', 'Average: 65.5']
    },
    { 
      id: 3, 
      name: 'Akash Jadhav', 
      role: 'Bowler', 
      achievement: 'Most Wickets 2024', 
      village: 'Village 11',
      stats: '67 wickets',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'Lethal fast bowler with ability to take wickets at crucial moments.',
      highlights: ['2 five-wicket hauls', 'Best figures: 6/22', 'Economy: 4.8']
    },
    { 
      id: 4, 
      name: 'Mayur Shinde', 
      role: 'Wicket-keeper', 
      achievement: 'Best Keeper', 
      village: 'Village 5',
      stats: '45 catches, 12 stumpings',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Agile wicket-keeper with lightning-fast reflexes behind the stumps.',
      highlights: ['Zero dropped catches', '5 catches in single match', '500 runs']
    },
    { 
      id: 5, 
      name: 'Pratik Mane', 
      role: 'Batsman', 
      achievement: 'Century Maker', 
      village: 'Village 14',
      stats: '3 centuries',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
      bio: 'Stylish batsman who thrives under pressure situations.',
      highlights: ['Fastest century: 45 balls', 'Strike rate: 145', '850 total runs']
    },
    { 
      id: 6, 
      name: 'Vaibhav Kale', 
      role: 'Bowler', 
      achievement: 'Hat-trick Hero', 
      village: 'Village 2',
      stats: '2 hat-tricks',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      bio: 'Crafty spin bowler who deceives batsmen with variations.',
      highlights: ['2 match-winning hat-tricks', '48 wickets', 'Economy: 5.2']
    },
  ];

  return (
    <div className="team-page pride-page">
      <div className="page-header">
        <div className="header-background"></div>
        <div className="header-content">
          <h1 className="animate-fade-in">Pride of 15 Gao</h1>
          <p className="animate-fade-in-delay">Celebrating our star performers</p>
        </div>
      </div>

      <div className="container">
        <div className="team-intro">
          <p>
            These outstanding players have brought glory to the 15 Gaon Cricket Federation through 
            their exceptional performances, dedication, and sportsmanship. They are the pride of 
            their villages and inspiration for aspiring cricketers.
          </p>
        </div>

        <div className="pride-grid">
          {pridePlayers.map(player => (
            <div 
              key={player.id} 
              className={`pride-card ${selectedPlayer === player.id ? 'selected' : ''}`}
              onClick={() => setSelectedPlayer(selectedPlayer === player.id ? null : player.id)}
            >
              <div className="pride-image">
                <img src={player.image} alt={player.name} />
                <div className="pride-overlay">
                  <div className="achievement-badge">🏆 {player.achievement}</div>
                </div>
              </div>
              <div className="pride-content">
                <h3>{player.name}</h3>
                <div className="role">{player.role}</div>
                <div className="stats">📊 {player.stats}</div>
                <div className="village">{player.village}</div>
                {selectedPlayer === player.id && (
                  <div className="player-details">
                    <p className="bio">{player.bio}</p>
                    <div className="highlights">
                      <h4>Career Highlights:</h4>
                      <ul>
                        {player.highlights.map((highlight, index) => (
                          <li key={index}>✓ {highlight}</li>
                        ))}
                      </ul>
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

export default PrideOf15Gao;

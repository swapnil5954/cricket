import React, { useState } from 'react';
import './TeamPages.css';

const UmpirePanel = () => {
  const [selectedUmpire, setSelectedUmpire] = useState(null);

  const umpires = [
    { 
      id: 1, 
      name: 'Anil Kale', 
      level: 'Level 3 Certified', 
      experience: '15 years', 
      village: 'Village 4', 
      image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&h=400&fit=crop',
      matches: 150,
      bio: 'Senior umpire with extensive experience in national-level matches.'
    },
    { 
      id: 2, 
      name: 'Deepak Mane', 
      level: 'Level 3 Certified', 
      experience: '12 years', 
      village: 'Village 9', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      matches: 130,
      bio: 'Known for fair decisions and excellent match management skills.'
    },
    { 
      id: 3, 
      name: 'Sanjay Rao', 
      level: 'Level 2 Certified', 
      experience: '8 years', 
      village: 'Village 6', 
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      matches: 95,
      bio: 'Dedicated umpire focusing on youth cricket development.'
    },
    { 
      id: 4, 
      name: 'Kiran Bhosale', 
      level: 'Level 2 Certified', 
      experience: '7 years', 
      village: 'Village 11', 
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      matches: 80,
      bio: 'Precision and consistency in every decision made.'
    },
    { 
      id: 5, 
      name: 'Sunil Gaikwad', 
      level: 'Level 2 Certified', 
      experience: '6 years', 
      village: 'Village 2', 
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
      matches: 70,
      bio: 'Rising umpire with keen eye for detail and fair play.'
    },
    { 
      id: 6, 
      name: 'Vishal Salvi', 
      level: 'Level 1 Certified', 
      experience: '4 years', 
      village: 'Village 13', 
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      matches: 45,
      bio: 'New generation umpire bringing fresh perspective to the game.'
    },
  ];

  return (
    <div className="team-page">
      <div className="page-header">
        <div className="header-background"></div>
        <div className="header-content">
          <h1 className="animate-fade-in">Umpire Panel</h1>
          <p className="animate-fade-in-delay">Our certified umpires ensuring fair play</p>
        </div>
      </div>

      <div className="container">
        <div className="team-intro">
          <p>
            Our umpire panel consists of trained and certified officials who ensure that all matches 
            are conducted fairly and according to the rules. Each umpire has undergone rigorous 
            training and certification processes to maintain the highest standards of officiating.
          </p>
        </div>

        <div className="team-grid">
          {umpires.map(umpire => (
            <div 
              key={umpire.id} 
              className={`team-card ${selectedUmpire === umpire.id ? 'selected' : ''}`}
              onClick={() => setSelectedUmpire(selectedUmpire === umpire.id ? null : umpire.id)}
            >
              <div className="team-image">
                <img src={umpire.image} alt={umpire.name} />
                <div className="team-overlay">
                  <div className="position-badge">{umpire.level}</div>
                </div>
              </div>
              <div className="team-info">
                <h3>{umpire.name}</h3>
                <div className="position">{umpire.level}</div>
                <div className="experience">Experience: {umpire.experience}</div>
                <div className="village">{umpire.village}</div>
                {selectedUmpire === umpire.id && (
                  <div className="member-details">
                    <p className="bio">{umpire.bio}</p>
                    <div className="stats">
                      <span className="stat-badge">🏏 {umpire.matches} Matches</span>
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

export default UmpirePanel;

import React, { useState } from 'react';
import './TeamPages.css';

const Commentators = () => {
  const [selectedCommentator, setSelectedCommentator] = useState(null);

  const commentators = [
    { 
      id: 1, 
      name: 'Nitin Mestry', 
      language: 'Marathi & Hindi', 
      experience: '12 years', 
      village: 'Village 3', 
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      matches: 140,
      bio: 'Versatile commentator bringing excitement to every match in multiple languages.'
    },
    { 
      id: 2, 
      name: 'Ajay Chavan', 
      language: 'Marathi & English', 
      experience: '8 years', 
      village: 'Village 9', 
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      matches: 95,
      bio: 'Dynamic commentary style engaging audiences across demographics.'
    },
    { 
      id: 3, 
      name: 'Mohan Kamble', 
      language: 'Marathi', 
      experience: '6 years', 
      village: 'Village 6', 
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
      matches: 70,
      bio: 'Passionate about cricket with deep knowledge of the game.'
    },
    { 
      id: 4, 
      name: 'Satish Wagh', 
      language: 'Hindi', 
      experience: '5 years', 
      village: 'Village 15', 
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      matches: 60,
      bio: 'Energetic commentary keeping spectators engaged throughout matches.'
    },
  ];

  return (
    <div className="team-page">
      <div className="page-header">
        <div className="header-background"></div>
        <div className="header-content">
          <h1 className="animate-fade-in">Commentators</h1>
          <p className="animate-fade-in-delay">Bringing matches to life with engaging commentary</p>
        </div>
      </div>

      <div className="container">
        <div className="team-intro">
          <p>
            Our experienced commentators provide live commentary for all major matches, making the 
            game more engaging and accessible to spectators. They bring expertise, enthusiasm, and 
            deep knowledge of cricket to every match they cover.
          </p>
        </div>

        <div className="team-grid">
          {commentators.map(commentator => (
            <div 
              key={commentator.id} 
              className={`team-card ${selectedCommentator === commentator.id ? 'selected' : ''}`}
              onClick={() => setSelectedCommentator(selectedCommentator === commentator.id ? null : commentator.id)}
            >
              <div className="team-image">
                <img src={commentator.image} alt={commentator.name} />
                <div className="team-overlay">
                  <div className="position-badge">Commentator</div>
                </div>
              </div>
              <div className="team-info">
                <h3>{commentator.name}</h3>
                <div className="position">Languages: {commentator.language}</div>
                <div className="experience">Experience: {commentator.experience}</div>
                <div className="village">{commentator.village}</div>
                {selectedCommentator === commentator.id && (
                  <div className="member-details">
                    <p className="bio">{commentator.bio}</p>
                    <div className="stats">
                      <span className="stat-badge">🎤 {commentator.matches} Matches</span>
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

export default Commentators;

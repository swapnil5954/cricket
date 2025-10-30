import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [selectedVillage, setSelectedVillage] = useState(null);

  return (
    <div className="about-page">
      <div className="page-header">
        <div className="header-background"></div>
        <div className="header-content">
          <h1 className="animate-fade-in">About Us</h1>
          <p className="animate-fade-in-delay">Know more about 15 Gaon Cricket Federation</p>
        </div>
      </div>

      <div className="container">
        {/* Mission Vision with images */}
        <section className="mission-vision">
          <div className="mv-card">
            <div className="mv-image">
              <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=400&fit=crop" alt="Mission" />
              <div className="mv-overlay">
                <div className="mv-icon">🎯</div>
              </div>
            </div>
            <div className="mv-content">
              <h2>Our Mission</h2>
              <p>
                To promote cricket at the grassroots level across 15 villages, 
                providing equal opportunities for all aspiring cricketers to 
                showcase their talent and grow in the sport. We aim to create 
                a professional and competitive cricket ecosystem that nurtures 
                future champions.
              </p>
            </div>
          </div>
          <div className="mv-card">
            <div className="mv-image">
              <img src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=600&h=400&fit=crop" alt="Vision" />
              <div className="mv-overlay">
                <div className="mv-icon">👁️</div>
              </div>
            </div>
            <div className="mv-content">
              <h2>Our Vision</h2>
              <p>
                To become the leading village-level cricket federation in the 
                region, recognized for excellence in organization, fairness in 
                competition, and commitment to player development. We envision 
                a future where talent from our villages reaches national and 
                international platforms.
              </p>
            </div>
          </div>
        </section>

        {/* History with side image */}
        <section className="history">
          <div className="section-header">
            <h2>Our Journey</h2>
            <div className="underline"></div>
          </div>
          <div className="history-content-wrapper">
            <div className="history-image">
              <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&h=700&fit=crop" alt="Our Journey" />
              <div className="timeline-badge">
                <span className="badge-year">Est. 2015</span>
              </div>
            </div>
            <div className="history-content">
              <p>
                The 15 Gaon Cricket Federation was established with a vision to 
                unite cricket enthusiasts from 15 villages under one umbrella. 
                What started as a small initiative has grown into a well-organized 
                federation that conducts regular tournaments, maintains professional 
                standards, and provides a platform for rural talent.
              </p>
              <p>
                Over the years, we have successfully organized numerous tournaments, 
                trained hundreds of players, and built a strong network of umpires, 
                scorers, and commentators. Our federation is built on the principles 
                of fair play, transparency, and equal opportunity for all.
              </p>
              <div className="milestones">
                <div className="milestone-item">
                  <div className="milestone-year">2015</div>
                  <div className="milestone-text">Federation Established</div>
                </div>
                <div className="milestone-item">
                  <div className="milestone-year">2018</div>
                  <div className="milestone-text">First Championship</div>
                </div>
                <div className="milestone-item">
                  <div className="milestone-year">2020</div>
                  <div className="milestone-text">500+ Players Registered</div>
                </div>
                <div className="milestone-item">
                  <div className="milestone-year">2024</div>
                  <div className="milestone-text">10th Anniversary</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section with hover effects */}
        <section className="values">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <div className="underline"></div>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-image">
                <img src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=400&h=300&fit=crop" alt="Fair Play" />
              </div>
              <div className="value-content">
                <div className="value-icon">⚖️</div>
                <h3>Fair Play</h3>
                <p>We believe in maintaining the highest standards of fairness and sportsmanship</p>
              </div>
            </div>
            <div className="value-card">
              <div className="value-image">
                <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=300&fit=crop" alt="Unity" />
              </div>
              <div className="value-content">
                <div className="value-icon">🤝</div>
                <h3>Unity</h3>
                <p>Bringing together 15 villages through the common love of cricket</p>
              </div>
            </div>
            <div className="value-card">
              <div className="value-image">
                <img src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=400&h=300&fit=crop" alt="Excellence" />
              </div>
              <div className="value-content">
                <div className="value-icon">🎓</div>
                <h3>Excellence</h3>
                <p>Striving for excellence in every aspect of the game</p>
              </div>
            </div>
            <div className="value-card">
              <div className="value-image">
                <img src="https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=400&h=300&fit=crop" alt="Development" />
              </div>
              <div className="value-content">
                <div className="value-icon">🌱</div>
                <h3>Development</h3>
                <p>Committed to continuous development of players and infrastructure</p>
              </div>
            </div>
            <div className="value-card">
              <div className="value-image">
                <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop" alt="Integrity" />
              </div>
              <div className="value-content">
                <div className="value-icon">💪</div>
                <h3>Integrity</h3>
                <p>Maintaining transparency and honesty in all our operations</p>
              </div>
            </div>
            <div className="value-card">
              <div className="value-image">
                <img src="https://images.unsplash.com/photo-1512719994953-eabf50895df7?w=400&h=300&fit=crop" alt="Passion" />
              </div>
              <div className="value-content">
                <div className="value-icon">❤️</div>
                <h3>Passion</h3>
                <p>Driven by genuine passion for the sport of cricket</p>
              </div>
            </div>
          </div>
        </section>

        {/* Structure Section */}
        <section className="structure">
          <div className="section-header">
            <h2>Federation Structure</h2>
            <div className="underline"></div>
          </div>
          <div className="structure-grid">
            <div className="structure-item">
              <div className="structure-icon">👔</div>
              <h3>Executive Committee</h3>
              <p>Manages overall operations and strategic decisions</p>
            </div>
            <div className="structure-item">
              <div className="structure-icon">⚙️</div>
              <h3>Technical Committee</h3>
              <p>Oversees technical aspects and rule enforcement</p>
            </div>
            <div className="structure-item">
              <div className="structure-icon">⚖️</div>
              <h3>Umpire Panel</h3>
              <p>Certified umpires ensuring fair judgment</p>
            </div>
            <div className="structure-item">
              <div className="structure-icon">📊</div>
              <h3>Scorer Panel</h3>
              <p>Professional scorers maintaining accurate records</p>
            </div>
            <div className="structure-item">
              <div className="structure-icon">🎤</div>
              <h3>Commentator Team</h3>
              <p>Experienced commentators providing live coverage</p>
            </div>
            <div className="structure-item">
              <div className="structure-icon">👥</div>
              <h3>Player Representatives</h3>
              <p>Elected player representatives from all villages</p>
            </div>
          </div>
        </section>

        {/* Villages Section with interactive map */}
        <section className="villages">
          <div className="section-header">
            <h2>Our 15 Villages</h2>
            <div className="underline"></div>
          </div>
          <div className="villages-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(num => (
              <div 
                key={num} 
                className={`village-card ${selectedVillage === num ? 'selected' : ''}`}
                onClick={() => setSelectedVillage(selectedVillage === num ? null : num)}
              >
                <div className="village-number">{num}</div>
                <p>Village {num}</p>
                {selectedVillage === num && (
                  <div className="village-info">
                    <span className="info-item">🏏 Active Players: {20 + num * 3}</span>
                    <span className="info-item">🏆 Championships: {num % 3}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Stats Banner */}
        <section className="stats-banner">
          <div className="stats-banner-content">
            <div className="stat-item">
              <div className="stat-icon">🏏</div>
              <div className="stat-info">
                <div className="stat-value">500+</div>
                <div className="stat-label">Active Players</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🏆</div>
              <div className="stat-info">
                <div className="stat-value">150+</div>
                <div className="stat-label">Matches Played</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🎓</div>
              <div className="stat-info">
                <div className="stat-value">50+</div>
                <div className="stat-label">Training Sessions</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">⭐</div>
              <div className="stat-info">
                <div className="stat-value">100%</div>
                <div className="stat-label">Commitment</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

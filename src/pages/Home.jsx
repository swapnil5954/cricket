import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredGalleryItem, setHoveredGalleryItem] = useState(null);
  const [galleryInView, setGalleryInView] = useState(false);

  // Hero carousel images
  const heroSlides = [
    {
      title: "Welcome to 15 Gaon Cricket Federation",
      subtitle: "Uniting 15 villages through the spirit of cricket",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1600&h=900&fit=crop"
    },
    {
      title: "Professional Cricket at Village Level",
      subtitle: "World-class facilities and training",
      image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=1600&h=900&fit=crop"
    },
    {
      title: "Join Our Growing Community",
      subtitle: "500+ players, 15 villages, one passion",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1600&h=900&fit=crop"
    }
  ];

  // Auto-slide carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Animated counter for stats
  const [stats, setStats] = useState({
    villages: 0,
    players: 0,
    matches: 0,
    years: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) observer.observe(statsSection);

    return () => {
      if (statsSection) observer.unobserve(statsSection);
    };
  }, []);

  // Gallery animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setGalleryInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const gallerySection = document.querySelector('.gallery-preview');
    if (gallerySection) observer.observe(gallerySection);

    return () => {
      if (gallerySection) observer.unobserve(gallerySection);
    };
  }, []);

  useEffect(() => {
    if (statsVisible) {
      // Animate villages
      let villageCount = 0;
      const villageInterval = setInterval(() => {
        if (villageCount < 15) {
          villageCount++;
          setStats(prev => ({ ...prev, villages: villageCount }));
        } else {
          clearInterval(villageInterval);
        }
      }, 50);

      // Animate players
      let playerCount = 0;
      const playerInterval = setInterval(() => {
        if (playerCount < 500) {
          playerCount += 10;
          setStats(prev => ({ ...prev, players: Math.min(playerCount, 500) }));
        } else {
          clearInterval(playerInterval);
        }
      }, 20);

      // Animate matches
      let matchCount = 0;
      const matchInterval = setInterval(() => {
        if (matchCount < 50) {
          matchCount += 2;
          setStats(prev => ({ ...prev, matches: Math.min(matchCount, 50) }));
        } else {
          clearInterval(matchInterval);
        }
      }, 40);

      // Animate years
      let yearCount = 0;
      const yearInterval = setInterval(() => {
        if (yearCount < 10) {
          yearCount++;
          setStats(prev => ({ ...prev, years: yearCount }));
        } else {
          clearInterval(yearInterval);
        }
      }, 100);
    }
  }, [statsVisible]);

  const upcomingMatches = [
    {
      id: 1,
      team1: "Village 3",
      team2: "Village 7",
      date: "Oct 25, 2025",
      time: "2:00 PM",
      venue: "Main Ground"
    },
    {
      id: 2,
      team1: "Village 12",
      team2: "Village 5",
      date: "Oct 27, 2025",
      time: "3:00 PM",
      venue: "Central Stadium"
    },
    {
      id: 3,
      team1: "Village 8",
      team2: "Village 15",
      date: "Oct 29, 2025",
      time: "2:30 PM",
      venue: "Sports Complex"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rohit Sharma",
      role: "Player, Village 7",
      text: "This federation has given me a platform to showcase my talent. The organization is top-notch!",
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "Priya Deshmukh",
      role: "Umpire",
      text: "Professional environment and excellent support for umpires. Proud to be part of this federation.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "Amit Pawar",
      role: "Coach, Village 3",
      text: "Amazing initiative! We've seen tremendous growth in young talent from our villages.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Annual Tournament 2024",
      category: "Tournament",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&h=500&fit=crop",
      description: "Highlights from our biggest tournament of the year"
    },
    {
      id: 2,
      title: "Training Sessions",
      category: "Training",
      image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=500&h=500&fit=crop",
      description: "Professional coaching and skill development"
    },
    {
      id: 3,
      title: "Championship Final",
      category: "Match",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&h=500&fit=crop",
      description: "The thrilling finale of the season"
    },
    {
      id: 4,
      title: "Team Celebrations",
      category: "Event",
      image: "https://images.unsplash.com/photo-1512719994953-eabf50895df7?w=500&h=500&fit=crop",
      description: "Victory moments and team spirit"
    },
    {
      id: 5,
      title: "Youth Training Camp",
      category: "Training",
      image: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=500&h=500&fit=crop",
      description: "Nurturing the next generation of cricketers"
    },
    {
      id: 6,
      title: "Awards Ceremony",
      category: "Event",
      image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=500&h=500&fit=crop",
      description: "Recognizing outstanding performances"
    }
  ];

  return (
    <div className="home">
      {/* Hero Carousel Section */}
      <section className="hero-carousel">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1 className="hero-title animate-fade-in">
                {slide.title}
              </h1>
              <p className="hero-description animate-fade-in-delay">
                {slide.subtitle}
              </p>
              {index === currentSlide && (
                <div className="hero-buttons animate-fade-in-delay-2">
                  <Link to="/registration" className="btn btn-primary">Register Now</Link>
                  <Link to="/about" className="btn btn-secondary">Learn More</Link>
                </div>
              )}
            </div>
          </div>
        ))}
        
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Carousel Controls */}
        <button 
          className="carousel-control prev" 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
        >
          ❮
        </button>
        <button 
          className="carousel-control next" 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        >
          ❯
        </button>
      </section>

      {/* Animated Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{stats.villages}</div>
              <div className="stat-label">Villages</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.players}+</div>
              <div className="stat-label">Players</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.matches}+</div>
              <div className="stat-label">Matches</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.years}+</div>
              <div className="stat-label">Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Matches Section */}
      <section className="upcoming-matches">
        <div className="container">
          <div className="section-header">
            <h2>Upcoming Matches</h2>
            <div className="underline"></div>
          </div>
          <div className="matches-grid">
            {upcomingMatches.map(match => (
              <div key={match.id} className="match-card">
                <div className="match-date">
                  <span className="date">{match.date}</span>
                  <span className="time">{match.time}</span>
                </div>
                <div className="match-teams">
                  <div className="team">{match.team1}</div>
                  <div className="vs">VS</div>
                  <div className="team">{match.team2}</div>
                </div>
                <div className="match-venue">
                  📍 {match.venue}
                </div>
                <button className="btn-match-details">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview with Image */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1512719994953-eabf50895df7?w=600&h=800&fit=crop" 
                alt="Cricket Federation"
              />
              <div className="image-badge">
                <span className="badge-icon">🏆</span>
                <span className="badge-text">10+ Years</span>
              </div>
            </div>
            <div className="about-text">
              <div className="section-header">
                <h2>About Our Federation</h2>
                <div className="underline"></div>
              </div>
              <p>
                The 15 Gaon Cricket Federation is a pioneering initiative that brings 
                together cricket enthusiasts from 15 villages to promote the sport at 
                the grassroots level. Our mission is to identify and nurture talent, 
                organize competitive tournaments, and create a platform for aspiring 
                cricketers to showcase their skills.
              </p>
              <p>
                Through our structured programs and dedicated committees, we ensure 
                fair play, professional umpiring, accurate scoring, and engaging 
                commentary for all our matches.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Professional Training</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Certified Umpires</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>Modern Facilities</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-link">Read More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Features with Images */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>What We Offer</h2>
            <div className="underline"></div>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=400&h=300&fit=crop" alt="Tournaments" />
              </div>
              <div className="feature-content">
                <div className="feature-icon">🏆</div>
                <h3>Tournaments</h3>
                <p>Regular cricket tournaments with teams from all 15 villages</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=400&h=300&fit=crop" alt="Training" />
              </div>
              <div className="feature-content">
                <div className="feature-icon">👨‍🏫</div>
                <h3>Training Programs</h3>
                <p>Professional coaching and skill development sessions</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=400&h=300&fit=crop" alt="Umpires" />
              </div>
              <div className="feature-content">
                <div className="feature-icon">⚖️</div>
                <h3>Certified Umpires</h3>
                <p>Trained and certified umpire panel for fair judgment</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop" alt="Scoring" />
              </div>
              <div className="feature-content">
                <div className="feature-icon">📊</div>
                <h3>Professional Scoring</h3>
                <p>Accurate scoring and match statistics management</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=400&h=300&fit=crop" alt="Commentary" />
              </div>
              <div className="feature-content">
                <div className="feature-icon">🎤</div>
                <h3>Live Commentary</h3>
                <p>Engaging commentary by experienced commentators</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=300&fit=crop" alt="Recognition" />
              </div>
              <div className="feature-content">
                <div className="feature-icon">🌟</div>
                <h3>Recognition</h3>
                <p>Awards and recognition for outstanding performers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Community Says</h2>
            <div className="underline"></div>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Preview */}
      <section className="gallery-preview">
        <div className="container">
          <div className="section-header">
            <h2>Gallery Highlights</h2>
            <p className="section-subtitle">Capturing memorable moments from our cricket journey</p>
            <div className="underline"></div>
          </div>
          
          <div className="gallery-grid-preview">
            {galleryItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`gallery-item-preview ${galleryInView ? 'animate-in' : ''}`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  '--item-index': index 
                }}
                onMouseEnter={() => setHoveredGalleryItem(item.id)}
                onMouseLeave={() => setHoveredGalleryItem(null)}
              >
                <div className="gallery-image-container">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="gallery-category-badge">{item.category}</div>
                </div>
                
                <div className={`gallery-overlay-preview ${hoveredGalleryItem === item.id ? 'hovered' : ''}`}>
                  <div className="gallery-content">
                    <span className="gallery-icon">📸</span>
                    <h3>{item.title}</h3>
                    <p className="gallery-description">{item.description}</p>
                    <div className="gallery-action">
                      <span>View Image</span>
                      <span className="arrow">→</span>
                    </div>
                  </div>
                </div>

                {hoveredGalleryItem === item.id && (
                  <div className="gallery-shine"></div>
                )}
              </div>
            ))}
          </div>
          
          <div className="gallery-cta">
            <Link to="/gallery" className="btn btn-primary-gradient">
              <span>View Full Gallery</span>
              <span className="btn-icon">→</span>
            </Link>
            <p className="gallery-cta-text">Explore 200+ photos from our events</p>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="cta-section">
        <div className="cta-background"></div>
        <div className="cta-pattern"></div>
        <div className="container">
          <div className="cta-content">
            <div className="cta-badge">
              <span className="badge-pulse"></span>
              <span className="badge-text">🏏 Join Our Community</span>
            </div>
            
            <h2 className="cta-title">Ready to Join Us?</h2>
            <p className="cta-description">
              Become part of the 15 Gaon Cricket Federation family. Register as a player, 
              umpire, scorer, or commentator and take your cricket journey to the next level!
            </p>
            
            <div className="cta-options">
              <div className="cta-option">
                <div className="cta-option-icon">🏏</div>
                <h3>As a Player</h3>
                <p>Show your skills on the field</p>
              </div>
              <div className="cta-option">
                <div className="cta-option-icon">⚖️</div>
                <h3>As an Umpire</h3>
                <p>Ensure fair play</p>
              </div>
              <div className="cta-option">
                <div className="cta-option-icon">📊</div>
                <h3>As a Scorer</h3>
                <p>Keep accurate records</p>
              </div>
              <div className="cta-option">
                <div className="cta-option-icon">🎤</div>
                <h3>As a Commentator</h3>
                <p>Bring matches to life</p>
              </div>
            </div>

            <div className="cta-actions">
              <Link to="/registration" className="btn btn-cta-primary">
                <span>Register Now</span>
                <span className="btn-arrow">→</span>
              </Link>
              <Link to="/about" className="btn btn-cta-secondary">
                <span>Learn More</span>
              </Link>
            </div>

            <div className="cta-stats">
              <div className="cta-stat">
                <span className="cta-stat-number">500+</span>
                <span className="cta-stat-label">Active Members</span>
              </div>
              <div className="cta-stat-divider"></div>
              <div className="cta-stat">
                <span className="cta-stat-number">15</span>
                <span className="cta-stat-label">Villages United</span>
              </div>
              <div className="cta-stat-divider"></div>
              <div className="cta-stat">
                <span className="cta-stat-number">10+</span>
                <span className="cta-stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

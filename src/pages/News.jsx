import React, { useState } from 'react';
import './News.css';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedNews, setExpandedNews] = useState(null);

  const newsData = [
    {
      id: 1,
      title: 'Annual Tournament 2025 Kicks Off',
      date: 'October 15, 2025',
      category: 'tournament',
      excerpt: 'The much-awaited annual tournament commenced with great enthusiasm as all 15 villages gathered for the opening ceremony. Over 500 players participated in the inaugural match...',
      fullContent: 'The much-awaited annual tournament commenced with great enthusiasm as all 15 villages gathered for the opening ceremony. The event was graced by local dignitaries and cricket legends. Over 500 players participated in making this one of the biggest cricket events in the region.',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=400&fit=crop',
      author: 'Sports Desk'
    },
    {
      id: 2,
      title: 'New Training Program Launched',
      date: 'October 10, 2025',
      category: 'training',
      excerpt: 'Federation introduces comprehensive training program for aspiring cricketers with professional coaches from renowned cricket academies...',
      fullContent: 'The federation has launched a state-of-the-art training program with professional coaches from renowned cricket academies. The program includes specialized coaching for batting, bowling, and fielding.',
      image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=600&h=400&fit=crop',
      author: 'Training Committee'
    },
    {
      id: 3,
      title: 'Player Registration Extended',
      date: 'October 5, 2025',
      category: 'announcement',
      excerpt: 'Due to overwhelming response, player registration deadline has been extended till October 30th. Don\'t miss this opportunity...',
      fullContent: 'Due to overwhelming response from aspiring cricketers across all 15 villages, the federation has decided to extend player registration deadline till October 30th. New players can register online or visit their village representatives.',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=400&fit=crop',
      author: 'Admin Team'
    },
    {
      id: 4,
      title: 'Village 7 Wins Inter-Village Championship',
      date: 'September 28, 2025',
      category: 'results',
      excerpt: 'In a thrilling final match, Village 7 defeated Village 3 by 25 runs to claim the championship title in front of thousands of spectators...',
      fullContent: 'In a thrilling final match that kept spectators on the edge of their seats, Village 7 defeated Village 3 by 25 runs to claim the inter-village championship title. The match witnessed exceptional performances from both teams.',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=400&fit=crop',
      author: 'Match Reporter'
    },
    {
      id: 5,
      title: 'New Umpiring Standards Implemented',
      date: 'September 20, 2025',
      category: 'announcement',
      excerpt: 'Federation adopts international umpiring standards to ensure fair play and professional conduct in all matches...',
      fullContent: 'The federation has adopted international umpiring standards to ensure fair play and professional conduct. All umpires will undergo certification training. This move aligns with our commitment to excellence.',
      image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=600&h=400&fit=crop',
      author: 'Technical Committee'
    },
    {
      id: 6,
      title: 'Youth Cricket Camp Announced',
      date: 'September 15, 2025',
      category: 'training',
      excerpt: 'Special cricket camp for youth players aged 12-18 will be organized during winter break with expert coaches...',
      fullContent: 'A special cricket camp for youth players aged 12-18 will be organized during winter break. The camp will feature expert coaches, modern training facilities, and competitive practice matches.',
      image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=600&h=400&fit=crop',
      author: 'Youth Development'
    },
    {
      id: 7,
      title: 'Record Breaking Match: 350+ Runs Scored',
      date: 'September 10, 2025',
      category: 'results',
      excerpt: 'Village 12 sets new record by scoring 356 runs in a 40-over match against Village 9...',
      fullContent: 'In an extraordinary display of batting prowess, Village 12 set a new federation record by scoring 356 runs in a 40-over match. The innings included 8 sixes and numerous boundaries.',
      image: 'https://images.unsplash.com/photo-1512719994953-eabf50895df7?w=600&h=400&fit=crop',
      author: 'Stats Team'
    },
    {
      id: 8,
      title: 'New Cricket Ground Inauguration',
      date: 'September 5, 2025',
      category: 'announcement',
      excerpt: 'State-of-the-art cricket ground with modern facilities inaugurated in Village 14...',
      fullContent: 'A brand new state-of-the-art cricket ground with modern facilities was inaugurated in Village 14. The ground features professional pitch, pavilion, and spectator seating for 2000 people.',
      image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=600&h=400&fit=crop',
      author: 'Infrastructure Team'
    }
  ];

  const categories = [
    { id: 'all', name: 'All News', icon: '📰' },
    { id: 'tournament', name: 'Tournaments', icon: '🏆' },
    { id: 'training', name: 'Training', icon: '🎓' },
    { id: 'announcement', name: 'Announcements', icon: '📢' },
    { id: 'results', name: 'Results', icon: '🏅' }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? newsData 
    : newsData.filter(news => news.category === selectedCategory);

  const toggleExpand = (id) => {
    setExpandedNews(expandedNews === id ? null : id);
  };

  return (
    <div className="news-page">
      <div className="page-header">
        <div className="header-background"></div>
        <div className="header-content">
          <h1 className="animate-fade-in">News & Updates</h1>
          <p className="animate-fade-in-delay">Stay updated with latest news from 15 Gaon Cricket Federation</p>
        </div>
      </div>

      <div className="container">
        {/* Filter Tabs */}
        <div className="news-filter">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(cat.id);
                setExpandedNews(null);
              }}
            >
              <span className="filter-icon">{cat.icon}</span>
              <span className="filter-text">{cat.name}</span>
              <span className="filter-count">
                {cat.id === 'all' ? newsData.length : newsData.filter(n => n.category === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="news-grid">
          {filteredNews.map(news => (
            <div 
              key={news.id} 
              className={`news-card ${expandedNews === news.id ? 'expanded' : ''}`}
            >
              <div className="news-image">
                <img src={news.image} alt={news.title} />
                <div className="news-image-overlay">
                  <span className={`news-category-badge ${news.category}`}>
                    {news.category}
                  </span>
                </div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-date">📅 {news.date}</span>
                  <span className="news-author">✍️ {news.author}</span>
                </div>
                <h3>{news.title}</h3>
                <p className="news-excerpt">
                  {expandedNews === news.id ? news.fullContent : news.excerpt}
                </p>
                <button 
                  className="read-more"
                  onClick={() => toggleExpand(news.id)}
                >
                  {expandedNews === news.id ? '← Read Less' : 'Read More →'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">📰</div>
            <h3>No news found in this category</h3>
            <p>Check back later for updates</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;

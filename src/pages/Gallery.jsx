import React, { useState, useEffect } from 'react';
import { fetchGallery } from '../services/api';
import './Gallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    try {
      setLoading(true);
      const data = await fetchGallery();
      // Transform API data to match component expectations
      const transformedData = data.map(img => ({
        id: img.gallery_id,
        category: img.category.toLowerCase(),
        title: img.title,
        image: img.image_url,
        date: img.upload_date || 'Recent'
      }));
      setGalleryData(transformedData);
    } catch (error) {
      console.error('Error loading gallery:', error);
    } finally {
      setLoading(false);
    }
  };

  // galleryData now fetched from API in useEffect above
  
  const oldGalleryData = [
    { 
      id: 1, 
      category: 'tournaments', 
      title: 'Annual Tournament 2024 Finals', 
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=800&fit=crop',
      date: 'Dec 2024'
    },
    { 
      id: 2, 
      category: 'training', 
      title: 'Youth Training Camp', 
      image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=800&h=800&fit=crop',
      date: 'Nov 2024'
    },
    { 
      id: 3, 
      category: 'ceremonies', 
      title: 'Opening Ceremony 2024', 
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=800&fit=crop',
      date: 'Oct 2024'
    },
    { 
      id: 4, 
      category: 'tournaments', 
      title: 'Championship Final Match', 
      image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&h=800&fit=crop',
      date: 'Sep 2024'
    },
    { 
      id: 5, 
      category: 'teams', 
      title: 'Village 7 Champions Team', 
      image: 'https://images.unsplash.com/photo-1512719994953-eabf50895df7?w=800&h=800&fit=crop',
      date: 'Sep 2024'
    },
    { 
      id: 6, 
      category: 'training', 
      title: 'Professional Coaching Session', 
      image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=800&h=800&fit=crop',
      date: 'Aug 2024'
    },
    { 
      id: 7, 
      category: 'ceremonies', 
      title: 'Award Distribution Event', 
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=800&fit=crop',
      date: 'Aug 2024'
    },
    { 
      id: 8, 
      category: 'teams', 
      title: 'Umpire Panel 2024', 
      image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=800&h=800&fit=crop',
      date: 'Jul 2024'
    },
    { 
      id: 9, 
      category: 'tournaments', 
      title: 'Semi-Final Action Shot', 
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=800&fit=crop',
      date: 'Jul 2024'
    },
    { 
      id: 10, 
      category: 'ceremonies', 
      title: 'Federation 10th Anniversary', 
      image: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&h=800&fit=crop',
      date: 'Jun 2024'
    },
    { 
      id: 11, 
      category: 'teams', 
      title: 'Scorer Team in Action', 
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop',
      date: 'Jun 2024'
    },
    { 
      id: 12, 
      category: 'training', 
      title: 'Bowling Practice Session', 
      image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=800&h=800&fit=crop',
      date: 'May 2024'
    },
    { 
      id: 13, 
      category: 'tournaments', 
      title: 'Quarter Finals - Intense Moment', 
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=800&fit=crop&sat=-100',
      date: 'May 2024'
    },
    { 
      id: 14, 
      category: 'teams', 
      title: 'All Village Captains Meet', 
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=800&fit=crop',
      date: 'Apr 2024'
    },
    { 
      id: 15, 
      category: 'ceremonies', 
      title: 'Player Registration Day', 
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=800&h=800&fit=crop',
      date: 'Mar 2024'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Photos', icon: '🖼️', count: galleryData.length },
    { id: 'tournaments', name: 'Tournaments', icon: '🏆', count: galleryData.filter(i => i.category === 'tournaments').length },
    { id: 'training', name: 'Training', icon: '🏏', count: galleryData.filter(i => i.category === 'training').length },
    { id: 'teams', name: 'Teams', icon: '👥', count: galleryData.filter(i => i.category === 'teams').length },
    { id: 'ceremonies', name: 'Ceremonies', icon: '🎉', count: galleryData.filter(i => i.category === 'ceremonies').length }
  ];

  const filteredGallery = selectedCategory === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === selectedCategory);

  const openLightbox = (item) => {
    setLightboxImage(item);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredGallery.findIndex(item => item.id === lightboxImage.id);
    const nextIndex = (currentIndex + 1) % filteredGallery.length;
    setLightboxImage(filteredGallery[nextIndex]);
  };

  const previousImage = () => {
    const currentIndex = filteredGallery.findIndex(item => item.id === lightboxImage.id);
    const prevIndex = (currentIndex - 1 + filteredGallery.length) % filteredGallery.length;
    setLightboxImage(filteredGallery[prevIndex]);
  };

  return (
    <div className="gallery-page">
      <div className="page-header">
        <div className="header-background"></div>
        <div className="header-content">
          <h1 className="animate-fade-in">Gallery</h1>
          <p className="animate-fade-in-delay">Moments captured from our cricket journey</p>
        </div>
      </div>

      <div className="container">
        {/* Filter Tabs */}
        <div className="gallery-filter">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span className="filter-icon">{cat.icon}</span>
              <span className="filter-text">{cat.name}</span>
              <span className="filter-count">{cat.count}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredGallery.map(item => (
            <div 
              key={item.id} 
              className="gallery-item"
              onClick={() => openLightbox(item)}
            >
              <div className="gallery-image-wrapper">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h3>{item.title}</h3>
                    <p className="gallery-date">📅 {item.date}</p>
                    <div className="view-icon">👁️ View</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); previousImage(); }}>
            ❮
          </button>
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            ❯
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage.image} alt={lightboxImage.title} />
            <div className="lightbox-info">
              <h3>{lightboxImage.title}</h3>
              <p>{lightboxImage.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

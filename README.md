<<<<<<< HEAD
<<<<<<< HEAD
# cricket
=======
# Getting Started with Create React App
=======
# 15 Gaon Cricket Federation Website
>>>>>>> db476bf (first commit)

A modern, responsive, and dynamic website for the 15 Gaon Cricket Federation built with React and Vite.

## 🏏 Features

- **Modern UI/UX**: Beautiful and responsive design that works on all devices
- **Interactive Homepage**:
  - Auto-playing image carousel with 3 rotating hero images
  - Animated statistics counters (count-up animation on scroll)
  - Smooth hover effects and transitions
  - Image zoom effects on gallery items
  - Real cricket images from Unsplash
  - Upcoming matches section
  - Testimonials with photos
  - Interactive feature cards
  
- **Multiple Pages**:
  - Home - Landing page with hero section and features
  - About - Information about the federation
  - News & Updates - Latest news with filtering
  - Gallery - Photo gallery with category filters
  - Committee - Executive committee members
  - Umpire Panel - Certified umpires
  - Scorer Panel - Professional scorers
  - Commentators - Expert commentators
  - Pride of 15 Gao - Star performers
  - Registration - Multi-type registration (Player/Umpire/Scorer/Commentator)
  - Login - User authentication page

- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Dynamic Content**: Filterable news and gallery sections
- **Professional Design**: Cricket-themed color scheme with orange (#f7941d) and blue (#1e3c72)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
cricket/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx / Home.css
│   │   ├── About.jsx / About.css
│   │   ├── News.jsx / News.css
│   │   ├── Gallery.jsx / Gallery.css
│   │   ├── Committee.jsx
│   │   ├── UmpirePanel.jsx
│   │   ├── ScorerPanel.jsx
│   │   ├── Commentators.jsx
│   │   ├── PrideOf15Gao.jsx
│   │   ├── TeamPages.css
│   │   ├── Registration.jsx / Registration.css
│   │   └── Login.jsx / Login.css
│   ├── assets/
│   │   ├── images/
│   │   └── data/
│   ├── App.jsx
│   ├── App.css
│   ├── index.jsx
│   └── index.css
├── public/
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   └── manifest.json
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Adding the Federation Logo

To add the cricket federation logo to your website:

1. Save your logo image (the one you shared) to `src/assets/images/logo.png`

2. Update the Navbar component to display the logo:

```jsx
// In src/components/Navbar.jsx
import logo from '../assets/images/logo.png';

// Replace the logo-container div with:
<img src={logo} alt="15 Gaon Cricket Federation" className="nav-logo-img" />
```

3. Add CSS for the logo in `src/components/Navbar.css`:

```css
.nav-logo-img {
  height: 60px;
  width: auto;
}
```

## 🎯 Customization

### Colors

The main color scheme is defined throughout the CSS files:
- Primary Blue: `#1e3c72`
- Secondary Blue: `#2a5298`
- Primary Orange: `#f7941d`
- Accent Orange: `#ff6b35`

### Adding Real Images

Currently, the website uses emoji placeholders. To add real images:

1. Place images in `src/assets/images/`
2. Import and use them in your components:

<<<<<<< HEAD
This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> eea80fa (Initialize project using Create React App)
=======
```jsx
import heroImage from '../assets/images/hero.jpg';
<img src={heroImage} alt="Description" />
```

## 🔧 Technologies Used

- **React 19.2.0** - UI library
- **Vite 5.4.2** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **CSS3** - Styling with modern features (Grid, Flexbox, Gradients)

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px
- Small Mobile: < 480px

## 🌟 Future Enhancements

- Backend integration for registration and login
- Database for storing player, umpire, scorer, and commentator data
- Live match scores and updates
- Real-time commentary
- Admin dashboard
- Photo/video upload functionality
- Match scheduling system
- Player statistics tracking
- Tournament management system

## 📄 License

This project is created for the 15 Gaon Cricket Federation.

## 👥 Contact

For any queries related to the 15 Gaon Cricket Federation website, please contact:
- Email: info@15gaoncricket.com
- Phone: +91 98765 43210

---

**Developed with ❤️ for Cricket**
# cricket
>>>>>>> db476bf (first commit)

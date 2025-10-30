# 📸 Image Guide for 15 Gaon Cricket Federation Website

## Current Status

Your website now uses **high-quality stock cricket images from Unsplash** as placeholders. These images look professional and make your website fully functional right away!

## 🎯 Images Used

The homepage now includes:

1. **Hero Carousel (3 rotating images)**
   - Cricket match action shots
   - Stadium views
   - Team celebrations

2. **About Section**
   - Cricket team photo

3. **Feature Cards (6 images)**
   - Tournaments
   - Training sessions
   - Umpiring
   - Scoring
   - Commentary
   - Team recognition

4. **Testimonials (3 profile images)**
   - Player, Umpire, Coach photos

5. **Gallery Preview (4 images)**
   - Tournament highlights
   - Training sessions
   - Championship finals
   - Team celebrations

## 🔄 How to Replace with Your Own Images

### Step 1: Prepare Your Images

1. **Collect your photos** from actual cricket matches, training sessions, etc.
2. **Recommended sizes:**
   - Hero images: 1600x900px (16:9 ratio)
   - Feature cards: 400x300px
   - About section: 600x800px
   - Gallery: 500x500px (square)
   - Profile photos: 150x150px (square)

3. **Optimize images:**
   - Use formats: JPG, PNG, or WebP
   - Compress for web (aim for under 500KB per image)
   - Tools: TinyPNG.com, Squoosh.app, or Photoshop

### Step 2: Add Images to Project

Save your images in the project:

```
src/assets/images/
├── hero/
│   ├── hero-1.jpg
│   ├── hero-2.jpg
│   └── hero-3.jpg
├── features/
│   ├── tournament.jpg
│   ├── training.jpg
│   ├── umpires.jpg
│   ├── scoring.jpg
│   ├── commentary.jpg
│   └── recognition.jpg
├── about/
│   └── about-main.jpg
├── gallery/
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   └── gallery-4.jpg
└── team/
    ├── member-1.jpg
    ├── member-2.jpg
    └── member-3.jpg
```

### Step 3: Update the Code

#### Replace Hero Carousel Images

In `src/pages/Home.jsx`, find this section and update:

```jsx
// OLD (current):
const heroSlides = [
  {
    title: "Welcome to 15 Gaon Cricket Federation",
    subtitle: "Uniting 15 villages through the spirit of cricket",
    image: "https://images.unsplash.com/photo-..."
  },
  // ... more slides
];

// NEW (with your images):
import hero1 from '../assets/images/hero/hero-1.jpg';
import hero2 from '../assets/images/hero/hero-2.jpg';
import hero3 from '../assets/images/hero/hero-3.jpg';

const heroSlides = [
  {
    title: "Welcome to 15 Gaon Cricket Federation",
    subtitle: "Uniting 15 villages through the spirit of cricket",
    image: hero1
  },
  {
    title: "Professional Cricket at Village Level",
    subtitle: "World-class facilities and training",
    image: hero2
  },
  {
    title: "Join Our Growing Community",
    subtitle: "500+ players, 15 villages, one passion",
    image: hero3
  }
];
```

#### Replace Feature Card Images

```jsx
// At the top of Home.jsx, add imports:
import tournamentImg from '../assets/images/features/tournament.jpg';
import trainingImg from '../assets/images/features/training.jpg';
import umpiresImg from '../assets/images/features/umpires.jpg';
import scoringImg from '../assets/images/features/scoring.jpg';
import commentaryImg from '../assets/images/features/commentary.jpg';
import recognitionImg from '../assets/images/features/recognition.jpg';

// Then in the JSX, replace:
<img src={tournamentImg} alt="Tournaments" />
<img src={trainingImg} alt="Training" />
// ... and so on
```

#### Replace About Section Image

```jsx
import aboutImg from '../assets/images/about/about-main.jpg';

// Replace:
<img src={aboutImg} alt="Cricket Federation" />
```

#### Replace Gallery Preview Images

```jsx
import gallery1 from '../assets/images/gallery/gallery-1.jpg';
import gallery2 from '../assets/images/gallery/gallery-2.jpg';
import gallery3 from '../assets/images/gallery/gallery-3.jpg';
import gallery4 from '../assets/images/gallery/gallery-4.jpg';

// Replace in JSX:
<img src={gallery1} alt="Tournament" />
<img src={gallery2} alt="Training" />
<img src={gallery3} alt="Match" />
<img src={gallery4} alt="Team" />
```

#### Replace Testimonial Photos

```jsx
import player1 from '../assets/images/team/member-1.jpg';
import player2 from '../assets/images/team/member-2.jpg';
import player3 from '../assets/images/team/member-3.jpg';

const testimonials = [
  {
    id: 1,
    name: "Your Player Name",
    role: "Player, Village 7",
    text: "Your testimonial text...",
    image: player1
  },
  // ... more testimonials
];
```

## 🎨 Alternative: Keep Using Unsplash (Easy Option)

If you want to keep using professional stock photos:

1. **Browse Unsplash for cricket photos:**
   - Visit: https://unsplash.com/s/photos/cricket
   - Find images you like
   - Right-click → Copy image address
   - Replace the URLs in the code

2. **Get the right size:**
   - Add `?w=WIDTH&h=HEIGHT&fit=crop` to the URL
   - Example: `https://images.unsplash.com/photo-XXX?w=1600&h=900&fit=crop`

## 💡 Quick Tips

### 1. For Federation Logo
Save your logo (the one you showed) to:
```
src/assets/images/logo.png
```

Then update Navbar:
```jsx
import logo from '../assets/images/logo.png';

// In Navbar component:
<img src={logo} alt="15 Gaon Cricket Federation" className="nav-logo-img" />
```

### 2. Lazy Loading (Performance)
For better performance, images load on demand!

### 3. Image Optimization Services
- **TinyPNG**: https://tinypng.com
- **Squoosh**: https://squoosh.app
- **ImageOptim**: https://imageoptim.com

### 4. Free Stock Cricket Photos
- **Unsplash**: https://unsplash.com/s/photos/cricket
- **Pexels**: https://www.pexels.com/search/cricket/
- **Pixabay**: https://pixabay.com/images/search/cricket/

## 🚀 Current Features

Your homepage now has:

✅ **Auto-playing image carousel** (changes every 5 seconds)  
✅ **Animated statistics counters** (numbers count up when you scroll to them)  
✅ **Smooth hover effects** on all cards  
✅ **Image zoom on hover** for gallery items  
✅ **Responsive design** - works perfectly on mobile  
✅ **Professional testimonials** with photos  
✅ **Upcoming matches section** with interactive cards  
✅ **Gallery preview** with overlay effects  

## 📱 Mobile Responsive

All images automatically adjust for:
- Desktop (large screens)
- Tablet (medium screens)
- Mobile (small screens)

## 🎥 Future Enhancements

Consider adding:
- Video section for match highlights
- Photo upload feature for gallery
- Live match score updates
- Player profile photos
- Tournament bracket images

---

**Note**: The current Unsplash images are free to use and look professional. You can launch your website with these and gradually replace them with your own photos as you collect them!


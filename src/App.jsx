import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Committee from './pages/Committee';
import UmpirePanel from './pages/UmpirePanel';
import ScorerPanel from './pages/ScorerPanel';
import Commentators from './pages/Commentators';
import PrideOf15Gao from './pages/PrideOf15Gao';
import Tournaments from './pages/Tournaments';
import AllTeams from './pages/AllTeams';
import Villages from './pages/Villages';
import Registration from './pages/Registration';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/all-teams" element={<AllTeams />} />
            <Route path="/villages" element={<Villages />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/umpire-panel" element={<UmpirePanel />} />
            <Route path="/scorer-panel" element={<ScorerPanel />} />
            <Route path="/commentators" element={<Commentators />} />
            <Route path="/pride-of-15-gao" element={<PrideOf15Gao />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

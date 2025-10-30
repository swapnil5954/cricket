import React, { useState } from 'react';
import './AllTeams.css';

const AllTeams = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVillage, setSelectedVillage] = useState('all');

  // Generate 40 teams (2-3 teams per village)
  const teamImages = [
    'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1512719994953-eabf50895df7?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop'
  ];

  const teams = [
    // Village 1
    { id: 1, name: 'Village 1 Warriors', village: 'Village 1', captain: 'Rajesh Kumar', players: 15, wins: 12, image: teamImages[0] },
    { id: 2, name: 'Village 1 Tigers', village: 'Village 1', captain: 'Ashok Shinde', players: 14, wins: 10, image: teamImages[1] },
    
    // Village 2
    { id: 3, name: 'Village 2 Panthers', village: 'Village 2', captain: 'Varun Desai', players: 15, wins: 11, image: teamImages[2] },
    { id: 4, name: 'Village 2 Strikers', village: 'Village 2', captain: 'Santosh Kulkarni', players: 13, wins: 8, image: teamImages[3] },
    
    // Village 3
    { id: 5, name: 'Village 3 Tigers', village: 'Village 3', captain: 'Sagar Pawar', players: 16, wins: 15, image: teamImages[4] },
    { id: 6, name: 'Village 3 Lions', village: 'Village 3', captain: 'Prakash Desai', players: 15, wins: 13, image: teamImages[5] },
    { id: 7, name: 'Village 3 Royals', village: 'Village 3', captain: 'Nitin Mestry', players: 14, wins: 9, image: teamImages[6] },
    
    // Village 4
    { id: 8, name: 'Village 4 Eagles', village: 'Village 4', captain: 'Anil Kale', players: 15, wins: 10, image: teamImages[7] },
    { id: 9, name: 'Village 4 Challengers', village: 'Village 4', captain: 'Kiran Bhosale', players: 14, wins: 8, image: teamImages[0] },
    
    // Village 5
    { id: 10, name: 'Village 5 Lions', village: 'Village 5', captain: 'Mayur Shinde', players: 16, wins: 14, image: teamImages[1] },
    { id: 11, name: 'Village 5 Chargers', village: 'Village 5', captain: 'Pradeep Joshi', players: 15, wins: 12, image: teamImages[2] },
    { id: 12, name: 'Village 5 Rangers', village: 'Village 5', captain: 'Suresh Patil', players: 14, wins: 10, image: teamImages[3] },
    
    // Village 6
    { id: 13, name: 'Village 6 Knights', village: 'Village 6', captain: 'Sanjay Rao', players: 15, wins: 11, image: teamImages[4] },
    { id: 14, name: 'Village 6 Defenders', village: 'Village 6', captain: 'Mohan Kamble', players: 14, wins: 9, image: teamImages[5] },
    
    // Village 7
    { id: 15, name: 'Village 7 Warriors', village: 'Village 7', captain: 'Rohit Deshmukh', players: 17, wins: 16, image: teamImages[6] },
    { id: 16, name: 'Village 7 Gladiators', village: 'Village 7', captain: 'Mahesh Jadhav', players: 15, wins: 13, image: teamImages[7] },
    { id: 17, name: 'Village 7 Crusaders', village: 'Village 7', captain: 'Rahul Dange', players: 14, wins: 11, image: teamImages[0] },
    
    // Village 8
    { id: 18, name: 'Village 8 Spartans', village: 'Village 8', captain: 'Amit Sharma', players: 15, wins: 12, image: teamImages[1] },
    { id: 19, name: 'Village 8 Titans', village: 'Village 8', captain: 'Sachin Kadam', players: 14, wins: 10, image: teamImages[2] },
    
    // Village 9
    { id: 20, name: 'Village 9 Royals', village: 'Village 9', captain: 'Deepak Mane', players: 15, wins: 11, image: teamImages[3] },
    { id: 21, name: 'Village 9 Mavericks', village: 'Village 9', captain: 'Ajay Chavan', players: 14, wins: 9, image: teamImages[4] },
    
    // Village 10
    { id: 22, name: 'Village 10 Hurricanes', village: 'Village 10', captain: 'Ramesh More', players: 15, wins: 10, image: teamImages[5] },
    { id: 23, name: 'Village 10 Thunders', village: 'Village 10', captain: 'Vishal Salvi', players: 14, wins: 8, image: teamImages[6] },
    
    // Village 11
    { id: 24, name: 'Village 11 Strikers', village: 'Village 11', captain: 'Akash Jadhav', players: 16, wins: 14, image: teamImages[7] },
    { id: 25, name: 'Village 11 Blazers', village: 'Village 11', captain: 'Kiran Bhosale', players: 15, wins: 12, image: teamImages[0] },
    
    // Village 12
    { id: 26, name: 'Village 12 Eagles', village: 'Village 12', captain: 'Vijay Naik', players: 16, wins: 15, image: teamImages[1] },
    { id: 27, name: 'Village 12 Falcons', village: 'Village 12', captain: 'Nilesh Parab', players: 15, wins: 13, image: teamImages[2] },
    { id: 28, name: 'Village 12 Hawks', village: 'Village 12', captain: 'Sachin Kamble', players: 14, wins: 10, image: teamImages[3] },
    
    // Village 13
    { id: 29, name: 'Village 13 Dynamos', village: 'Village 13', captain: 'Vishal Salvi', players: 15, wins: 11, image: teamImages[4] },
    { id: 30, name: 'Village 13 Tornadoes', village: 'Village 13', captain: 'Sunil Gaikwad', players: 14, wins: 9, image: teamImages[5] },
    
    // Village 14
    { id: 31, name: 'Village 14 Champions', village: 'Village 14', captain: 'Pratik Mane', players: 16, wins: 14, image: teamImages[6] },
    { id: 32, name: 'Village 14 Legends', village: 'Village 14', captain: 'Ganesh Pawar', players: 15, wins: 12, image: teamImages[7] },
    { id: 33, name: 'Village 14 Achievers', village: 'Village 14', captain: 'Nikhil Patil', players: 14, wins: 10, image: teamImages[0] },
    
    // Village 15
    { id: 34, name: 'Village 15 Storm', village: 'Village 15', captain: 'Satish Wagh', players: 15, wins: 11, image: teamImages[1] },
    { id: 35, name: 'Village 15 Cyclones', village: 'Village 15', captain: 'Vaibhav Kale', players: 14, wins: 9, image: teamImages[2] },
    
    // Additional teams to reach 40
    { id: 36, name: 'Village 1 Challengers', village: 'Village 1', captain: 'Ravi Patil', players: 13, wins: 7, image: teamImages[3] },
    { id: 37, name: 'Village 2 Dynamos', village: 'Village 2', captain: 'Suraj More', players: 13, wins: 7, image: teamImages[4] },
    { id: 38, name: 'Village 4 Warriors', village: 'Village 4', captain: 'Aniket Desai', players: 13, wins: 6, image: teamImages[5] },
    { id: 39, name: 'Village 6 Titans', village: 'Village 6', captain: 'Prasad Shinde', players: 13, wins: 6, image: teamImages[6] },
    { id: 40, name: 'Village 10 Rangers', village: 'Village 10', captain: 'Rohan Naik', players: 13, wins: 5, image: teamImages[7] },
  ];

  const villages = ['all', ...Array.from(new Set(teams.map(t => t.village)))];

  const filteredTeams = teams.filter(team => {
    const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         team.captain.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVillage = selectedVillage === 'all' || team.village === selectedVillage;
    return matchesSearch && matchesVillage;
  });

  return (
    <div className="all-teams-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-background"></div>
        <div className="header-content">
          <h1 className="animate-fade-in">All Teams</h1>
          <p className="animate-fade-in-delay">Complete list of 40 teams across 15 villages</p>
        </div>
      </div>

      <div className="container">
        {/* Stats Summary */}
        <div className="summary-stats">
          <div className="stat-box">
            <div className="stat-number">{teams.length}</div>
            <div className="stat-label">Total Teams</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">15</div>
            <div className="stat-label">Villages</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{teams.reduce((sum, t) => sum + t.players, 0)}</div>
            <div className="stat-label">Total Players</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{teams.reduce((sum, t) => sum + t.wins, 0)}</div>
            <div className="stat-label">Matches Won</div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="🔍 Search teams or captains..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="village-filter">
            <select value={selectedVillage} onChange={(e) => setSelectedVillage(e.target.value)}>
              {villages.map(village => (
                <option key={village} value={village}>
                  {village === 'all' ? 'All Villages' : village}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Teams Grid */}
        <div className="all-teams-grid">
          {filteredTeams.map(team => (
            <div key={team.id} className="team-item-card">
              <div className="team-image">
                <img src={team.image} alt={team.name} />
                <div className="team-overlay">
                  <div className="team-number">#{team.id}</div>
                  <div className="village-badge">{team.village}</div>
                </div>
              </div>
              <div className="team-body">
                <h3 className="team-title">{team.name}</h3>
                <div className="team-details">
                  <div className="detail-row">
                    <span className="detail-label">👨‍✈️ Captain:</span>
                    <span className="detail-value">{team.captain}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">👥 Players:</span>
                    <span className="detail-value">{team.players}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">🏆 Wins:</span>
                    <span className="detail-value">{team.wins}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTeams.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No teams found</h3>
            <p>Try adjusting your search or filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTeams;


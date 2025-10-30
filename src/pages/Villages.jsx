import React, { useState } from 'react';
import './Villages.css';

const Villages = () => {
  const [expandedVillage, setExpandedVillage] = useState(null);
  const [expandedTeam, setExpandedTeam] = useState(null);

  const villageImages = [
    'https://images.unsplash.com/photo-1541872705-1f73c6400ec9?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1490682143684-14369e18dce8?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1503891617560-5b8c2e28cbf6?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1512719994953-eabf50895df7?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=600&h=400&fit=crop'
  ];

  const villagesData = [
    {
      id: 1,
      name: 'Village 1',
      population: 2500,
      image: villageImages[0],
      teams: [
        {
          name: 'Village 1 Warriors',
          captain: 'Rajesh Kumar',
          players: [
            'Rajesh Kumar (C)', 'Ashok Shinde', 'Ravi Patil', 'Sunil Jadhav', 'Amit Desai',
            'Prakash More', 'Vinod Naik', 'Sachin Kale', 'Rahul Pawar', 'Nitin Salve',
            'Anil Bhosale', 'Deepak Kamble', 'Ganesh Wagh', 'Mohan Kulkarni', 'Vijay Mane'
          ]
        },
        {
          name: 'Village 1 Tigers',
          captain: 'Ashok Shinde',
          players: [
            'Ashok Shinde (C)', 'Pradeep Dange', 'Sanjay Rao', 'Kiran Patil', 'Rohit Deshmukh',
            'Mayur Shinde', 'Akash More', 'Vaibhav Naik', 'Satish Pawar', 'Mahesh Kulkarni',
            'Suresh Mane', 'Ramesh Jadhav', 'Santosh Bhosale', 'Vishal Kamble'
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Village 2',
      population: 2300,
      image: villageImages[1],
      teams: [
        {
          name: 'Village 2 Panthers',
          captain: 'Varun Desai',
          players: [
            'Varun Desai (C)', 'Santosh Kulkarni', 'Prakash Patil', 'Anil More', 'Deepak Shinde',
            'Sachin Naik', 'Rahul Pawar', 'Vijay Jadhav', 'Mohan Kale', 'Sunil Bhosale',
            'Ganesh Kamble', 'Ramesh Wagh', 'Mahesh Kulkarni', 'Rohit Mane', 'Akash Salve'
          ]
        },
        {
          name: 'Village 2 Strikers',
          captain: 'Santosh Kulkarni',
          players: [
            'Santosh Kulkarni (C)', 'Pradeep Desai', 'Sanjay Patil', 'Kiran More', 'Ashok Shinde',
            'Mayur Naik', 'Vaibhav Pawar', 'Satish Jadhav', 'Nitin Kulkarni', 'Suresh Bhosale',
            'Vishal Kamble', 'Rajesh Wagh', 'Amit Mane'
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'Village 3',
      population: 3200,
      image: villageImages[2],
      teams: [
        {
          name: 'Village 3 Tigers',
          captain: 'Sagar Pawar',
          players: [
            'Sagar Pawar (C)', 'Prakash Desai', 'Nitin Mestry', 'Anil Shinde', 'Rohit Patil',
            'Deepak More', 'Sachin Naik', 'Vijay Jadhav', 'Mohan Kale', 'Sunil Bhosale',
            'Ganesh Kamble', 'Ramesh Wagh', 'Mahesh Kulkarni', 'Varun Mane', 'Akash Salve', 'Mayur Deshmukh'
          ]
        },
        {
          name: 'Village 3 Lions',
          captain: 'Prakash Desai',
          players: [
            'Prakash Desai (C)', 'Santosh Pawar', 'Pradeep Shinde', 'Sanjay Patil', 'Kiran More',
            'Ashok Naik', 'Vaibhav Jadhav', 'Satish Kale', 'Nitin Bhosale', 'Suresh Kamble',
            'Vishal Wagh', 'Rajesh Kulkarni', 'Amit Mane', 'Rohit Salve', 'Rahul Deshmukh'
          ]
        }
      ]
    },
    {
      id: 4,
      name: 'Village 4',
      population: 2100,
      image: villageImages[3],
      teams: [
        {
          name: 'Village 4 Eagles',
          captain: 'Anil Kale',
          players: [
            'Anil Kale (C)', 'Kiran Bhosale', 'Aniket Desai', 'Prakash Patil', 'Deepak More',
            'Sachin Shinde', 'Vijay Naik', 'Mohan Jadhav', 'Sunil Pawar', 'Ganesh Kulkarni',
            'Ramesh Kamble', 'Mahesh Wagh', 'Varun Mane', 'Akash Salve', 'Rohit Deshmukh'
          ]
        }
      ]
    },
    {
      id: 5,
      name: 'Village 5',
      population: 2800,
      image: villageImages[4],
      teams: [
        {
          name: 'Village 5 Lions',
          captain: 'Mayur Shinde',
          players: [
            'Mayur Shinde (C)', 'Pradeep Joshi', 'Suresh Patil', 'Nikhil Patil', 'Anil Desai',
            'Rohit More', 'Deepak Shinde', 'Sachin Naik', 'Vijay Jadhav', 'Mohan Kale',
            'Sunil Bhosale', 'Ganesh Kamble', 'Ramesh Wagh', 'Mahesh Kulkarni', 'Varun Mane', 'Akash Pawar'
          ]
        },
        {
          name: 'Village 5 Chargers',
          captain: 'Pradeep Joshi',
          players: [
            'Pradeep Joshi (C)', 'Santosh Shinde', 'Sanjay Patil', 'Kiran More', 'Ashok Naik',
            'Vaibhav Jadhav', 'Satish Kale', 'Nitin Bhosale', 'Suresh Kamble', 'Vishal Wagh',
            'Rajesh Kulkarni', 'Amit Mane', 'Rohit Salve', 'Rahul Deshmukh', 'Prakash Pawar'
          ]
        }
      ]
    },
    {
      id: 6,
      name: 'Village 6',
      population: 2400,
      image: villageImages[5],
      teams: [
        {
          name: 'Village 6 Knights',
          captain: 'Sanjay Rao',
          players: [
            'Sanjay Rao (C)', 'Mohan Kamble', 'Prasad Shinde', 'Anil Patil', 'Rohit More',
            'Deepak Desai', 'Sachin Naik', 'Vijay Jadhav', 'Mohan Kale', 'Sunil Bhosale',
            'Ganesh Kamble', 'Ramesh Wagh', 'Mahesh Kulkarni', 'Varun Mane', 'Akash Pawar'
          ]
        }
      ]
    },
    {
      id: 7,
      name: 'Village 7',
      population: 3500,
      image: villageImages[6],
      teams: [
        {
          name: 'Village 7 Warriors',
          captain: 'Rohit Deshmukh',
          players: [
            'Rohit Deshmukh (C)', 'Mahesh Jadhav', 'Rahul Dange', 'Prakash Pawar', 'Anil Shinde',
            'Deepak Patil', 'Sachin More', 'Vijay Naik', 'Mohan Jadhav', 'Sunil Kale',
            'Ganesh Bhosale', 'Ramesh Kamble', 'Mahesh Wagh', 'Varun Kulkarni', 'Akash Mane', 'Mayur Salve', 'Nitin Deshmukh'
          ]
        },
        {
          name: 'Village 7 Gladiators',
          captain: 'Mahesh Jadhav',
          players: [
            'Mahesh Jadhav (C)', 'Santosh Deshmukh', 'Sanjay Pawar', 'Kiran Shinde', 'Ashok Patil',
            'Vaibhav More', 'Satish Naik', 'Nitin Jadhav', 'Suresh Kale', 'Vishal Bhosale',
            'Rajesh Kamble', 'Amit Wagh', 'Rohit Kulkarni', 'Rahul Mane', 'Prakash Salve'
          ]
        }
      ]
    },
    {
      id: 8,
      name: 'Village 8',
      population: 2600,
      image: villageImages[7],
      teams: [
        {
          name: 'Village 8 Spartans',
          captain: 'Amit Sharma',
          players: [
            'Amit Sharma (C)', 'Sachin Kadam', 'Prakash Desai', 'Anil Patil', 'Rohit Shinde',
            'Deepak More', 'Vijay Naik', 'Mohan Jadhav', 'Sunil Pawar', 'Ganesh Kale',
            'Ramesh Bhosale', 'Mahesh Kamble', 'Varun Wagh', 'Akash Kulkarni', 'Mayur Mane'
          ]
        }
      ]
    },
    {
      id: 9,
      name: 'Village 9',
      population: 2200,
      image: villageImages[8],
      teams: [
        {
          name: 'Village 9 Royals',
          captain: 'Deepak Mane',
          players: [
            'Deepak Mane (C)', 'Ajay Chavan', 'Prakash Pawar', 'Anil Shinde', 'Rohit Patil',
            'Deepak More', 'Sachin Naik', 'Vijay Jadhav', 'Mohan Kale', 'Sunil Bhosale',
            'Ganesh Kamble', 'Ramesh Wagh', 'Mahesh Kulkarni', 'Varun Mane', 'Akash Salve'
          ]
        }
      ]
    },
    {
      id: 10,
      name: 'Village 10',
      population: 2500,
      image: villageImages[9],
      teams: [
        {
          name: 'Village 10 Hurricanes',
          captain: 'Ramesh More',
          players: [
            'Ramesh More (C)', 'Vishal Salvi', 'Rohan Naik', 'Prakash Desai', 'Anil Patil',
            'Rohit Shinde', 'Deepak Naik', 'Sachin Jadhav', 'Vijay Pawar', 'Mohan Kale',
            'Sunil Bhosale', 'Ganesh Kamble', 'Mahesh Wagh', 'Varun Kulkarni', 'Akash Mane'
          ]
        }
      ]
    },
    {
      id: 11,
      name: 'Village 11',
      population: 2700,
      image: villageImages[10],
      teams: [
        {
          name: 'Village 11 Strikers',
          captain: 'Akash Jadhav',
          players: [
            'Akash Jadhav (C)', 'Kiran Bhosale', 'Prakash Pawar', 'Anil Shinde', 'Rohit Patil',
            'Deepak More', 'Sachin Naik', 'Vijay Jadhav', 'Mohan Kale', 'Sunil Bhosale',
            'Ganesh Kamble', 'Ramesh Wagh', 'Mahesh Kulkarni', 'Varun Mane', 'Mayur Salve', 'Nitin Deshmukh'
          ]
        }
      ]
    },
    {
      id: 12,
      name: 'Village 12',
      population: 3000,
      image: villageImages[11],
      teams: [
        {
          name: 'Village 12 Eagles',
          captain: 'Vijay Naik',
          players: [
            'Vijay Naik (C)', 'Nilesh Parab', 'Sachin Kamble', 'Prakash Desai', 'Anil Patil',
            'Rohit Shinde', 'Deepak More', 'Vijay Jadhav', 'Mohan Naik', 'Sunil Pawar',
            'Ganesh Kale', 'Ramesh Bhosale', 'Mahesh Kamble', 'Varun Wagh', 'Akash Kulkarni', 'Mayur Mane'
          ]
        },
        {
          name: 'Village 12 Falcons',
          captain: 'Nilesh Parab',
          players: [
            'Nilesh Parab (C)', 'Santosh Naik', 'Sanjay Desai', 'Kiran Patil', 'Ashok Shinde',
            'Vaibhav More', 'Satish Jadhav', 'Nitin Pawar', 'Suresh Kale', 'Vishal Bhosale',
            'Rajesh Kamble', 'Amit Wagh', 'Rohit Kulkarni', 'Rahul Mane', 'Prakash Salve'
          ]
        }
      ]
    },
    {
      id: 13,
      name: 'Village 13',
      population: 2300,
      image: villageImages[12],
      teams: [
        {
          name: 'Village 13 Dynamos',
          captain: 'Vishal Salvi',
          players: [
            'Vishal Salvi (C)', 'Sunil Gaikwad', 'Prakash Pawar', 'Anil Shinde', 'Rohit Patil',
            'Deepak More', 'Sachin Naik', 'Vijay Jadhav', 'Mohan Kale', 'Sunil Bhosale',
            'Ganesh Kamble', 'Ramesh Wagh', 'Mahesh Kulkarni', 'Varun Mane', 'Akash Salve'
          ]
        }
      ]
    },
    {
      id: 14,
      name: 'Village 14',
      population: 2900,
      image: villageImages[13],
      teams: [
        {
          name: 'Village 14 Champions',
          captain: 'Pratik Mane',
          players: [
            'Pratik Mane (C)', 'Ganesh Pawar', 'Nikhil Patil', 'Prakash Desai', 'Anil Shinde',
            'Rohit Patil', 'Deepak More', 'Sachin Naik', 'Vijay Jadhav', 'Mohan Kale',
            'Sunil Bhosale', 'Ramesh Wagh', 'Mahesh Kamble', 'Varun Kulkarni', 'Akash Mane', 'Mayur Salve'
          ]
        },
        {
          name: 'Village 14 Legends',
          captain: 'Ganesh Pawar',
          players: [
            'Ganesh Pawar (C)', 'Santosh Mane', 'Sanjay Patil', 'Kiran Desai', 'Ashok Shinde',
            'Vaibhav More', 'Satish Naik', 'Nitin Jadhav', 'Suresh Pawar', 'Vishal Kale',
            'Rajesh Bhosale', 'Amit Kamble', 'Rohit Wagh', 'Rahul Kulkarni', 'Prakash Salve'
          ]
        }
      ]
    },
    {
      id: 15,
      name: 'Village 15',
      population: 2400,
      image: villageImages[14],
      teams: [
        {
          name: 'Village 15 Storm',
          captain: 'Satish Wagh',
          players: [
            'Satish Wagh (C)', 'Vaibhav Kale', 'Prakash Pawar', 'Anil Shinde', 'Rohit Patil',
            'Deepak More', 'Sachin Naik', 'Vijay Jadhav', 'Mohan Kale', 'Sunil Bhosale',
            'Ganesh Kamble', 'Ramesh Wagh', 'Mahesh Kulkarni', 'Varun Mane', 'Akash Salve'
          ]
        }
      ]
    }
  ];

  const toggleVillage = (villageId) => {
    setExpandedVillage(expandedVillage === villageId ? null : villageId);
    setExpandedTeam(null);
  };

  const toggleTeam = (teamName) => {
    setExpandedTeam(expandedTeam === teamName ? null : teamName);
  };

  return (
    <div className="villages-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-background"></div>
        <div className="header-content">
          <h1 className="animate-fade-in">15 Gaon Villages</h1>
          <p className="animate-fade-in-delay">Complete directory of villages, teams, and players</p>
        </div>
      </div>

      <div className="container">
        {/* Summary */}
        <div className="villages-summary">
          <div className="summary-card">
            <div className="summary-icon">🏘️</div>
            <div className="summary-number">{villagesData.length}</div>
            <div className="summary-label">Villages</div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">⚡</div>
            <div className="summary-number">{villagesData.reduce((sum, v) => sum + v.teams.length, 0)}</div>
            <div className="summary-label">Teams</div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">👥</div>
            <div className="summary-number">{villagesData.reduce((sum, v) => sum + v.teams.reduce((s, t) => s + t.players.length, 0), 0)}</div>
            <div className="summary-label">Players</div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🏏</div>
            <div className="summary-number">{villagesData.reduce((sum, v) => sum + v.population, 0)}</div>
            <div className="summary-label">Population</div>
          </div>
        </div>

        {/* Villages List */}
        <div className="villages-list">
          {villagesData.map(village => (
            <div key={village.id} className={`village-card ${expandedVillage === village.id ? 'expanded' : ''}`}>
              <div className="village-image">
                <img src={village.image} alt={village.name} />
                <div className="village-image-overlay"></div>
              </div>
              <div className="village-header" onClick={() => toggleVillage(village.id)}>
                <div className="village-info">
                  <h3>{village.name}</h3>
                  <div className="village-stats">
                    <span className="stat-item">👥 {village.population} people</span>
                    <span className="stat-item">⚡ {village.teams.length} teams</span>
                  </div>
                </div>
                <div className="expand-icon">{expandedVillage === village.id ? '▼' : '▶'}</div>
              </div>

              {expandedVillage === village.id && (
                <div className="village-content">
                  <div className="teams-list">
                    {village.teams.map((team, idx) => (
                      <div key={idx} className={`team-item ${expandedTeam === team.name ? 'expanded' : ''}`}>
                        <div className="team-header" onClick={() => toggleTeam(team.name)}>
                          <div className="team-info-header">
                            <h4>{team.name}</h4>
                            <p className="captain-info">👨‍✈️ Captain: {team.captain}</p>
                          </div>
                          <div className="team-expand">{expandedTeam === team.name ? '▼' : '▶'}</div>
                        </div>

                        {expandedTeam === team.name && (
                          <div className="players-list">
                            <h5>Players ({team.players.length})</h5>
                            <div className="players-grid">
                              {team.players.map((player, pIdx) => (
                                <div key={pIdx} className="player-item">
                                  <span className="player-number">{pIdx + 1}.</span>
                                  <span className="player-name">{player}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Villages;


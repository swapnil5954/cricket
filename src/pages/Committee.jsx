import React, { useState } from 'react';
import './TeamPages.css';

const Committee = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const committeeMembers = [
    { 
      id: 1, 
      name: 'Rajesh Kumar', 
      position: 'President', 
      village: 'Village 1', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Leading the federation with 15 years of cricket administration experience.',
      email: 'rajesh@15gaoncricket.com',
      phone: '+91 98765 43210'
    },
    { 
      id: 2, 
      name: 'Suresh Patil', 
      position: 'Vice President', 
      village: 'Village 5', 
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'Former state-level player dedicated to grassroots cricket development.',
      email: 'suresh@15gaoncricket.com',
      phone: '+91 98765 43211'
    },
    { 
      id: 3, 
      name: 'Amit Sharma', 
      position: 'Secretary', 
      village: 'Village 8', 
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Managing daily operations and player registrations efficiently.',
      email: 'amit@15gaoncricket.com',
      phone: '+91 98765 43212'
    },
    { 
      id: 4, 
      name: 'Prakash Desai', 
      position: 'Treasurer', 
      village: 'Village 3', 
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
      bio: 'Ensuring financial transparency and sustainable growth.',
      email: 'prakash@15gaoncricket.com',
      phone: '+91 98765 43213'
    },
    { 
      id: 5, 
      name: 'Vijay Naik', 
      position: 'Technical Head', 
      village: 'Village 12', 
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      bio: 'Overseeing all technical and coaching aspects of the federation.',
      email: 'vijay@15gaoncricket.com',
      phone: '+91 98765 43214'
    },
    { 
      id: 6, 
      name: 'Mahesh Jadhav', 
      position: 'Event Coordinator', 
      village: 'Village 7', 
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop',
      bio: 'Organizing memorable tournaments and cricket events.',
      email: 'mahesh@15gaoncricket.com',
      phone: '+91 98765 43215'
    },
    { 
      id: 7, 
      name: 'Ramesh More', 
      position: 'Media Head', 
      village: 'Village 10', 
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop',
      bio: 'Managing media relations and federation communications.',
      email: 'ramesh@15gaoncricket.com',
      phone: '+91 98765 43216'
    },
    { 
      id: 8, 
      name: 'Santosh Kulkarni', 
      position: 'Member', 
      village: 'Village 2', 
      image: 'https://images.unsplash.com/photo-1502378735452-bc7d86632805?w=400&h=400&fit=crop',
      bio: 'Contributing to strategic planning and policy making.',
      email: 'santosh@15gaoncricket.com',
      phone: '+91 98765 43217'
    },
    { 
      id: 9, 
      name: 'Ganesh Pawar', 
      position: 'Member', 
      village: 'Village 14', 
      image: 'https://images.unsplash.com/photo-1520409364224-63400afe26e5?w=400&h=400&fit=crop',
      bio: 'Supporting federation initiatives and village coordination.',
      email: 'ganesh@15gaoncricket.com',
      phone: '+91 98765 43218'
    },
  ];

  return (
    <div className="team-page">
      <div className="page-header">
        <div className="header-background"></div>
        <div className="header-content">
          <h1 className="animate-fade-in">Executive Committee</h1>
          <p className="animate-fade-in-delay">Meet our dedicated committee members</p>
        </div>
      </div>

      <div className="container">
        <div className="team-intro">
          <p>
            Our Executive Committee comprises experienced individuals from various villages who work 
            tirelessly to ensure smooth functioning of the federation. They are responsible for 
            strategic planning, policy making, and overall management of all cricket activities.
          </p>
        </div>

        <div className="team-grid">
          {committeeMembers.map(member => (
            <div 
              key={member.id} 
              className={`team-card ${selectedMember === member.id ? 'selected' : ''}`}
              onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
            >
              <div className="team-image">
                <img src={member.image} alt={member.name} />
                <div className="team-overlay">
                  <div className="position-badge">{member.position}</div>
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <div className="position">{member.position}</div>
                <div className="village">{member.village}</div>
                {selectedMember === member.id && (
                  <div className="member-details">
                    <p className="bio">{member.bio}</p>
                    <div className="contact-info">
                      <span className="contact-item">📧 {member.email}</span>
                      <span className="contact-item">📱 {member.phone}</span>
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

export default Committee;

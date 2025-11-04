import React, { useState, useEffect } from 'react';
import { fetchTournamentsWithAwards } from '../services/api';
import './Tournaments.css';

const Tournaments = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [searchQuery, setSearchQuery] = useState('');
  const [tournaments, setTournaments] = useState([]);
  const [tournamentsData, setTournamentsData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTournaments();
  }, []);

  const loadTournaments = async () => {
    try {
      setLoading(true);
      const data = await fetchTournamentsWithAwards();
      
      // Group tournaments by year
      const groupedByYear = data.reduce((acc, tournament) => {
        const year = new Date(tournament.start_date).getFullYear().toString();
        if (!acc[year]) {
          acc[year] = [];
        }
        acc[year].push(tournament);
        return acc;
      }, {});
      
      setTournamentsData(groupedByYear);
      setTournaments(data);
      
      // Set the most recent year as default
      const years = Object.keys(groupedByYear).sort((a, b) => b - a);
      if (years.length > 0) {
        setSelectedYear(years[0]);
      }
    } catch (error) {
      console.error('Error loading tournaments:', error);
      // Fallback to empty data
      setTournamentsData({});
    } finally {
      setLoading(false);
    }
  };

  // tournamentsData now fetched from API and grouped by year above
  
  // OLD hardcoded data below (keeping as reference)
  const oldTournamentsData = {
    '2024': [
    {
      id: 1,
      name: 'Annual Championship 2024',
      date: 'October 2024',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&h=600&fit=crop',
      winner: {
        team: 'Village 7 Warriors',
        captain: 'Rohit Deshmukh',
        trophy: '🏆'
      },
        topFour: [
          { name: 'Village 7 Warriors', village: 'Village 7', position: '1st', prize: '₹50,000' },
          { name: 'Village 3 Tigers', village: 'Village 3', position: '2nd', prize: '₹30,000' },
          { name: 'Village 12 Eagles', village: 'Village 12', position: '3rd', prize: '₹20,000' },
          { name: 'Village 5 Lions', village: 'Village 5', position: '4th', prize: '₹10,000' }
      ],
      awards: {
        manOfTheSeries: {
          name: 'Rohit Deshmukh',
          team: 'Village 7 Warriors',
          stats: '456 runs, 12 wickets',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
        },
        bestBatsman: {
          name: 'Sagar Pawar',
          team: 'Village 3 Tigers',
          stats: '456 runs',
          image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop'
        },
        bestBowler: {
          name: 'Akash Jadhav',
          team: 'Village 12 Eagles',
          stats: '24 wickets',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
        },
        bestFielder: {
          name: 'Mayur Shinde',
          team: 'Village 5 Lions',
          stats: '18 catches',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Vinay Bhosale',
            team: 'Village 7 Warriors',
            stats: 'Exemplary conduct',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop'
        }
      },
      matches: 12,
      totalRuns: 3450
    },
    {
      id: 2,
      name: 'Summer Cup 2024',
      date: 'June 2024',
      image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=1200&h=600&fit=crop',
      winner: {
        team: 'Village 3 Tigers',
        captain: 'Sagar Pawar',
        trophy: '🏆'
      },
        topFour: [
          { name: 'Village 3 Tigers', village: 'Village 3', position: '1st', prize: '₹40,000' },
          { name: 'Village 7 Warriors', village: 'Village 7', position: '2nd', prize: '₹25,000' },
          { name: 'Village 11 Strikers', village: 'Village 11', position: '3rd', prize: '₹15,000' },
          { name: 'Village 14 Champions', village: 'Village 14', position: '4th', prize: '₹8,000' }
      ],
      awards: {
        manOfTheSeries: {
          name: 'Sagar Pawar',
          team: 'Village 3 Tigers',
          stats: '398 runs, 18 wickets',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
        },
        bestBatsman: {
          name: 'Pratik Mane',
          team: 'Village 14 Champions',
          stats: '398 runs',
          image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop'
        },
        bestBowler: {
          name: 'Vaibhav Kale',
          team: 'Village 3 Tigers',
          stats: '21 wickets',
          image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop'
        },
        bestFielder: {
          name: 'Rohit Deshmukh',
          team: 'Village 7 Warriors',
          stats: '15 catches',
          image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Deepak Surve',
            team: 'Village 11 Strikers',
            stats: 'Outstanding sportsmanship',
            image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop'
        }
      },
      matches: 10,
      totalRuns: 2980
    },
    {
      id: 3,
      name: 'Monsoon Premier League 2024',
      date: 'August 2024',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&h=600&fit=crop',
      winner: {
        team: 'Village 12 Eagles',
        captain: 'Akash Jadhav',
        trophy: '🏆'
      },
        topFour: [
          { name: 'Village 12 Eagles', village: 'Village 12', position: '1st', prize: '₹45,000' },
          { name: 'Village 5 Lions', village: 'Village 5', position: '2nd', prize: '₹28,000' },
          { name: 'Village 2 Panthers', village: 'Village 2', position: '3rd', prize: '₹18,000' },
          { name: 'Village 9 Royals', village: 'Village 9', position: '4th', prize: '₹9,000' }
      ],
      awards: {
        bestBatsman: {
          name: 'Nikhil Patil',
          team: 'Village 5 Lions',
          stats: '412 runs',
          image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop'
        },
        bestBowler: {
          name: 'Sachin Kamble',
          team: 'Village 12 Eagles',
          stats: '26 wickets',
          image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop'
        },
        bestFielder: {
          name: 'Varun Desai',
          team: 'Village 2 Panthers',
          stats: '20 catches',
          image: 'https://images.unsplash.com/photo-1502378735452-bc7d86632805?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Sanjay Pawar',
            team: 'Village 5 Lions',
            stats: 'Fair play champion',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
        }
      },
      matches: 11,
      totalRuns: 3120
      },
      {
        id: 4,
        name: 'Spring Festival Cup 2024',
        date: 'March 2024',
        image: 'https://images.unsplash.com/photo-1593766827228-8737b4534aa6?w=1200&h=600&fit=crop',
        winner: {
          team: 'Village 1 Challengers',
          captain: 'Rahul Sharma',
          trophy: '🏆'
        },
        topFour: [
          { name: 'Village 1 Challengers', village: 'Village 1', position: '1st', prize: '₹35,000' },
          { name: 'Village 8 Knights', village: 'Village 8', position: '2nd', prize: '₹22,000' },
          { name: 'Village 4 Bulldogs', village: 'Village 4', position: '3rd', prize: '₹14,000' },
          { name: 'Village 6 Rhinos', village: 'Village 6', position: '4th', prize: '₹7,000' }
        ],
        awards: {
          bestBatsman: {
            name: 'Sunil Wagh',
            team: 'Village 1 Challengers',
            stats: '378 runs',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
          },
          bestBowler: {
            name: 'Mahesh Joshi',
            team: 'Village 8 Knights',
            stats: '19 wickets',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
          },
          bestFielder: {
            name: 'Anil Kamble',
            team: 'Village 4 Bulldogs',
            stats: '16 catches',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Prakash Kulkarni',
            team: 'Village 6 Rhinos',
            stats: 'Spirit of the game',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop'
          }
        },
        matches: 9,
        totalRuns: 2650
      },
      {
        id: 5,
        name: 'Victory Day Tournament 2024',
        date: 'May 2024',
        image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=1200&h=600&fit=crop',
        winner: {
          team: 'Village 10 Gladiators',
          captain: 'Amol Patil',
          trophy: '🏆'
        },
        topFour: [
          { name: 'Village 10 Gladiators', village: 'Village 10', position: '1st', prize: '₹38,000' },
          { name: 'Village 15 Titans', village: 'Village 15', position: '2nd', prize: '₹24,000' },
          { name: 'Village 6 Rhinos', village: 'Village 6', position: '3rd', prize: '₹15,000' },
          { name: 'Village 9 Royals', village: 'Village 9', position: '4th', prize: '₹8,000' }
        ],
        awards: {
          bestBatsman: {
            name: 'Vishal Bhosale',
            team: 'Village 15 Titans',
            stats: '434 runs',
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop'
          },
          bestBowler: {
            name: 'Tushar Deshmukh',
            team: 'Village 10 Gladiators',
            stats: '25 wickets',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop'
          },
          bestFielder: {
            name: 'Ravi More',
            team: 'Village 6 Rhinos',
            stats: '19 catches',
            image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Santosh Naik',
            team: 'Village 9 Royals',
            stats: 'Model behavior',
            image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop'
          }
        },
        matches: 11,
        totalRuns: 3250
      },
      {
        id: 6,
        name: 'Diwali Trophy 2024',
        date: 'November 2024',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&h=600&fit=crop',
        winner: {
          team: 'Village 4 Bulldogs',
          captain: 'Kiran Wagh',
          trophy: '🏆'
        },
        topFour: [
          { name: 'Village 4 Bulldogs', village: 'Village 4', position: '1st', prize: '₹55,000' },
          { name: 'Village 11 Strikers', village: 'Village 11', position: '2nd', prize: '₹32,000' },
          { name: 'Village 1 Challengers', village: 'Village 1', position: '3rd', prize: '₹20,000' },
          { name: 'Village 13 Hurricanes', village: 'Village 13', position: '4th', prize: '₹11,000' }
        ],
        awards: {
          bestBatsman: {
            name: 'Dinesh Pawar',
            team: 'Village 4 Bulldogs',
            stats: '502 runs',
            image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop'
          },
          bestBowler: {
            name: 'Ganesh Shinde',
            team: 'Village 11 Strikers',
            stats: '29 wickets',
            image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop'
          },
          bestFielder: {
            name: 'Sachin Jadhav',
            team: 'Village 13 Hurricanes',
            stats: '24 catches',
            image: 'https://images.unsplash.com/photo-1502378735452-bc7d86632805?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Mohan Desai',
            team: 'Village 1 Challengers',
            stats: 'Exemplary sportsmanship',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
          }
        },
        matches: 13,
        totalRuns: 3780
      },
      {
        id: 7,
        name: 'Holi Bash League 2024',
        date: 'March 2024',
        image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=1200&h=600&fit=crop',
        winner: {
          team: 'Village 2 Panthers',
          captain: 'Yogesh Kamble',
          trophy: '🏆'
        },
        topFour: [
          { name: 'Village 2 Panthers', village: 'Village 2', position: '1st', prize: '₹33,000' },
          { name: 'Village 14 Champions', village: 'Village 14', position: '2nd', prize: '₹20,000' },
          { name: 'Village 7 Warriors', village: 'Village 7', position: '3rd', prize: '₹13,000' },
          { name: 'Village 5 Lions', village: 'Village 5', position: '4th', prize: '₹7,500' }
        ],
        awards: {
          bestBatsman: {
            name: 'Abhijit More',
            team: 'Village 2 Panthers',
            stats: '389 runs',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
          },
          bestBowler: {
            name: 'Prashant Sutar',
            team: 'Village 14 Champions',
            stats: '20 wickets',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
          },
          bestFielder: {
            name: 'Nilesh Bhagat',
            team: 'Village 7 Warriors',
            stats: '17 catches',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Rajesh Mhatre',
            team: 'Village 5 Lions',
            stats: 'Fair play excellence',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop'
          }
        },
        matches: 10,
        totalRuns: 2890
      },
      {
        id: 8,
        name: 'Republic Day Challenge 2024',
        date: 'January 2024',
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&h=600&fit=crop',
        winner: {
          team: 'Village 8 Knights',
          captain: 'Sudhir Naik',
          trophy: '🏆'
        },
        topFour: [
          { name: 'Village 8 Knights', village: 'Village 8', position: '1st', prize: '₹30,000' },
          { name: 'Village 3 Tigers', village: 'Village 3', position: '2nd', prize: '₹18,000' },
          { name: 'Village 10 Gladiators', village: 'Village 10', position: '3rd', prize: '₹12,000' },
          { name: 'Village 2 Panthers', village: 'Village 2', position: '4th', prize: '₹6,500' }
        ],
        awards: {
          bestBatsman: {
            name: 'Avinash Kulkarni',
            team: 'Village 8 Knights',
            stats: '356 runs',
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop'
          },
          bestBowler: {
            name: 'Deepak Patil',
            team: 'Village 3 Tigers',
            stats: '22 wickets',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop'
          },
          bestFielder: {
            name: 'Manoj Shirke',
            team: 'Village 10 Gladiators',
            stats: '14 catches',
            image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Shankar Raut',
            team: 'Village 2 Panthers',
            stats: 'Outstanding conduct',
            image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop'
          }
        },
        matches: 8,
        totalRuns: 2450
      },
      {
        id: 9,
        name: 'Ganesh Festival Tournament 2024',
        date: 'September 2024',
        image: 'https://images.unsplash.com/photo-1593766827228-8737b4534aa6?w=1200&h=600&fit=crop',
        winner: {
          team: 'Village 13 Hurricanes',
          captain: 'Hemant Jadhav',
          trophy: '🏆'
        },
        topFour: [
          { name: 'Village 13 Hurricanes', village: 'Village 13', position: '1st', prize: '₹42,000' },
          { name: 'Village 4 Bulldogs', village: 'Village 4', position: '2nd', prize: '₹26,000' },
          { name: 'Village 8 Knights', village: 'Village 8', position: '3rd', prize: '₹16,000' },
          { name: 'Village 12 Eagles', village: 'Village 12', position: '4th', prize: '₹8,500' }
        ],
        awards: {
          bestBatsman: {
            name: 'Bhushan Desai',
            team: 'Village 13 Hurricanes',
            stats: '441 runs',
            image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop'
          },
          bestBowler: {
            name: 'Ashok Patil',
            team: 'Village 4 Bulldogs',
            stats: '27 wickets',
            image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop'
          },
          bestFielder: {
            name: 'Vinod Pawar',
            team: 'Village 8 Knights',
            stats: '21 catches',
            image: 'https://images.unsplash.com/photo-1502378735452-bc7d86632805?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Ramesh Bhosale',
            team: 'Village 12 Eagles',
            stats: 'Integrity award',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
          }
        },
        matches: 12,
        totalRuns: 3390
      },
      {
        id: 10,
        name: 'Cricket Carnival 2024',
        date: 'April 2024',
        image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=1200&h=600&fit=crop',
        winner: {
          team: 'Village 6 Rhinos',
          captain: 'Dattatray Shinde',
          trophy: '🏆'
        },
        topFour: [
          { name: 'Village 6 Rhinos', village: 'Village 6', position: '1st', prize: '₹36,000' },
          { name: 'Village 9 Royals', village: 'Village 9', position: '2nd', prize: '₹23,000' },
          { name: 'Village 15 Titans', village: 'Village 15', position: '3rd', prize: '₹14,500' },
          { name: 'Village 11 Strikers', village: 'Village 11', position: '4th', prize: '₹7,800' }
        ],
        awards: {
          bestBatsman: {
            name: 'Gopal Kamble',
            team: 'Village 6 Rhinos',
            stats: '410 runs',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
          },
          bestBowler: {
            name: 'Subhash More',
            team: 'Village 9 Royals',
            stats: '23 wickets',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
          },
          bestFielder: {
            name: 'Ajay Wagh',
            team: 'Village 15 Titans',
            stats: '18 catches',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Balasaheb Patil',
            team: 'Village 11 Strikers',
            stats: 'True sportsman',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop'
          }
        },
        matches: 10,
        totalRuns: 3015
      },
      {
        id: 11,
        name: 'Village Unity Cup 2024',
        date: 'February 2024',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&h=600&fit=crop',
        winner: {
          team: 'Village 15 Titans',
          captain: 'Chandrakant Mane',
          trophy: '🏆'
        },
        topFour: [
          { name: 'Village 15 Titans', village: 'Village 15', position: '1st', prize: '₹34,000' },
          { name: 'Village 1 Challengers', village: 'Village 1', position: '2nd', prize: '₹21,000' },
          { name: 'Village 5 Lions', village: 'Village 5', position: '3rd', prize: '₹13,500' },
          { name: 'Village 7 Warriors', village: 'Village 7', position: '4th', prize: '₹7,200' }
        ],
        awards: {
          bestBatsman: {
            name: 'Santosh Kulkarni',
            team: 'Village 15 Titans',
            stats: '394 runs',
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop'
          },
          bestBowler: {
            name: 'Pandurang Jadhav',
            team: 'Village 1 Challengers',
            stats: '18 wickets',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop'
          },
          bestFielder: {
            name: 'Vitthal Deshmukh',
            team: 'Village 5 Lions',
            stats: '15 catches',
            image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Eknath Bhosale',
            team: 'Village 7 Warriors',
            stats: 'Sportsmanship star',
            image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop'
          }
        },
        matches: 9,
        totalRuns: 2720
      },
      {
        id: 12,
        name: 'Harvest Festival League 2024',
        date: 'December 2024',
        image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=1200&h=600&fit=crop',
        winner: {
          team: 'Village 14 Champions',
          captain: 'Bharat Pawar',
          trophy: '🏆'
        },
        topFour: [
          { name: 'Village 14 Champions', village: 'Village 14', position: '1st', prize: '₹48,000' },
          { name: 'Village 6 Rhinos', village: 'Village 6', position: '2nd', prize: '₹29,000' },
          { name: 'Village 3 Tigers', village: 'Village 3', position: '3rd', prize: '₹19,000' },
          { name: 'Village 10 Gladiators', village: 'Village 10', position: '4th', prize: '₹10,000' }
        ],
        awards: {
          bestBatsman: {
            name: 'Shivaji Mane',
            team: 'Village 14 Champions',
            stats: '468 runs',
            image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop'
          },
          bestBowler: {
            name: 'Krishna Kamble',
            team: 'Village 6 Rhinos',
            stats: '24 wickets',
            image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop'
          },
          bestFielder: {
            name: 'Somnath Jadhav',
            team: 'Village 3 Tigers',
            stats: '22 catches',
            image: 'https://images.unsplash.com/photo-1502378735452-bc7d86632805?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Laxman Desai',
            team: 'Village 10 Gladiators',
            stats: 'Model player',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
          }
        },
        matches: 12,
        totalRuns: 3520
      },
      {
        id: 13,
        name: 'Evening T20 Blast 2024',
        date: 'July 2024',
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&h=600&fit=crop',
        winner: {
          team: 'Village 9 Royals',
          captain: 'Jayant Shirke',
          trophy: '🏆'
        },
        topFour: [
          { name: 'Village 9 Royals', village: 'Village 9', position: '1st', prize: '₹41,000' },
          { name: 'Village 13 Hurricanes', village: 'Village 13', position: '2nd', prize: '₹25,000' },
          { name: 'Village 2 Panthers', village: 'Village 2', position: '3rd', prize: '₹16,500' },
          { name: 'Village 8 Knights', village: 'Village 8', position: '4th', prize: '₹8,800' }
        ],
        awards: {
          bestBatsman: {
            name: 'Raghav Naik',
            team: 'Village 9 Royals',
            stats: '425 runs',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
          },
          bestBowler: {
            name: 'Narendra Patil',
            team: 'Village 13 Hurricanes',
            stats: '26 wickets',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
          },
          bestFielder: {
            name: 'Satish Mhatre',
            team: 'Village 2 Panthers',
            stats: '20 catches',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Dhananjay Kulkarni',
            team: 'Village 8 Knights',
            stats: 'Exemplary behavior',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop'
          }
        },
        matches: 11,
        totalRuns: 3280
      },
      {
        id: 14,
        name: 'Morning Legends Trophy 2024',
        date: 'January 2024',
        image: 'https://images.unsplash.com/photo-1593766827228-8737b4534aa6?w=1200&h=600&fit=crop',
        winner: {
          team: 'Village 11 Strikers',
          captain: 'Mukund Shinde',
          trophy: '🏆'
        },
        topFour: [
          { name: 'Village 11 Strikers', village: 'Village 11', position: '1st', prize: '₹32,000' },
          { name: 'Village 12 Eagles', village: 'Village 12', position: '2nd', prize: '₹20,000' },
          { name: 'Village 14 Champions', village: 'Village 14', position: '3rd', prize: '₹12,500' },
          { name: 'Village 4 Bulldogs', village: 'Village 4', position: '4th', prize: '₹6,800' }
        ],
        awards: {
          bestBatsman: {
            name: 'Babasaheb Wagh',
            team: 'Village 11 Strikers',
            stats: '367 runs',
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop'
          },
          bestBowler: {
            name: 'Devendra More',
            team: 'Village 12 Eagles',
            stats: '21 wickets',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop'
          },
          bestFielder: {
            name: 'Suresh Deshmukh',
            team: 'Village 14 Champions',
            stats: '16 catches',
            image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Tanaji Jadhav',
            team: 'Village 4 Bulldogs',
            stats: 'Fair play hero',
            image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop'
          }
        },
        matches: 8,
        totalRuns: 2560
      },
      {
        id: 15,
        name: 'Weekend Warriors Cup 2024',
        date: 'May 2024',
        image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=1200&h=600&fit=crop',
        winner: {
          team: 'Village 5 Lions',
          captain: 'Aniket Pawar',
          trophy: '🏆'
        },
        topFour: [
          { name: 'Village 5 Lions', village: 'Village 5', position: '1st', prize: '₹37,000' },
          { name: 'Village 15 Titans', village: 'Village 15', position: '2nd', prize: '₹23,500' },
          { name: 'Village 9 Royals', village: 'Village 9', position: '3rd', prize: '₹15,500' },
          { name: 'Village 1 Challengers', village: 'Village 1', position: '4th', prize: '₹8,200' }
        ],
        awards: {
          bestBatsman: {
            name: 'Rohit Kamble',
            team: 'Village 5 Lions',
            stats: '403 runs',
            image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop'
          },
          bestBowler: {
            name: 'Vikas Patil',
            team: 'Village 15 Titans',
            stats: '22 wickets',
            image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop'
          },
          bestFielder: {
            name: 'Harish Bhosale',
            team: 'Village 9 Royals',
            stats: '17 catches',
            image: 'https://images.unsplash.com/photo-1502378735452-bc7d86632805?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Naresh Mane',
            team: 'Village 1 Challengers',
            stats: 'Conduct excellence',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
          }
        },
        matches: 10,
        totalRuns: 2950
      },
      {
        id: 16,
        name: 'Thunder League 2024',
        date: 'September 2024',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&h=600&fit=crop',
        winner: {
          team: 'Village 7 Warriors',
          captain: 'Sanjay Shirke',
          trophy: '🏆'
        },
        topFour: [
          { name: 'Village 7 Warriors', village: 'Village 7', position: '1st', prize: '₹43,000' },
          { name: 'Village 10 Gladiators', village: 'Village 10', position: '2nd', prize: '₹27,000' },
          { name: 'Village 6 Rhinos', village: 'Village 6', position: '3rd', prize: '₹17,500' },
          { name: 'Village 13 Hurricanes', village: 'Village 13', position: '4th', prize: '₹9,200' }
        ],
        awards: {
          bestBatsman: {
            name: 'Ganesh Desai',
            team: 'Village 7 Warriors',
            stats: '447 runs',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
          },
          bestBowler: {
            name: 'Raju Naik',
            team: 'Village 10 Gladiators',
            stats: '25 wickets',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
          },
          bestFielder: {
            name: 'Prakash Wagh',
            team: 'Village 6 Rhinos',
            stats: '19 catches',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Amar Kulkarni',
            team: 'Village 13 Hurricanes',
            stats: 'Spirit champion',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop'
          }
        },
        matches: 11,
        totalRuns: 3410
      },
      {
        id: 17,
        name: 'New Year Blast 2024',
        date: 'January 2024',
        image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=1200&h=600&fit=crop',
        winner: {
          team: 'Village 3 Tigers',
          captain: 'Ashish Jadhav',
          trophy: '🏆'
        },
        topFour: [
          { name: 'Village 3 Tigers', village: 'Village 3', position: '1st', prize: '₹35,000' },
          { name: 'Village 8 Knights', village: 'Village 8', position: '2nd', prize: '₹22,000' },
          { name: 'Village 11 Strikers', village: 'Village 11', position: '3rd', prize: '₹14,000' },
          { name: 'Village 15 Titans', village: 'Village 15', position: '4th', prize: '₹7,500' }
        ],
        awards: {
          bestBatsman: {
            name: 'Dilip Patil',
            team: 'Village 3 Tigers',
            stats: '382 runs',
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop'
          },
          bestBowler: {
            name: 'Ramchandra Shinde',
            team: 'Village 8 Knights',
            stats: '20 wickets',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop'
          },
          bestFielder: {
            name: 'Ankush More',
            team: 'Village 11 Strikers',
            stats: '16 catches',
            image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Siddharth Bhosale',
            team: 'Village 15 Titans',
            stats: 'Gentleman player',
            image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop'
          }
        },
        matches: 9,
        totalRuns: 2670
      },
      {
        id: 18,
        name: 'Golden Trophy 2024',
        date: 'November 2024',
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&h=600&fit=crop',
        winner: {
          team: 'Village 12 Eagles',
          captain: 'Suhas Kamble',
          trophy: '🏆'
        },
        topFour: [
          { name: 'Village 12 Eagles', village: 'Village 12', position: '1st', prize: '₹46,000' },
          { name: 'Village 2 Panthers', village: 'Village 2', position: '2nd', prize: '₹28,500' },
          { name: 'Village 4 Bulldogs', village: 'Village 4', position: '3rd', prize: '₹18,500' },
          { name: 'Village 7 Warriors', village: 'Village 7', position: '4th', prize: '₹9,500' }
        ],
        awards: {
          bestBatsman: {
            name: 'Pradeep Deshmukh',
            team: 'Village 12 Eagles',
            stats: '476 runs',
            image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop'
          },
          bestBowler: {
            name: 'Anand Wagh',
            team: 'Village 2 Panthers',
            stats: '28 wickets',
            image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop'
          },
          bestFielder: {
            name: 'Kishor Jadhav',
            team: 'Village 4 Bulldogs',
            stats: '23 catches',
            image: 'https://images.unsplash.com/photo-1502378735452-bc7d86632805?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Mangesh Pawar',
            team: 'Village 7 Warriors',
            stats: 'Honor & dignity',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
          }
        },
        matches: 12,
        totalRuns: 3615
      },
      {
        id: 19,
        name: 'Desert Storm Cup 2024',
        date: 'April 2024',
        image: 'https://images.unsplash.com/photo-1593766827228-8737b4534aa6?w=1200&h=600&fit=crop',
        winner: {
          team: 'Village 1 Challengers',
          captain: 'Popat Mane',
          trophy: '🏆'
        },
        topFour: [
          { name: 'Village 1 Challengers', village: 'Village 1', position: '1st', prize: '₹39,000' },
          { name: 'Village 5 Lions', village: 'Village 5', position: '2nd', prize: '₹24,500' },
          { name: 'Village 12 Eagles', village: 'Village 12', position: '3rd', prize: '₹16,000' },
          { name: 'Village 14 Champions', village: 'Village 14', position: '4th', prize: '₹8,500' }
        ],
        awards: {
          bestBatsman: {
            name: 'Shashank Kulkarni',
            team: 'Village 1 Challengers',
            stats: '418 runs',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
          },
          bestBowler: {
            name: 'Umesh Naik',
            team: 'Village 5 Lions',
            stats: '24 wickets',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
          },
          bestFielder: {
            name: 'Datta Shirke',
            team: 'Village 12 Eagles',
            stats: '18 catches',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Gajanan Bhosale',
            team: 'Village 14 Champions',
            stats: 'Respect champion',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop'
          }
        },
        matches: 10,
        totalRuns: 3050
      },
      {
        id: 20,
        name: 'Champions League Final 2024',
        date: 'December 2024',
        image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=1200&h=600&fit=crop',
        winner: {
          team: 'Village 10 Gladiators',
          captain: 'Mahendra Patil',
          trophy: '🏆'
        },
        topFour: [
          { name: 'Village 10 Gladiators', village: 'Village 10', position: '1st', prize: '₹60,000' },
          { name: 'Village 7 Warriors', village: 'Village 7', position: '2nd', prize: '₹35,000' },
          { name: 'Village 13 Hurricanes', village: 'Village 13', position: '3rd', prize: '₹22,000' },
          { name: 'Village 3 Tigers', village: 'Village 3', position: '4th', prize: '₹12,000' }
        ],
        awards: {
          bestBatsman: {
            name: 'Parshuram Desai',
            team: 'Village 10 Gladiators',
            stats: '521 runs',
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop'
          },
          bestBowler: {
            name: 'Baban Jadhav',
            team: 'Village 7 Warriors',
            stats: '31 wickets',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop'
          },
          bestFielder: {
            name: 'Santosh Mhatre',
            team: 'Village 13 Hurricanes',
            stats: '25 catches',
            image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Vasant Kamble',
            team: 'Village 3 Tigers',
            stats: 'Fair play legend',
            image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop'
          }
        },
        matches: 14,
        totalRuns: 4120
      }
    ],
    '2023': [
      {
        id: 4,
        name: 'Champions Trophy 2023',
        date: 'November 2023',
        image: 'https://images.unsplash.com/photo-1593766827228-8737b4534aa6?w=1200&h=600&fit=crop',
        winner: {
          team: 'Village 5 Lions',
          captain: 'Nikhil Patil',
          trophy: '🏆'
        },
        topFour: [
          { name: 'Village 5 Lions', village: 'Village 5', position: '1st', prize: '₹48,000' },
          { name: 'Village 7 Warriors', village: 'Village 7', position: '2nd', prize: '₹30,000' },
          { name: 'Village 3 Tigers', village: 'Village 3', position: '3rd', prize: '₹18,000' },
          { name: 'Village 8 Knights', village: 'Village 8', position: '4th', prize: '₹10,000' }
        ],
        awards: {
          bestBatsman: {
            name: 'Ajay Kumar',
            team: 'Village 7 Warriors',
            stats: '485 runs',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
          },
          bestBowler: {
            name: 'Rahul Desai',
            team: 'Village 5 Lions',
            stats: '28 wickets',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
          },
          bestFielder: {
            name: 'Kiran Shah',
            team: 'Village 3 Tigers',
            stats: '22 catches',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Amit Joshi',
            team: 'Village 8 Knights',
            stats: 'Spirit of cricket',
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop'
          }
        },
        matches: 14,
        totalRuns: 3890
      },
      {
        id: 5,
        name: 'Independence Cup 2023',
        date: 'August 2023',
        image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=1200&h=600&fit=crop',
        winner: {
          team: 'Village 3 Tigers',
          captain: 'Sagar Pawar',
          trophy: '🏆'
        },
        topFour: [
          { name: 'Village 3 Tigers', village: 'Village 3', position: '1st', prize: '₹42,000' },
          { name: 'Village 12 Eagles', village: 'Village 12', position: '2nd', prize: '₹26,000' },
          { name: 'Village 5 Lions', village: 'Village 5', position: '3rd', prize: '₹16,000' },
          { name: 'Village 10 Gladiators', village: 'Village 10', position: '4th', prize: '₹8,500' }
        ],
        awards: {
          bestBatsman: {
            name: 'Ramesh Kulkarni',
            team: 'Village 12 Eagles',
            stats: '422 runs',
            image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop'
          },
          bestBowler: {
            name: 'Vishal Patil',
            team: 'Village 3 Tigers',
            stats: '23 wickets',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop'
          },
          bestFielder: {
            name: 'Suresh Mane',
            team: 'Village 10 Gladiators',
            stats: '19 catches',
            image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=200&h=200&fit=crop'
          },
          fairPlay: {
            name: 'Ganesh More',
            team: 'Village 5 Lions',
            stats: 'Best conduct award',
            image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop'
          }
        },
        matches: 12,
        totalRuns: 3340
      }
    ]
  };

  // Get available years
  const availableYears = Object.keys(tournamentsData).sort((a, b) => b - a);

  // Get tournaments for selected year
  const currentYearTournaments = tournamentsData[selectedYear] || [];

  // Filter tournaments based on search query
  const filteredTournaments = currentYearTournaments.filter(tournament =>
    tournament.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tournament.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tournament.winner.team.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="tournaments-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-background"></div>
        <div className="header-content">
          <h1 className="animate-fade-in">Tournaments</h1>
          <p className="animate-fade-in-delay">Celebrating cricket excellence across 15 villages</p>
        </div>
      </div>

      {/* Year Selector */}
      <div className="year-selector">
        <h2>Select Year</h2>
        <div className="year-tabs">
          {availableYears.map(year => (
            <button
              key={year}
              className={`year-tab ${selectedYear === year ? 'active' : ''}`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
              <span className="tournament-count">
                {tournamentsData[year].length} Tournament{tournamentsData[year].length > 1 ? 's' : ''}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="container">
        {/* Search Filter */}
        <div className="search-filter">
          <div className="search-box">
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              placeholder="Search tournaments by name, date, or winner..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button 
                className="clear-search" 
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          {searchQuery && filteredTournaments.length > 0 && (
            <p className="search-results-text">
              Showing {filteredTournaments.length} of {currentYearTournaments.length} tournaments
            </p>
          )}
        </div>

        {filteredTournaments.length === 0 ? (
          <div className="no-results">
            <p>No tournaments found matching "{searchQuery}"</p>
            <button onClick={() => setSearchQuery('')} className="reset-btn">Clear Filter</button>
          </div>
        ) : (
          filteredTournaments.map((tournament, index) => (
          <div key={tournament.id} className="tournament-section">
            {/* Winner Banner */}
            <div className="winner-banner" style={{ backgroundImage: `url(${tournament.image})` }}>
              <div className="winner-overlay"></div>
              <div className="winner-content">
                <div className="trophy-icon">{tournament.winner.trophy}</div>
                <h2 className="tournament-title">{tournament.name}</h2>
                <div className="winner-info">
                  <span className="winner-label">Tournament Winner</span>
                  <h3 className="winner-team">{tournament.winner.team}</h3>
                </div>
                <div className="tournament-meta">
                  <span className="meta-item">📅 {tournament.date}</span>
                </div>
              </div>
            </div>

            {/* Top 4 Teams */}
            <div className="teams-section">
              <h3 className="section-title">Top 4 Teams</h3>
              <div className="teams-grid">
                {tournament.topFour.map((team, idx) => (
                  <div 
                    key={idx} 
                    className={`team-card ${team.position === '1st' ? 'winner' : ''}`}
                  >
                    <div className="team-position">{team.position}</div>
                    <div className="team-name">{team.name}</div>
                    <div className="team-village">{team.village}</div>
                    <div className="team-prize">Prize: {team.prize}</div>
                    {team.position === '1st' && <div className="winner-badge">🏆 Champion</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Awards Section */}
            <div className="awards-section">
              <h3 className="section-title">Tournament Awards</h3>
              
              {/* Man of the Series - Featured */}
              {tournament.awards.manOfTheSeries && (
                <div className="man-of-series-featured">
                  <div className="featured-badge">
                    <span className="badge-icon">⭐</span>
                    <span className="badge-text">Man of the Series</span>
                  </div>
                  <div className="featured-content">
                    <div className="featured-image">
                      <img src={tournament.awards.manOfTheSeries.image} alt={tournament.awards.manOfTheSeries.name} />
                      <div className="image-overlay"></div>
                    </div>
                    <div className="featured-info">
                      <h4 className="featured-name">{tournament.awards.manOfTheSeries.name}</h4>
                      <p className="featured-team">{tournament.awards.manOfTheSeries.team}</p>
                      <p className="featured-stats">{tournament.awards.manOfTheSeries.stats}</p>
                      <div className="trophy-icon">🏆</div>
                    </div>
                  </div>
                </div>
              )}

              <div className="awards-grid">
                {/* Best Batsman */}
                <div className="award-card">
                  <div className="award-icon">🏏</div>
                  <h4 className="award-title">Best Batsman</h4>
                  <div className="award-winner">
                    <img src={tournament.awards.bestBatsman.image} alt={tournament.awards.bestBatsman.name} />
                    <div className="award-info">
                      <p className="player-name">{tournament.awards.bestBatsman.name}</p>
                      <p className="player-team">{tournament.awards.bestBatsman.team}</p>
                      <p className="player-stats">{tournament.awards.bestBatsman.stats}</p>
                    </div>
                  </div>
                </div>

                {/* Best Bowler */}
                <div className="award-card">
                  <div className="award-icon">⚾</div>
                  <h4 className="award-title">Best Bowler</h4>
                  <div className="award-winner">
                    <img src={tournament.awards.bestBowler.image} alt={tournament.awards.bestBowler.name} />
                    <div className="award-info">
                      <p className="player-name">{tournament.awards.bestBowler.name}</p>
                      <p className="player-team">{tournament.awards.bestBowler.team}</p>
                      <p className="player-stats">{tournament.awards.bestBowler.stats}</p>
                    </div>
                  </div>
                </div>

                {/* Best Fielder */}
                <div className="award-card">
                  <div className="award-icon">🧤</div>
                  <h4 className="award-title">Best Fielder</h4>
                  <div className="award-winner">
                    <img src={tournament.awards.bestFielder.image} alt={tournament.awards.bestFielder.name} />
                    <div className="award-info">
                      <p className="player-name">{tournament.awards.bestFielder.name}</p>
                      <p className="player-team">{tournament.awards.bestFielder.team}</p>
                      <p className="player-stats">{tournament.awards.bestFielder.stats}</p>
                    </div>
                  </div>
                </div>

                {/* Fair Play Award */}
                <div className="award-card">
                  <div className="award-icon">🤝</div>
                  <h4 className="award-title">Fair Play Award</h4>
                  <div className="award-winner">
                    <img src={tournament.awards.fairPlay.image} alt={tournament.awards.fairPlay.name} />
                    <div className="award-info">
                      <p className="player-name">{tournament.awards.fairPlay.name}</p>
                      <p className="player-team">{tournament.awards.fairPlay.team}</p>
                      <p className="player-stats">{tournament.awards.fairPlay.stats}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider between tournaments */}
            {index < filteredTournaments.length - 1 && <div className="tournament-divider"></div>}
          </div>
        ))
        )}
      </div>
    </div>
  );
};

export default Tournaments;


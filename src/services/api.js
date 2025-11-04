// API Base URL - change this for production
const API_URL = 'http://localhost:5001/api';

// Generic fetch function with error handling
const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    throw error;
  }
};

// Tournaments API
export const fetchTournaments = async (status = null) => {
  const url = status ? `/tournaments?status=${status}` : '/tournaments';
  return fetchData(url);
};

export const fetchTournamentById = async (id) => {
  return fetchData(`/tournaments/${id}`);
};

// Tournament Awards API
export const fetchTournamentsWithAwards = async (year = null) => {
  const url = year ? `/awards/tournaments-with-awards?year=${year}` : '/awards/tournaments-with-awards';
  return fetchData(url);
};

export const fetchTournamentAwards = async (tournamentId) => {
  return fetchData(`/awards/tournament/${tournamentId}`);
};

// Villages API
export const fetchVillages = async () => {
  return fetchData('/villages');
};

export const fetchVillageById = async (id) => {
  return fetchData(`/villages/${id}`);
};

// Teams API
export const fetchTeams = async (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  const url = queryString ? `/teams?${queryString}` : '/teams';
  return fetchData(url);
};

export const fetchTeamById = async (id) => {
  return fetchData(`/teams/${id}`);
};

// Players API
export const fetchPlayers = async (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  const url = queryString ? `/players?${queryString}` : '/players';
  return fetchData(url);
};

export const fetchPlayerById = async (id) => {
  return fetchData(`/players/${id}`);
};

// News API
export const fetchNews = async (category = null) => {
  const url = category ? `/news?category=${category}` : '/news';
  return fetchData(url);
};

export const fetchNewsById = async (id) => {
  return fetchData(`/news/${id}`);
};

// Gallery API
export const fetchGallery = async (category = null) => {
  const url = category ? `/gallery?category=${category}` : '/gallery';
  return fetchData(url);
};

// Committee API
export const fetchCommittee = async () => {
  return fetchData('/committee');
};

// Matches API
export const fetchMatches = async (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  const url = queryString ? `/matches?${queryString}` : '/matches';
  return fetchData(url);
};

export const fetchMatchById = async (id) => {
  return fetchData(`/matches/${id}`);
};

// Registration API (for public registration form)
export const submitRegistration = async (formData) => {
  return fetchData('/registrations', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
};

// Dashboard/Stats (public facing)
export const fetchDashboardStats = async () => {
  return fetchData('/dashboard/stats');
};

export const fetchTopPlayers = async (stat = 'runs') => {
  return fetchData(`/dashboard/top-players?stat=${stat}`);
};

// Pride Players API
export const fetchPridePlayers = async () => {
  return fetchData('/pride');
};

// Umpires API
export const fetchUmpires = async () => {
  return fetchData('/umpires');
};

// Scorers API
export const fetchScorers = async () => {
  return fetchData('/scorers');
};

export default {
  fetchTournaments,
  fetchTournamentById,
  fetchTournamentsWithAwards,
  fetchTournamentAwards,
  fetchVillages,
  fetchVillageById,
  fetchTeams,
  fetchTeamById,
  fetchPlayers,
  fetchPlayerById,
  fetchNews,
  fetchNewsById,
  fetchGallery,
  fetchCommittee,
  fetchMatches,
  fetchMatchById,
  submitRegistration,
  fetchDashboardStats,
  fetchTopPlayers,
  fetchPridePlayers,
  fetchUmpires,
  fetchScorers
};


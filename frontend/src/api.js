import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = {
  get: (url, token) => axios.get(BASE_URL + url, { headers: token ? { Authorization: `Bearer ${token}` } : {} }),
  post: (url, data, token) => axios.post(BASE_URL + url, data, { headers: token ? { Authorization: `Bearer ${token}` } : {} }),
  delete: (url, token) => axios.delete(BASE_URL + url, { headers: token ? { Authorization: `Bearer ${token}` } : {} }),
};

export default api; 
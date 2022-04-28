import axios from 'axios';
const API_URL = 'https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

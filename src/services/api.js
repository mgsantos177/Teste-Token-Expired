import axios from 'axios';
import { useDispatch } from 'react-redux';
import history from './history';

import { signOut } from '../store/modules/auth/actions';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.response.use(
  response => {
    if (response.status === 401) {
      alert('You are not authorized');
    }
    return response;
  },
  error => {
    if (error.response.status === 401) {
      history.push('/');
    }
  }
);

export default api;

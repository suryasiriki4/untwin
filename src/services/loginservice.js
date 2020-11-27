import axios from 'axios';

export const UserLogin = data => {
    return axios.post('http://localhost:5000/api/login', data);
};
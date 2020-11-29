import axios from 'axios';

export const UserRegistration = data => {
    return axios.post('http://localhost:5000/api/register', data,{withCredentials:true});
};
import axios from 'axios';

export const UserRegistration = data => {
    return axios.post('https://untwin.herokuapp.com/api/register', data,{withCredentials:true});
};
import axios from 'axios';

export const UserLogin = data => {
    return axios.post('https://untwin.herokuapp.com/api/login', data,{withCredentials:true});
};
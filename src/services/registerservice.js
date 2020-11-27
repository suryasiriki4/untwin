import axios from 'axios';

export const UserRegistration = data => {
    console.log("registersfjnrif");
    return axios.post('http://localhost:5000/api/register', data);
};
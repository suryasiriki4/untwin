import axios from 'axios';
import { MYURL } from '../CONSTANTS';

export const UserRegistration = data => {
    return axios.post( MYURL + '/register', data);
};
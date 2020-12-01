import axios from 'axios';
import { MYURL } from '../CONSTANTS';

export const UserLogin = data => {
    return axios.post( MYURL +'/login', data);
};
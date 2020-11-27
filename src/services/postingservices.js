import axios from 'axios';
import {MYURL} from '../CONSTANTS.js';

function fetchProfile(){
    return axios.get(MYURL+'/profile');
}

export const PostDoubt = async (data) => {
    const profile = await fetchProfile()
    
}

 
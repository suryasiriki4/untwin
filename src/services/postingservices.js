import axios from 'axios';
import {MYURL} from '../CONSTANTS.js';

export const PostDoubt = async (data) => {
    const newdata = new FormData();
    newdata.append('title',data.title);
    newdata.append('description',data.description);
    newdata.append('image',data.image);
    return axios.post(MYURL+'/posts',newdata,{withCredentials:true,headers:{'content-type': 'multipart/form-data'}});
}

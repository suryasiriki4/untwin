import axios from 'axios';
import {MYURL} from '../CONSTANTS.js';

export const PostDoubt = async (data) => {
    const newdata = new FormData();
    newdata.append('title',data.title);
    newdata.append('description',data.description);
    newdata.append('image',data.image);
    const auth_token =  localStorage.getItem("auth_token");
    return axios.post(MYURL+'/posts', newdata, {headers:{'content-type': 'multipart/form-data',"x-auth-token": auth_token}});
}

export const PostComment = async (data) => {
    const newdata = new FormData();
    newdata.append('title',data.title);
    newdata.append('description',data.description);
    newdata.append('image',data.image);
    const auth_token =  localStorage.getItem("auth_token");
    return axios.post(MYURL+'/posts/'+data.id+'/comments', newdata, {headers:{'content-type': 'multipart/form-data',"x-auth-token": auth_token}});
}

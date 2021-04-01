import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID z_84AuUVRGuVEHGPZt4b9W2G6F_9o5Kp_QKLei5D7Nk'
    }
});

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fruityvice.com/api/fruit',
    headers:{
        "Access-Control-Allow-Origin": "*"
    }
});

export default api;
import axios from 'axios';

const API = axios.create({
    baseURL: `https://gateway.marvel.com`,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
});

API.interceptors.request.use((config) => {
    config.params = {
        apikey: 'b042a4b613ce6b0f1270c6455c7cc9b3'
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})

export {
    API
}
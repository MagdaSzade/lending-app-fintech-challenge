import axios from 'axios';

export const backend = axios.create({
    baseURL: '/api',
});

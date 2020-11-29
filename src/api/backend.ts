import axios from 'axios';

export const backend = axios.create({
    baseURL: '/api',
    auth: {
        username: 'admisie',
        password: 'mis_yogi',
    },
    headers: {
        'X-Auth': window.sessionStorage.getItem('x-auth'),
    },
});

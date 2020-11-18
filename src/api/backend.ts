import axios from 'axios';

export const backend = axios.create({
    baseURL: '',
    auth: {
        username: 'admisie',
        password: 'mis_yogi',
    },
});

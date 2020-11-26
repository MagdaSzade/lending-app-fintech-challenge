import {backend} from './backend';
import {ReagisterNewUserForm} from '../helpers/types';
import Axios from 'axios';

export const registerNewUser = (data: ReagisterNewUserForm) => {
    return backend.post('/users/register', data);
};

export const getAllUserDataApi = (ID: string) => {
    return backend.get(`/users/${ID}`);
};

export const loginUserApi = (data: FormData) => {
    return backend.post('/users/login', data);
};

import {backend} from './backend';
import {ReagisterNewUserForm} from '../helpers/types';

export const registerNewUser = (data: ReagisterNewUserForm) => {
    return backend.post('/api/users/register', data);
};

export const loginUserApi = (data: FormData) => {
    return backend.post('/login', data);
};

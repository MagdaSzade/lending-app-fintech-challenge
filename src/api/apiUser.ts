import {backend} from './backend';
import {ReagisterNewUserDTO} from '../helpers/types';

export const registerNewUser = (data: ReagisterNewUserDTO) => {
    return backend.post('/api/users/register', data);
};

export const loginUserApi = (data: FormData) => {
    return backend.post('/login', data);
};

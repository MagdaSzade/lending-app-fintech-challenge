import {backend} from './backend';
import {LoginUserInterface} from '../Components/LoginForm/LoginForm.interface';
import {ReagisterNewUserDTO} from '../helpers/types';

export const registerNewUser = (data: ReagisterNewUserDTO) => {
    return backend.post('/api/users/register', {
        body: {
            ...data,
        },
        auth: {
            username: 'admisie',
            password: 'mis_yogi',
        },
    });
};

export const loginUserApi = (data: LoginUserInterface) => {
    return backend.post('/login', {
        body: {
            ...data,
        },
    });
};

import {backend} from './backend';
import {LoginUserInterface} from '../Components/LoginForm/LoginForm.interface';
import {ReagisterNewUserDTO} from '../helpers/types';

export const registerNewUser = (data: ReagisterNewUserDTO) => {
    return backend.post('/users/register', data);
};

export const loginUserApi = (data: LoginUserInterface) => {
    return backend.post('/login', data);
};

import {backend} from './backend';
import {NewUserInterface} from '../Components/RegisterForm/RegisterForm.interface';
import {LoginUserInterface} from '../Components/LoginForm/LoginForm.interface';

export const registerNewUser = (data: NewUserInterface) => {
    return backend.post('api/users/register', {
        body: {
            ...data,
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

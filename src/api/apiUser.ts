import {backend} from './backend';
import {NewUserInterface} from '../Components/RegisterForm/RegisterForm.interface';

export const registerNewUser = (data: NewUserInterface) => {
    return backend.post('/users/register', {
        params: {
            ...data,
        },
    });
};

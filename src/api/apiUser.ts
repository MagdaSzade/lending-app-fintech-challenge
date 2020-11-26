import {backend} from './backend';
import {ChangePasswordForm, ReagisterNewUserForm} from '../helpers/types';
import {EmailChangeInterface} from '../Components/Forms/EmailChangeForm/EmailChange.interface';

export const registerNewUser = (data: ReagisterNewUserForm) => {
    return backend.post('/users/register', data);
};

export const loginUserApi = (data: FormData) => {
    return backend.post('/users/login', data);
};

export const getAllUserDataApi = (ID: string) => {
    return backend.get(`/users/${ID}`);
};

export const changeEmailApi = (ID: string, data: EmailChangeInterface) => {
    return backend.put(`/users/${ID}/change-email`, data);
};

export const changePasswordApi = (ID: string, data: ChangePasswordForm) => {
    return backend.put(`/users/${ID}/change-password`, data);
};

export const deleteUserApi = (ID: string) => {
    return backend.delete(`/users/${ID}`);
};

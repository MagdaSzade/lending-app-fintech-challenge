import {AccountActionInterface} from '../Components/Forms/AccountActionForm/AccountActionForm.interface';
import {backend} from './backend';

export const withdrawalApi = (body: AccountActionInterface) => {
    return backend.post('/inquiries', body);
};

export const depositApi = (params: AccountActionInterface) => {
    return backend.get('/inquiries', {params});
};

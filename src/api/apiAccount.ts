import {AccountActionInterface} from '../Components/Forms/AccountActionForm/AccountActionForm.interface';
import {backend} from './backend';

export const withdrawalApi = (body: AccountActionInterface) => {
    return backend.post('/transactions/externalWithdrawal', body);
};

export const depositApi = (body: AccountActionInterface) => {
    return backend.post('/transactions/externalPayment', body);
};

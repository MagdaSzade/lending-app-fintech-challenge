import {AccountActionInterface} from '../Components/Forms/AccountActionForm/AccountActionForm.interface';
import {backend} from './backend';

export const withdrawalApi = (params: AccountActionInterface, id: string) => {
    return backend.post(`/transactions/externalWithdrawal/?userId=${id}&value=${params.value}`);
};

export const depositApi = (params: AccountActionInterface, id: string) => {
    return backend.post(`/transactions/externalPayment?userId=${id}&value=${params.value}`);
};

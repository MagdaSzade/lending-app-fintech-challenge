import {InquieryInterface} from '../helpers/types';
import {backend} from './backend';

export const newInquiriesApi = (data: InquieryInterface) => {
    return backend.post('/inqueries', data);
};

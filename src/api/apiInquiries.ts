import {GetInquiryFormInterface} from '../Components/Forms/GetInquiriesForm/GetInquiriesForm.interface';
import {InquiryFormInterface} from '../Components/Forms/InquiryForm/InquiryForm.interface';
import {backend} from './backend';

export const newInquiryApi = (body: InquiryFormInterface) => {
    return backend.post('/inquiries', body);
};

export const getInquieiesApi = (params: GetInquiryFormInterface) => {
    return backend.get('/inquiries', {params});
};

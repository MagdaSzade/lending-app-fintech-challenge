import {InquiryFormInterface} from '../Components/Forms/InquiryForm/InquiryForm.interface';
import {backend} from './backend';

export const newInquiryApi = (body: InquiryFormInterface) => {
    return backend.post('/inquiries', body);
};

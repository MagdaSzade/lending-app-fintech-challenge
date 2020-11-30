import {OfferFormInterface} from '../Components/Forms/OfferForm/OfferForm.interface';
import {backend} from './backend';

export const newOfferApi = (data: OfferFormInterface) => {
    return backend.post('/offers', data);
};

import {OfferFormInterface} from '../Components/Forms/OfferForm/OfferForm.interface';
import {backend} from './backend';

export const newOfferApi = (body: OfferFormInterface) => {
    return backend.post('/offers', body);
};

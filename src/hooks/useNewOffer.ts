import {useAppContext} from './useAppContext';
import {fetchAPIError, newOfferSuccesText} from '../helpers/helpersText';
import {usePushToHistory} from './usePushToHistory';
import {ROUTES} from '../helpers/ROUTES';
import {newOfferApi} from '../api/apiOffers';
import {OfferFormInterface} from '../Components/Forms/OfferForm/OfferForm.interface';

export const useNewOffer = () => {
    const {setIsFetching, setMessage} = useAppContext();
    const pushToHistory = usePushToHistory();

    const newOffer = async (offer: OfferFormInterface) => {
        setIsFetching(true);
        try {
            await newOfferApi(offer);
            setMessage(newOfferSuccesText);
            pushToHistory(ROUTES.USER_MESSAGES);
        } catch (err) {
            setMessage(fetchAPIError);
        } finally {
            setIsFetching(false);
        }
    };

    return newOffer;
};

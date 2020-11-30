import {newOfferApi} from '../api/apiOffers';
import {useAppContext} from './useAppContext';
import {usePushToHistory} from './usePushToHistory';
import {ROUTES} from '../helpers/ROUTES';
import {OfferFormInterface} from '../Components/Forms/OfferForm/OfferForm.interface';
import {fetchAPIError, newOfferSuccesText} from '../helpers/helpersText';

export const useNewOffer = () => {
    const {setIsFetching, setMessage, userData} = useAppContext();
    const pushToHistory = usePushToHistory();

    const newOffer = async (offer: OfferFormInterface) => {
        offer.lenderId = userData?.userID;
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

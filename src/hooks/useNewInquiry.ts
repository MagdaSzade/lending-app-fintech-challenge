import {newInquiryApi} from '../api/apiInquiries';
import {useAppContext} from './useAppContext';
import {usePushToHistory} from './usePushToHistory';
import {fetchAPIError, newInquirySuccesText} from '../helpers/helpersText';
import {ROUTES} from '../helpers/ROUTES';
import {InquiryFormInterface} from '../Components/Forms/InquiryForm/InquiryForm.interface';

export const useNewInquiry = () => {
    const {setIsFetching, setMessage} = useAppContext();
    const pushToHistory = usePushToHistory();

    const newInquiry = async (inquiry: InquiryFormInterface) => {
        setIsFetching(true);
        try {
            await newInquiryApi(inquiry);
            setMessage(newInquirySuccesText);
            pushToHistory(ROUTES.USER_MESSAGES);
        } catch (err) {
            setMessage(fetchAPIError);
        } finally {
            setIsFetching(false);
        }
    };

    return newInquiry;
};

import {useAppContext} from './useAppContext';
import {fetchAPIError, newInquirySuccesText} from '../helpers/helpersText';
import {usePushToHistory} from './usePushToHistory';
import {ROUTES} from '../helpers/ROUTES';
import {InquiryFormInterface} from '../Components/Forms/InquiryForm/InquiryForm.interface';
import {newInquiryApi} from '../api/apiInquiries';

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
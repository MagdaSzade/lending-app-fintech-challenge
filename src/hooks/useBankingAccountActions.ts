import {AccountActionInterface} from '../Components/Forms/AccountActionForm/AccountActionForm.interface';
import {withdrawalApi, depositApi} from '../api/apiAccount';
import {usePushToHistory} from './usePushToHistory';
import {useAppContext} from './useAppContext';
import {depositSuccesText, fetchAPIError, withdrwalSuccesText} from '../helpers/helpersText';
import {ROUTES} from '../helpers/ROUTES';

export const useBankingAccountActions = () => {
    const {setIsFetching, setMessage} = useAppContext();
    const pushToHistory = usePushToHistory();

    const deposit = async (data: AccountActionInterface) => {
        setIsFetching(true);
        try {
            await depositApi(data);
            setMessage(depositSuccesText);
            pushToHistory(ROUTES.USER_ACCOUNT);
        } catch (err) {
            setMessage(fetchAPIError);
        } finally {
            setIsFetching(false);
        }
    };

    const withdrawal = async (data: AccountActionInterface) => {
        setIsFetching(true);
        try {
            await withdrawalApi(data);
            setMessage(withdrwalSuccesText);
            pushToHistory(ROUTES.USER_ACCOUNT);
        } catch (err) {
            setMessage(fetchAPIError);
        } finally {
            setIsFetching(false);
        }
    };
    return {deposit, withdrawal};
};

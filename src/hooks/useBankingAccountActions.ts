import {AccountActionInterface} from '../Components/Forms/AccountActionForm/AccountActionForm.interface';
import {withdrawalApi, depositApi} from '../api/apiAccount';
import {usePushToHistory} from './usePushToHistory';
import {useAppContext} from './useAppContext';
import {ROUTES} from '../helpers/ROUTES';
import {depositSuccesText, fetchAPIError, withdrwalSuccesText} from '../helpers/helpersText';

export const useBankingAccountActions = () => {
    const {setIsFetching, setMessage} = useAppContext();
    const pushToHistory = usePushToHistory();
    const {userData} = useAppContext();

    const deposit = async (data: AccountActionInterface) => {
        if (userData) {
            setIsFetching(true);
            try {
                await depositApi(data, userData?.userID);
                setMessage(depositSuccesText);
                pushToHistory(ROUTES.USER_ACCOUNT);
            } catch (err) {
                setMessage(fetchAPIError);
            } finally {
                setIsFetching(false);
            }
        }
    };

    const withdrawal = async (data: AccountActionInterface) => {
        if (userData) {
            setIsFetching(true);
            try {
                await withdrawalApi(data, userData?.userID);
                setMessage(withdrwalSuccesText);
                pushToHistory(ROUTES.USER_ACCOUNT);
            } catch (err) {
                setMessage(fetchAPIError);
            } finally {
                setIsFetching(false);
            }
        }
    };
    return {deposit, withdrawal};
};

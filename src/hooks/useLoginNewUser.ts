import {LoginUserInterface} from '../Components/LoginForm/LoginForm.interface';
import {loginUserApi} from '../api/apiUser';
import {useAppContext} from './useAppContext';
import {fetchAPIError, loginSuccesText} from '../helpers/helpersText';
import {usePushToHistory} from './usePushToHistory';
import {ROUTES} from '../helpers/ROUTES';

export const useLoginNewUser = () => {
    const {login, setIsFetching, setMessage} = useAppContext();
    const pushToHistory = usePushToHistory();

    const loginUser = async (userData: LoginUserInterface) => {
        const bodyFormData = new window.FormData();
        bodyFormData.append('username', userData.email);
        bodyFormData.append('password', userData.password);
        setIsFetching(true);
        try {
            const response = await loginUserApi(bodyFormData);
            window.sessionStorage.setItem('auth', response.headers.authorization);
            setMessage(loginSuccesText);
            login();
            pushToHistory(ROUTES.USER_MESSAGES);
        } catch (err) {
            setMessage(fetchAPIError);
        } finally {
            setIsFetching(false);
        }
    };

    return loginUser;
};

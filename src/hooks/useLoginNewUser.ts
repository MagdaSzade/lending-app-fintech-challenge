import {loginUserApi} from '../api/apiUser';
import {useAppContext} from './useAppContext';
import {usePushToHistory} from './usePushToHistory';
import {ROUTES} from '../helpers/ROUTES';
import {LoginUserInterface} from '../Components/Forms/LoginForm/LoginForm.interface';
import {fetchAPIError, loginSuccesText} from '../helpers/helpersText';

export const useLoginNewUser = () => {
    const {login, setIsFetching, setMessage} = useAppContext();
    const pushToHistory = usePushToHistory();

    const loginUser = async (userData: LoginUserInterface) => {
        const bodyFormData = new FormData();
        bodyFormData.append('username', userData.email);
        bodyFormData.append('password', userData.password);
        setIsFetching(true);
        try {
            const response = await loginUserApi(bodyFormData);
            window.sessionStorage.setItem('x-auth', response.headers['x-auth']);
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

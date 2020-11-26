import {changeEmailApi, changePasswordApi, deleteUserApi} from '../../api/apiUser';
import {EmailChangeInterface} from '../../Components/Forms/EmailChangeForm/EmailChangeInterface';
import {PasswordChangeInterface} from '../../Components/Forms/PasswordChangeForm/PasswordChangeForm.interface';
import {
    changeEmailSuccesText,
    changePasswordSuccesText,
    deleteAccountFailText,
    deleteAccountSuccesText,
    fetchAPIError,
} from '../../helpers/helpersText';
import {USER_REDUCER_ACTIONS} from '../../helpers/reducers';
import {ROUTES} from '../../helpers/ROUTES';
import {ChangePasswordForm} from '../../helpers/types';
import {useAppContext} from '../useAppContext';
import {usePushToHistory} from '../usePushToHistory';

export const useUsersActions = () => {
    const {setIsFetching, setMessage, userData, setUsersData, logout} = useAppContext();
    const pushToHistory = usePushToHistory();

    const changePassword = (data: PasswordChangeInterface) => {
        const changePasswordForm: ChangePasswordForm = {
            oldPassword: data.password,
            newPassword: data.newPassword1,
        };
        if (userData) {
            const usersId = userData?.userID;
            setIsFetching(true);
            try {
                changePasswordApi(usersId, changePasswordForm);
                setUsersData({type: USER_REDUCER_ACTIONS.REMOVE_DATA});
                window.sessionStorage.clear();
                setMessage(changePasswordSuccesText);
                logout();
                pushToHistory(ROUTES.LOGIN);
            } catch (err) {
                setMessage(fetchAPIError);
            } finally {
                setIsFetching(false);
            }
        }
    };

    const changeEmail = (data: EmailChangeInterface) => {
        if (userData) {
            const usersId = userData?.userID;
            setIsFetching(true);
            try {
                changeEmailApi(usersId, data);
                setUsersData({type: USER_REDUCER_ACTIONS.REMOVE_DATA});
                window.sessionStorage.clear();
                setMessage(changeEmailSuccesText);
                logout();
                pushToHistory(ROUTES.LOGIN);
            } catch (err) {
                setMessage(fetchAPIError);
            } finally {
                setIsFetching(false);
            }
        }
    };

    const deleteAccount = () => {
        if (userData) {
            const usersId = userData?.userID;
            setIsFetching(true);
            try {
                deleteUserApi(usersId);
                setUsersData({type: USER_REDUCER_ACTIONS.REMOVE_DATA});
                window.sessionStorage.clear();
                setMessage(deleteAccountSuccesText);
                logout();
                pushToHistory(ROUTES.LOGIN);
            } catch (err) {
                setMessage(deleteAccountFailText);
            } finally {
                setIsFetching(false);
            }
        }
    };

    return {changePassword, changeEmail, deleteAccount};
};

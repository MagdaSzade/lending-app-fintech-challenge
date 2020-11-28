import {registerNewUserApi} from '../api/apiUser';
import {useAppContext} from './useAppContext';
import {usePushToHistory} from './usePushToHistory';
import {ReagisterNewUserForm} from '../helpers/types';
import {NewUserInterface} from '../Components/Forms/RegisterForm/RegisterForm.interface';
import {ROUTES} from '../helpers/ROUTES';
import {fetchAPIError} from '../helpers/helpersText';

export const useRegisterNewUser = () => {
    const {setMessage, setIsFetching} = useAppContext();
    const pushToHistory = usePushToHistory();
    const registerUser = async (newUser: NewUserInterface) => {
        setIsFetching(true);
        try {
            const newUserForm: ReagisterNewUserForm = {
                email: newUser.email,
                password: newUser.password,
                phone: newUser.phone,
                name: newUser.name,
                surname: newUser.surname,
                roles: [newUser.role],
            };

            const response = await registerNewUserApi(newUserForm);
            if (response.status === 201) {
                setMessage({
                    type: 'info',
                    title: {
                        pl: 'rejestracja udana',
                        en: 'registration successful',
                    },
                    message: {
                        pl: 'zaloguj się',
                        en: 'login',
                    },
                });
            }
        } catch (error) {
            setMessage(fetchAPIError);
        } finally {
            setIsFetching(false);
            pushToHistory(ROUTES.LOGIN);
        }
    };
    return registerUser;
};

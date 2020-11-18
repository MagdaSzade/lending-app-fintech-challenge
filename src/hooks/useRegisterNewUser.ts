import {useAppContext} from './useAppContext';
import {registerNewUser} from '../api/apiUser';
import {NewUserInterface} from '../Components/RegisterForm/RegisterForm.interface';
import {usePushToHistory} from './usePushToHistory';
import {ReagisterNewUserForm} from '../helpers/types';
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

            const response = await registerNewUser(newUserForm);
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

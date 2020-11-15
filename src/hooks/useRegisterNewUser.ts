import {useAppContex} from './useAppContex';
import {registerNewUser} from '../api/apiUser';
import {NewUserInterface} from '../Components/RegisterForm/RegisterForm.interface';
import {usePushToHistory} from './usePushToHistory';
import {ReagisterNewUserDTO} from '../helpers/types';

export const useRegisterNewUser = () => {
    const {setMessage, setIsFetching} = useAppContex();
    const pushToHistory = usePushToHistory();
    const registerUser = async (newUser: NewUserInterface) => {
        setIsFetching(true);
        try {
            const newUserDTO: ReagisterNewUserDTO = {
                email: newUser.email,
                password: newUser.password,
                phone: newUser.phone,
                name: newUser.name,
                surname: newUser.surname,
                roles: [newUser.role],
            };

            const response = await registerNewUser(newUserDTO);
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
            } else if (response.status === 200) {
                setMessage({
                    type: 'info',
                    title: {
                        pl: 'podany email już jest zarejestrowany',
                        en: 'given email is already registered',
                    },
                });
            }
        } catch (error) {
            setMessage({
                type: 'error',
                title: {
                    pl: 'Coś poszło nie tak',
                    en: 'Something went wrong',
                },
                message: {
                    pl: 'spróbuj ponownie później',
                    en: 'try again later',
                },
            });
        } finally {
            setIsFetching(false);
            pushToHistory('/login');
        }
    };
    return registerUser;
};

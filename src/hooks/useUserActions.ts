import {EmailChangeInterface} from '../Components/Forms/EmailChangeForm/EmailChangeInterface';
import {PasswordChangeInterface} from '../Components/Forms/PasswordChangeForm/PasswordChangeForm.interface';

export const useUsersActions = () => {
    const changePassword = (data: PasswordChangeInterface) => {
        console.log('zmieniam hasło');
    };
    const changeEmail = (data: EmailChangeInterface) => {
        console.log('zmieniam hasło');
    };
    const deleteAccount = (userID: string) => {
        console.log('usuwam konto');
    };

    return {changePassword, changeEmail, deleteAccount};
};

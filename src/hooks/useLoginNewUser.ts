import {LoginUserInterface} from '../Components/LoginForm/LoginForm.interface';
import {loginUserApi} from '../api/apiUser';

export const useLoginNewUser = () => {
    const loginUser = async (userData: LoginUserInterface) => {
        const bodyFormData = new window.FormData();
        bodyFormData.append('username', userData.email);
        bodyFormData.append('password', userData.password);

        try {
            await loginUserApi(bodyFormData);
        } catch (err) {
        } finally {
        }
    };
    return loginUser;
};

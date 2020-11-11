import {LoginUserInterface} from '../Components/LoginForm/LoginForm.interface';
import {loginUserApi} from '../api/apiUser';

export const useLoginNewUser = () => {
    const loginUser = async (userData: LoginUserInterface) => {
        try {
            await loginUserApi(userData);
        } catch (err) {
        } finally {
        }
    };
    return loginUser;
};

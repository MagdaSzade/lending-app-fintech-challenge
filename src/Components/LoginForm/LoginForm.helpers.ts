import {LoginUserInterface} from './LoginForm.interface';
import {FormikErrors} from 'formik';

export const initialValues: LoginUserInterface = {
    email: '',
    password: '',
};

export const descriptions = {
    pl: {
        email: 'Email',
        password: 'Hasło',
        button: 'Zaloguj',
    },
    en: {
        email: 'Email',
        password: 'Password',
        button: 'Log in',
    },
};

export const loginFormValidation = (values: LoginUserInterface): FormikErrors<LoginUserInterface> => {
    const errors: FormikErrors<LoginUserInterface> = {};
    console.log('validuję forma!', values);
    return errors;
};

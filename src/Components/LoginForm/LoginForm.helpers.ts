import {LoginUserInterface} from './LoginForm.interface';
import {FormikErrors} from 'formik';
import {LANGS} from '../../helpers/types';

export const initialValues: LoginUserInterface = {
    email: '',
    password: '',
};

export const descriptions = {
    pl: {
        email: 'Email',
        password: 'Hasło',
        button: 'Zaloguj',
        buttonInValid: 'Uzupełnij poprawnie',
    },
    en: {
        email: 'Email',
        password: 'Password',
        button: 'Log in',
        buttonInValid: 'form is not valid',
    },
};

const fieldError = {
    pl: 'Pole nie może być puste',
    en: 'Field can not be empty',
};

export const loginFormValidation = (values: LoginUserInterface, lang: LANGS): FormikErrors<LoginUserInterface> => {
    const errors: FormikErrors<LoginUserInterface> = {};
    if (!values.email) {
        errors.email = lang === LANGS.PL ? fieldError.pl : fieldError.en;
    }

    if (!values.email.includes('@')) {
        errors.email = lang === LANGS.PL ? 'Niepoprawny format email' : 'Invalid email format';
    }

    if (!values.password) {
        errors.password = lang === LANGS.PL ? fieldError.pl : fieldError.en;
    }

    return errors;
};

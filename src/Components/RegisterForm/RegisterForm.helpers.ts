import {NewUserInterface} from './RegisterForm.interface';
import {FormikErrors} from 'formik';
import {LANGS, ROLE} from '../../helpers/types';

export const initialValues: NewUserInterface = {
    name: '',
    surname: '',
    email: '',
    phone: undefined,
    password: '',
    password2: '',
    role: ROLE.BORROWER,
};

export const descriptions = {
    pl: {
        name: 'Imię',
        surname: 'Nazwisko',
        email: 'Email',
        phone: 'Telefon',
        password: 'Hasło',
        password2: 'Powtórz hasło',
        borrower: 'Chcę pożyczyć pieniądze',
        lender: 'Chcę udzielić pożyczki',
        button: 'Załóż konto',
    },
    en: {
        name: 'User name',
        surname: 'User surname',
        email: 'Email',
        phone: 'Phone',
        password: 'Password',
        password2: 'Reapeat password',
        borrower: 'I want to borrow money',
        lender: 'I want to grant a loan',
        button: 'Create an account',
    },
};

const fieldError = {
    pl: 'Pole nie może być puste',
    en: 'Field can not be empty',
};

export const registerFormValidation = (values: NewUserInterface, lang: LANGS): FormikErrors<NewUserInterface> => {
    const errors: FormikErrors<NewUserInterface> = {};
    if (!values.name) {
        errors.name = lang === LANGS.PL ? fieldError.pl : fieldError.en;
    }
    if (!values.surname) {
        errors.surname = lang === LANGS.PL ? fieldError.pl : fieldError.en;
    }
    if (!values.email) {
        errors.email = lang === LANGS.PL ? fieldError.pl : fieldError.en;
    }

    if (!values.email.includes('@')) {
        errors.email = lang === LANGS.PL ? 'Niepoprawny format email' : 'Invalid email format';
    }

    if (!values.password) {
        errors.password = lang === LANGS.PL ? fieldError.pl : fieldError.en;
    }

    if (values.password.length < 6) {
        errors.password = lang === LANGS.PL ? 'Hasło musi mieć co najmniej 6 znaków' : 'Password has to have at least 6 chars';
    }

    if (values.password !== values.password2) {
        errors.password = lang === LANGS.PL ? 'Hasła muszą być jednakowe' : 'Passwords must be identical';
    }

    if (values.phone && values.phone?.toString().length !== 9) {
        errors.phone = lang === LANGS.PL ? 'Niepoprawny format numeru telefonu' : 'Invalid phone number format';
    }

    return errors;
};

import {NewUserInterface} from './RegisterForm.interface';
import {FormikErrors} from 'formik';
import {ROLE} from '../../helpers/types';

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

export const registerFormValidation = (values: NewUserInterface): FormikErrors<NewUserInterface> => {
    const errors: FormikErrors<NewUserInterface> = {};
    console.log('validuję forma!', values);
    return errors;
};

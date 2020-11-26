import {FormikErrors} from 'formik';
import {EmailChangeInterface} from './EmailChange.interface';

export const initialValues: EmailChangeInterface = {
    newEmail: '',
    password: '',
};

export const emailChangeFormValidation = (values: EmailChangeInterface): FormikErrors<EmailChangeInterface> => {
    const errors: FormikErrors<EmailChangeInterface> = {};
    if (!values.newEmail) {
        errors.newEmail = 'Nie może być pusty';
    }
    if (!values.newEmail.includes('@')) {
        errors.newEmail = 'niepoprawny email';
    }
    if (!values.password) {
        errors.password = 'Nie może być pusty';
    }

    return errors;
};

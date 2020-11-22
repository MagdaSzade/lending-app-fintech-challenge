import {FormikErrors} from 'formik';
import {PasswordChangeInterface} from './PasswordChangeForm.interface';

export const initialValues: PasswordChangeInterface = {
    newPassword1: '',
    newPassword2: '',
    password: '',
};

export const passwordChangeFormValidation = (values: PasswordChangeInterface): FormikErrors<PasswordChangeInterface> => {
    const errors: FormikErrors<PasswordChangeInterface> = {};
    if (!values.newPassword1) {
        errors.newPassword1 = 'Nie może być pusty';
    }
    if (!values.newPassword2) {
        errors.newPassword2 = 'Nie może być pusty';
    }
    if (values.newPassword1 !== values.newPassword2) {
        errors.newPassword1 = 'hasła muszą być jednakowe';
    }
    if (!values.password) {
        errors.password = 'Nie może być pusty';
    }

    return errors;
};

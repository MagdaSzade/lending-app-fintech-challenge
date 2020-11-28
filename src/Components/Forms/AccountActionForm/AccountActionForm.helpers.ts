import {FormikErrors} from 'formik';
import {AccountActionInterface} from './AccountActionForm.interface';

export const initialValues: AccountActionInterface = {
    value: 0,
};

export const accountFormValidation = (values: AccountActionInterface, valueMax?: number) => {
    const errors: FormikErrors<AccountActionInterface> = {};
    if (!values.value) {
        errors.value = 'kwota nie może być zerowa';
    }
    if ((valueMax === 0 || valueMax) && values.value > valueMax) {
        errors.value = 'wypłata nie może być większa niż stan konta';
    }
    if (!valueMax && values.value > 500000) {
        errors.value = 'wpłata nie może być większa niż 50 000 zł';
    }
    return errors;
};

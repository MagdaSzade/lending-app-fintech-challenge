import {FormikErrors} from 'formik';
import {BankingOperationInterface} from './BankingOperationForm.interface';

export const initialValues: BankingOperationInterface = {
    accountNumber: '',
    amount: 0,
    password: '',
};

export const bankingOperationFormValidation = (values: BankingOperationInterface): FormikErrors<BankingOperationInterface> => {
    const errors: FormikErrors<BankingOperationInterface> = {};

    return errors;
};

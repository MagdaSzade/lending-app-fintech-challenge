import {FormikErrors} from 'formik';
import {GetInquiryFormInterface} from './GetInquiriesForm.interface';

export const initialValues: GetInquiryFormInterface = {
    minAmount: 1000,
    maxAmount: 5000,
    minLoanDuration: 12,
    maxLoanDuration: 24,
};

export const getInquiriesValidation = (values: GetInquiryFormInterface) => {
    const errors: FormikErrors<GetInquiryFormInterface> = {};
    if (values.minAmount < 100) {
        errors.minAmount = 'kwota nie może być mniejsza niż 100 zł';
    }
    if (values.minLoanDuration < 1) {
        errors.minLoanDuration = 'Czas pożyczki nie może być mniejszy niż 1 miesiąc.';
    }
    if (values.maxAmount > 10000) {
        errors.maxAmount = 'Maksymalna kwota pożyczki wynosi 10 000 zł.';
    }
    if (values.maxAmount < values.minAmount) {
        errors.maxAmount = 'Maksymalna kwota pożyczki musi być większa niż minimalna.';
    }
    if (values.maxLoanDuration > 24) {
        errors.maxLoanDuration = 'maxymalny czas pożyczki to 24 miesiące';
    }
    if (values.maxLoanDuration < values.minLoanDuration) {
        errors.maxLoanDuration = 'Maksymalny czas pożyczki musi być większy niż minimalny.';
    }

    return errors;
};

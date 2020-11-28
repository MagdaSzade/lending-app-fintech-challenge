import {FormikErrors} from 'formik';
import {InquiryFormInterface} from './InquiryForm.interface';

export const initialValues: InquiryFormInterface = {
    loanAmount: 1000,
    loanDuration: 12,
    submissionDeadline: 3,
};

export const inquiryFormValidate = (values: InquiryFormInterface) => {
    const errors: FormikErrors<InquiryFormInterface> = {};
    if (values.loanAmount > 10000 || values.loanAmount < 100) {
        errors.loanAmount = 'Kwota pożyczki musi zawierać się pomiędzy 100 zł a 10 000 zł';
    }
    if (values.loanDuration < 1 || values.loanDuration > 24) {
        errors.loanDuration = 'Czas trwania pożyczki musi zawierać się pomiędzy 1 a 24 miesięcy';
    }
    if (values.submissionDeadline < 3 || values.submissionDeadline > 7) {
        errors.submissionDeadline = 'Czas na składanie ofert musi zawierać się pomiędzy 3 a 7 dni';
    }
    return errors;
};

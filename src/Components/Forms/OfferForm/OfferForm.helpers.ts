import {FormikErrors} from 'formik';
import {OfferFormInterface} from './OfferForm.interface';

interface initialValuesInterface {
    (pathname: string): OfferFormInterface;
}

export const initialValues: initialValuesInterface = pathname => {
    const initData = pathname.split('/');

    return {propposedDuration: parseInt(initData[7]), annualIntrestRate: 3, proposedAmount: parseInt(initData[5]), inquiryID: initData[4]};
};

export const offerFormValidation = (values: OfferFormInterface) => {
    const errors: FormikErrors<OfferFormInterface> = {};
    if (values.proposedAmount > 10000 || values.proposedAmount < 100) {
        errors.proposedAmount = 'Kwota pożyczki musi zawierać się pomiędzy 100 zł a 10 000 zł';
    }
    if (values.propposedDuration < 1 || values.propposedDuration > 24) {
        errors.propposedDuration = 'Czas trwania pożyczki musi zawierać się pomiędzy 1 a 24 miesięcy';
    }
    if (values.annualIntrestRate < 0.1 || values.annualIntrestRate > 12) {
        errors.annualIntrestRate = 'Oprocentowanie roczne musi się zawierać pomiędzy 0.1% a 12%';
    }
    return errors;
};

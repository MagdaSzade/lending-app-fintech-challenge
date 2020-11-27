import {OfferFormInterface} from './OfferForm.interface';

interface initialValuesInterface {
    (pathname: string): OfferFormInterface;
}

export const initialValues: initialValuesInterface = pathname => {
    const initData = pathname.split('/');

    return {annualIntrestRate: parseInt(initData[6]), proposedAmount: parseInt(initData[5]), inquiryID: initData[4]};
};

import {getInquiriesValidation} from '../../../src/Components/Forms/GetInquiriesForm/GetInquiriesForm.helpers';
import {GetInquiryFormInterface} from '../../../src/Components/Forms/GetInquiriesForm/GetInquiriesForm.interface';
import {getInquiryFormInterfaceFactory} from '../../helpers/factories';

enum ERRORS_TYPES {
    MIN_AMOUNT = 'minAmount',
    MAX_AMOUNT = 'maxAmount',
    MIN_LOAN = 'minLoanDuration',
    MAX_LOAN = 'maxLoanDuration',
}

describe('getInquiriesValidation', () => {
    test.each([
        [getInquiryFormInterfaceFactory.build({minAmount: 0}), ERRORS_TYPES.MIN_AMOUNT],
        [getInquiryFormInterfaceFactory.build({minLoanDuration: 0}), ERRORS_TYPES.MIN_LOAN],
        [getInquiryFormInterfaceFactory.build({maxAmount: 10001}), ERRORS_TYPES.MAX_AMOUNT],
        [getInquiryFormInterfaceFactory.build({maxAmount: 0}), ERRORS_TYPES.MAX_AMOUNT],
        [getInquiryFormInterfaceFactory.build({maxLoanDuration: 0}), ERRORS_TYPES.MAX_LOAN],
        [getInquiryFormInterfaceFactory.build({maxLoanDuration: 25}), ERRORS_TYPES.MAX_LOAN],
    ])('for %o sholud be defined error %s', (values: GetInquiryFormInterface, name: ERRORS_TYPES) => {
        const result = getInquiriesValidation(values);
        expect(result[name]).toBeDefined();
    });

    test.each([
        [getInquiryFormInterfaceFactory.build({minAmount: 100}), ERRORS_TYPES.MAX_AMOUNT],
        [getInquiryFormInterfaceFactory.build({maxLoanDuration: 24}), ERRORS_TYPES.MIN_AMOUNT],
        [getInquiryFormInterfaceFactory.build({minLoanDuration: 1}), ERRORS_TYPES.MIN_AMOUNT],
        [getInquiryFormInterfaceFactory.build({maxAmount: 10000}), ERRORS_TYPES.MIN_AMOUNT],
    ])('error %o should not be defined for %s', (values: GetInquiryFormInterface, name: ERRORS_TYPES) => {
        const result = getInquiriesValidation(values);
        expect(result[name]).toBeUndefined();
    });
});

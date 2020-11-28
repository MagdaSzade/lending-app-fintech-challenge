import {inquiryFormValidate} from '../../../src/Components/Forms/InquiryForm/InquiryForm.helpers';
import {InquiryFormInterface} from '../../../src/Components/Forms/InquiryForm/InquiryForm.interface';
import {inquiryFormInterfaceFactory} from '../../helpers/factories';

enum ERRORS_TYPES {
    LOAN_AMOUNT = 'loanAmount',
    LOAN_DURATION = 'loanDuration',
    SUBMISSION = 'submissionDeadline',
}

describe('inquiryFormValidate', () => {
    test.each([
        [inquiryFormInterfaceFactory.build({loanAmount: 10001}), ERRORS_TYPES.LOAN_AMOUNT],
        [inquiryFormInterfaceFactory.build({loanAmount: 10}), ERRORS_TYPES.LOAN_AMOUNT],
        [inquiryFormInterfaceFactory.build({loanDuration: 0}), ERRORS_TYPES.LOAN_DURATION],
        [inquiryFormInterfaceFactory.build({loanDuration: 25}), ERRORS_TYPES.LOAN_DURATION],
        [inquiryFormInterfaceFactory.build({submissionDeadline: 2}), ERRORS_TYPES.SUBMISSION],
        [inquiryFormInterfaceFactory.build({submissionDeadline: 8}), ERRORS_TYPES.SUBMISSION],
    ])('for %o errors %s should be defined', (values: InquiryFormInterface, name: ERRORS_TYPES) => {
        const result = inquiryFormValidate(values);
        expect(result[name]).toBeDefined();
    });

    test.each([
        [inquiryFormInterfaceFactory.build({loanAmount: 10000}), ERRORS_TYPES.LOAN_AMOUNT],
        [inquiryFormInterfaceFactory.build({loanAmount: 100}), ERRORS_TYPES.LOAN_AMOUNT],
        [inquiryFormInterfaceFactory.build({loanDuration: 1}), ERRORS_TYPES.LOAN_DURATION],
        [inquiryFormInterfaceFactory.build({loanDuration: 24}), ERRORS_TYPES.LOAN_DURATION],
        [inquiryFormInterfaceFactory.build({submissionDeadline: 3}), ERRORS_TYPES.SUBMISSION],
        [inquiryFormInterfaceFactory.build({submissionDeadline: 7}), ERRORS_TYPES.SUBMISSION],
    ])('for %o errors %s  should not be defined', (values: InquiryFormInterface, name: ERRORS_TYPES) => {
        const result = inquiryFormValidate(values);
        expect(result[name]).toBeUndefined();
    });
});

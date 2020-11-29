import {offerFormValidation} from '../../../src/Components/Forms/OfferForm/OfferForm.helpers';
import {OfferFormInterface} from '../../../src/Components/Forms/OfferForm/OfferForm.interface';
import {offerFormInterfaceFactory} from '../../helpers/factories';

enum ERRORS_TYPES {
    AMOUNT = 'proposedAmount',
    DURATION = 'propposedDuration',
    INTREST_RATE = 'annualInterestRate',
}

describe('offerFormValidation', () => {
    test.each([
        [offerFormInterfaceFactory.build({proposedAmount: 10001}), ERRORS_TYPES.AMOUNT],
        [offerFormInterfaceFactory.build({proposedAmount: 99}), ERRORS_TYPES.AMOUNT],
        [offerFormInterfaceFactory.build({propposedDuration: 0}), ERRORS_TYPES.DURATION],
        [offerFormInterfaceFactory.build({propposedDuration: 25}), ERRORS_TYPES.DURATION],
        [offerFormInterfaceFactory.build({annualInterestRate: 0}), ERRORS_TYPES.INTREST_RATE],
        [offerFormInterfaceFactory.build({annualInterestRate: 13}), ERRORS_TYPES.INTREST_RATE],
    ])('for %o errors %s should be defined', (values: OfferFormInterface, name: ERRORS_TYPES) => {
        const result = offerFormValidation(values);
        expect(result[name]).toBeDefined();
    });

    test.each([
        [offerFormInterfaceFactory.build({proposedAmount: 1000}), ERRORS_TYPES.AMOUNT],
        [offerFormInterfaceFactory.build({proposedAmount: 100}), ERRORS_TYPES.AMOUNT],
        [offerFormInterfaceFactory.build({propposedDuration: 1}), ERRORS_TYPES.DURATION],
        [offerFormInterfaceFactory.build({propposedDuration: 24}), ERRORS_TYPES.DURATION],
        [offerFormInterfaceFactory.build({annualInterestRate: 0.1}), ERRORS_TYPES.INTREST_RATE],
        [offerFormInterfaceFactory.build({annualInterestRate: 12}), ERRORS_TYPES.INTREST_RATE],
    ])('for %o errors %s should not be defined', (values: OfferFormInterface, name: ERRORS_TYPES) => {
        const result = offerFormValidation(values);
        expect(result[name]).toBeUndefined();
    });
});

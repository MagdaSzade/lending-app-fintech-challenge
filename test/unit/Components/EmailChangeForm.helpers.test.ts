import {EmailChangeInterface} from '../../../src/Components/Forms/EmailChangeForm/EmailChange.interface';
import {emailChangeFormValidation} from '../../../src/Components/Forms/EmailChangeForm/EmailChangeForm.helpers';
import {changeEmailFactory} from '../../helpers/factories';

enum ERRORS_TYPES {
    PASSWORD = 'password',
    EMAIL = 'newEmail',
}

describe('emailChangeFrormValidation', () => {
    test.each([
        [changeEmailFactory.build({password: ''}), ERRORS_TYPES.PASSWORD],
        [changeEmailFactory.build({newEmail: ''}), ERRORS_TYPES.EMAIL],
        [changeEmailFactory.build({newEmail: 'testbezmalpy'}), ERRORS_TYPES.EMAIL],
    ])('error should be defined', (values: EmailChangeInterface, name: ERRORS_TYPES) => {
        const result = emailChangeFormValidation(values);
        expect(result[name]).toBeDefined();
    });

    test.each([
        [changeEmailFactory.build({password: 'password'}), ERRORS_TYPES.PASSWORD],
        [changeEmailFactory.build({newEmail: 'test@test'}), ERRORS_TYPES.EMAIL],
    ])('error should not be defined', (values: EmailChangeInterface, name: ERRORS_TYPES) => {
        const result = emailChangeFormValidation(values);
        expect(result[name]).toBeUndefined();
    });
});

import {passwordChangeFormValidation} from '../../../src/Components/Forms/PasswordChangeForm/PasswordChangeForm.helpers';
import {PasswordChangeInterface} from '../../../src/Components/Forms/PasswordChangeForm/PasswordChangeForm.interface';
import {passwordChangeInterfaceFactory} from '../../helpers/factories';

enum ERRORS_TYPES {
    PASSWORD1 = 'newPassword1',
    PASSWORD2 = 'newPassword2',
    PASSWORD = 'password',
}

describe('passwordChangeFormValidation', () => {
    test.each([
        [passwordChangeInterfaceFactory.build({password: ''}), ERRORS_TYPES.PASSWORD],
        [passwordChangeInterfaceFactory.build({newPassword1: ''}), ERRORS_TYPES.PASSWORD1],
        [passwordChangeInterfaceFactory.build({newPassword2: ''}), ERRORS_TYPES.PASSWORD2],
        [passwordChangeInterfaceFactory.build({newPassword1: 'eeee', newPassword2: 'bbbbb'}), ERRORS_TYPES.PASSWORD1],
    ])('for %o errors %s should be defined', (values: PasswordChangeInterface, name: ERRORS_TYPES) => {
        const result = passwordChangeFormValidation(values);
        expect(result[name]).toBeDefined();
    });

    it('should not have any errors if valid input data', () => {
        const result = passwordChangeFormValidation(passwordChangeInterfaceFactory.build());
        expect(result).toStrictEqual({});
    });
});

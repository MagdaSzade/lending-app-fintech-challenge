import {loginFormValidation} from '../../../src/Components/Forms/LoginForm/LoginForm.helpers';
import {LoginUserInterface} from '../../../src/Components/Forms/LoginForm/LoginForm.interface';
import {LANGS} from '../../../src/helpers/types';
import {loginUserFactory} from '../../helpers/factories';

enum ERRORS_TYPES {
    EMAIL = 'email',
    PASSWORD = 'password',
}

describe('loginFormValidation', () => {
    test.each([
        [loginUserFactory.build({email: ''}), ERRORS_TYPES.EMAIL],
        [loginUserFactory.build({email: 'testemail'}), ERRORS_TYPES.EMAIL],
        [loginUserFactory.build({password: ''}), ERRORS_TYPES.PASSWORD],
    ])('for %o errors %s should be defined', (values: LoginUserInterface, name: ERRORS_TYPES) => {
        const result = loginFormValidation(values, LANGS.PL);
        expect(result[name]).toBeDefined();
    });

    it('should not be defined if valid inputs', () => {
        const values = loginUserFactory.build();
        expect(loginFormValidation(values, LANGS.PL)).toStrictEqual({});
    });
});

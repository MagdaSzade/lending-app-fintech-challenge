import {registerFormValidation} from '../../../../src/Components/RegisterForm/RegisterForm.helpers';
import {LANGS} from '../../../../src/helpers/types';
import {newUserFactory} from '../../../helpers/factories';

describe('registerFormValidation', () => {
    it('should return errors.name if name not filled', () => {
        const newUser = newUserFactory.build({name: ''});
        const errors = registerFormValidation(newUser, LANGS.PL);
        expect(errors.name).toBeDefined();
    });

    it('should return errors.surname if surname not filled', () => {
        const newUser = newUserFactory.build({surname: ''});
        const errors = registerFormValidation(newUser, LANGS.PL);
        expect(errors.surname).toBeDefined();
    });

    it('should return errors.email if email not filled', () => {
        const newUser = newUserFactory.build({email: ''});
        const errors = registerFormValidation(newUser, LANGS.PL);
        expect(errors.email).toBeDefined();
    });

    it('should return errors.email if email not includes @', () => {
        const newUser = newUserFactory.build({email: '1234dfvsdsdf'});
        const errors = registerFormValidation(newUser, LANGS.PL);
        expect(errors.email).toBeDefined();
    });

    it('should return errors.password if password not filled', () => {
        const newUser = newUserFactory.build({password: ''});
        const errors = registerFormValidation(newUser, LANGS.PL);
        expect(errors.password).toBeDefined();
    });

    it('should return errors.password if password has less than 6 chars', () => {
        const password = 'Bla1!';
        const newUser = newUserFactory.build({password: password, password2: password});
        const errors = registerFormValidation(newUser, LANGS.PL);
        expect(errors.password).toBeDefined();
    });

    it('should return errors.password if password2 not filled', () => {
        const newUser = newUserFactory.build({password2: ''});
        const errors = registerFormValidation(newUser, LANGS.PL);
        expect(errors.password).toBeDefined();
    });

    it('should return errors.password if password2 is not same as password', () => {
        const newUser = newUserFactory.build({password2: 'blablabla'});
        const errors = registerFormValidation(newUser, LANGS.PL);
        expect(errors.password).toBeDefined();
    });

    it('should return errors.phone if phone has less than 9 numbers', () => {
        const newUser = newUserFactory.build({phone: 123});
        const errors = registerFormValidation(newUser, LANGS.PL);
        expect(errors.phone).toBeDefined();
    });
});

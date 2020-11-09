import * as Factory from 'factory.ts';
import {NewUserInterface} from '../../src/Components/RegisterForm/RegisterForm.interface';
import {LANGS, ROLE} from '../../src/helpers/types';
import {ContextInterface} from '../../src/Components/Context/Context.interface';

export const contextInterfaceFactory = Factory.Sync.makeFactory<ContextInterface>({
    lang: LANGS.PL,
    changeLang: lang => {
        return;
    },
    message: null,
    setMessage: error => {
        return;
    },
    isFetching: false,
    setIsFetching: isFetching => {
        return;
    },
});

export const newUserFactory = Factory.Sync.makeFactory<NewUserInterface>({
    name: 'Test_data',
    surname: 'test_data',
    email: 'test@testdata.pl',
    phone: 222222222,
    password: 'password',
    password2: 'password',
    role: ROLE.BORROWER,
});

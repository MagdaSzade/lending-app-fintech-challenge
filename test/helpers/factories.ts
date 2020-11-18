import * as Factory from 'factory.ts';
import {NewUserInterface} from '../../src/Components/RegisterForm/RegisterForm.interface';
import {LANGS, ROLE} from '../../src/helpers/types';
import {ContextInterface} from '../../src/Components/Context/Context.interface';
import {LoginUserInterface} from '../../src/Components/LoginForm/LoginForm.interface';

export const contextInterfaceFactory = Factory.Sync.makeFactory<ContextInterface>({
    lang: LANGS.PL,
    changeLang: lang => {},
    message: null,
    setMessage: error => {},
    isFetching: false,
    setIsFetching: isFetching => {},
    isLoggedin: false,
    login: () => {},
    logout: () => {},
    user: null,
    userDataReducer: () => {},
});

export const newUserFactory = Factory.Sync.makeFactory<NewUserInterface>({
    name: 'Test_data',
    surname: 'test_data',
    email: 'test@testdata.pl',
    phone: 222222222,
    password: 'password123@',
    password2: 'password123@',
    role: ROLE.BORROWER,
});

export const loginUserFactory = Factory.Sync.makeFactory<LoginUserInterface>({
    email: 'magda123@email.com',
    password: 'wisnia123',
});

import {createContext} from 'react';
import {LANGS} from '../../helpers/types';
import {ContextInterface} from './Context.interface';

export const defaultValues = {
    lang: LANGS.PL,
    isFetching: false,
    message: null,
    isLoggedin: false,
    user: null,
};

const initialValues: ContextInterface = {
    lang: LANGS.PL,
    isFetching: false,
    message: null,
    isLoggedin: false,
    user: null,
    changeLang: lang => {},
    setMessage: message => {},
    setIsFetching: isFetching => {},
    login: () => {},
    logout: () => {},
    userDataReducer: () => {},
};

export const AppContext = createContext({...initialValues});

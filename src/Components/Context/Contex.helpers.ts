import {createContext} from 'react';
import {LANGS} from '../../helpers/types';
import {ContextInterface} from './Context.interface';

const initialValues: ContextInterface = {
    lang: LANGS.PL,
    isFetching: false,
    message: null,
    isLoggedin: false,
    userData: null,
    changeLang: lang => {},
    setMessage: message => {},
    setIsFetching: isFetching => {},
    login: () => {},
    logout: () => {},
    setUsersData: () => {},
};

export const AppContext = createContext({...initialValues});

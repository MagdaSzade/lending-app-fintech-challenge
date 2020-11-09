import {createContext} from 'react';
import {ContextInterface} from '../Components/Context/Context.interface';
import {LANGS} from '../helpers/types';

const initialValues: ContextInterface = {
    lang: LANGS.PL,
    isFetching: false,
    message: null,
    changeLang: lang => {
        return;
    },
    setMessage: message => {
        return;
    },
    setIsFetching: isFetching => {
        return;
    },
};

export const AppContext = createContext({...initialValues});

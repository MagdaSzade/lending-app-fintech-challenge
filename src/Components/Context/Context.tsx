import React from 'react';
import {createContext, useContext, useState} from 'react';
import {ContextInterface} from '../../helpers/types';
import {defaultValues, LANGS} from './Contex.helpers';

const initialValues: ContextInterface = {
    ...defaultValues,
    changeLang: lang => {
        return {};
    },
};

const AppContext = createContext({...initialValues});

export const AppContextProvider = (props: any) => {
    const [lang, setLang] = useState(defaultValues);

    const changeLang = (lang: LANGS) => {
        setLang({lang});
    };

    const values = {...lang, changeLang};

    return <AppContext.Provider value={values} {...props} />;
};

export const useAppContex = () => {
    return useContext(AppContext);
};

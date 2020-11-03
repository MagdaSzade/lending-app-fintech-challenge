import React from 'react';
import {createContext, useContext, useState} from 'react';
import {defaultValues, LANGS} from './Contex.helpers';

const AppContext = createContext({...defaultValues, changeLang: (lang: string) => {}});

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

import React from 'react';
import {AppContext} from '../../context/AppContext';
import {useState} from 'react';
import {defaultValues} from './Contex.helpers';
import {LANGS} from '../../helpers/types';

export const AppContextProvider = (props: any) => {
    const [lang, setLang] = useState(defaultValues.lang);
    const [message, setMassage] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    const changeLang = (lang: LANGS) => {
        setLang(lang);
    };

    const values = {lang, changeLang, message, setMassage, isFetching, setIsFetching};

    return <AppContext.Provider value={values} {...props} />;
};

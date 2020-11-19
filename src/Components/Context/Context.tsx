import React, {useCallback, useMemo} from 'react';
import {useState} from 'react';
import {AppContext} from './Contex.helpers';
import {LANGS, Message} from '../../helpers/types';

export const AppContextProvider = (props: any) => {
    const [lang, changeLang] = useState(LANGS.PL);
    const [message, setMessage] = useState<Message | null>(null);
    const [isFetching, setIsFetching] = useState(false);
    const [isLoggedin, setIsLoggedIn] = useState<boolean>(window.sessionStorage.getItem('auth') ? true : false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        window.sessionStorage.clear();
        setIsLoggedIn(false);
    }, []);

    const values = useMemo(() => {
        return {
            lang,
            changeLang,
            message,
            setMessage,
            isFetching,
            setIsFetching,
            isLoggedin,
            login,
            logout,
        };
    }, [lang, changeLang, message, setMessage, isFetching, setIsFetching, isLoggedin, login, logout]);

    return <AppContext.Provider value={values} {...props} />;
};

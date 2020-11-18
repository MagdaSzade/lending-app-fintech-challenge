import React, {useCallback, useMemo} from 'react';
import {useState} from 'react';
import {AppContext} from './Contex.helpers';
import {LANGS, Message} from '../../helpers/types';

export const AppContextProvider = (props: any) => {
    const [token, setToken] = useState<string | undefined>(undefined);
    const [lang, changeLang] = useState(LANGS.PL);
    const [message, setMessage] = useState<Message | null>(null);
    const [isFetching, setIsFetching] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
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
            isLoggedIn,
            login,
            logout,
            token,
            setToken,
        };
    }, [lang, changeLang, message, setMessage, isFetching, setIsFetching, isLoggedIn, login, logout, token, setToken]);

    return <AppContext.Provider value={values} {...props} />;
};

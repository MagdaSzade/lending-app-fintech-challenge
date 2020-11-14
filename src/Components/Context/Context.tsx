import React, {useCallback, useMemo} from 'react';
import {useState} from 'react';
import {defaultValues, AppContext} from './Contex.helpers';
import {LANGS, Message} from '../../helpers/types';

export const AppContextProvider = (props: any) => {
    const [lang, setLang] = useState(defaultValues.lang);
    const [message, setMessageState] = useState<Message | null>(null);
    const [isFetching, setIsFetchingState] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const changeLang = useCallback((lang: LANGS) => {
        setLang(lang);
    }, []);

    const setIsFetching = useCallback((isFetchingNewState: boolean) => {
        setIsFetchingState(isFetchingNewState);
    }, []);

    const setMessage = useCallback((newMessage: Message | null) => {
        setMessageState(newMessage);
    }, []);

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
        };
    }, [lang, changeLang, message, setMessage, isFetching, setIsFetching, isLoggedIn, login, logout]);

    return <AppContext.Provider value={values} {...props} />;
};

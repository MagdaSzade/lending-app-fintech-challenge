import React, {useCallback, useMemo, useReducer} from 'react';
import {useState} from 'react';
import {AppContext} from './Contex.helpers';
import {LANGS, Message} from '../../helpers/types';
import {userReducer} from '../../helpers/reducers';
import {testUser} from '../../helpers/testValues';

export const AppContextProvider = (props: any) => {
    const [lang, changeLang] = useState(LANGS.PL);
    const [message, setMessage] = useState<Message | null>(null);
    const [isFetching, setIsFetching] = useState(false);
    //const [isLoggedin, setIsLoggedIn] = useState<boolean>(window.sessionStorage.getItem('auth') ? true : false);
    const [isLoggedin, setIsLoggedIn] = useState<boolean>(true);
    const [userData, setUserData] = useReducer(userReducer, testUser);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setUserData({type: 'removeUser'});
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
            userData,
            setUserData,
        };
    }, [lang, changeLang, message, setMessage, isFetching, setIsFetching, isLoggedin, login, logout, userData, setUserData]);

    return <AppContext.Provider value={values} {...props} />;
};

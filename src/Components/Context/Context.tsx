import React, {useState, useCallback, useMemo, useReducer} from 'react';
import {AppContext} from './Contex.helpers';
import {userReducer, USER_REDUCER_ACTIONS} from '../../helpers/reducers';
import {LANGS, Message} from '../../helpers/types';
import {testUser} from '../../helpers/testValues';

export const AppContextProvider = (props: any) => {
    const [lang, changeLang] = useState(LANGS.PL);
    const [message, setMessage] = useState<Message | null>(null);
    const [isFetching, setIsFetching] = useState(false);
    const [isLoggedin, setIsLoggedIn] = useState<boolean>(window.sessionStorage.getItem('x-auth') ? true : false);
    const [userData, setUsersData] = useReducer(userReducer, null);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setUsersData({type: USER_REDUCER_ACTIONS.REMOVE_DATA});
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
            setUsersData,
        };
    }, [lang, changeLang, message, setMessage, isFetching, setIsFetching, isLoggedin, login, logout, userData, setUsersData]);

    return <AppContext.Provider value={values} {...props} />;
};

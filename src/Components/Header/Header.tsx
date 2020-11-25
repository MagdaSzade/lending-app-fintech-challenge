import React from 'react';
import {flex, buttonStyle, pStyle, headerStyle} from './Header.styles';
import {useAppContext} from '../../hooks/useAppContext';
import {LANGS} from '../../helpers/types';
import {Button} from '@material-ui/core';
import {USER_REDUCER_ACTIONS} from '../../helpers/reducers';
import {testBorrower, testUser} from '../../helpers/testValues';

export const Header: React.FC = () => {
    const {changeLang, isLoggedin, logout, login, setUsersData} = useAppContext();
    const onClick = () => {
        logout();
        setUsersData({type: USER_REDUCER_ACTIONS.NEW_USER, payload: testUser});
        login();
    };

    const onClick2 = () => {
        logout();
        setUsersData({type: USER_REDUCER_ACTIONS.NEW_USER, payload: testBorrower});
        login();
    };

    const displayLogoutButton = () => (isLoggedin ? <Button onClick={logout}>LogOut</Button> : null);

    return (
        <header className={headerStyle}>
            {displayLogoutButton()}
            <Button onClick={onClick}>TEST LENDER</Button>
            <Button onClick={onClick2}>TEST BORROWER</Button>
            <div className={flex}>
                <button
                    className={buttonStyle}
                    onClick={() => {
                        changeLang(LANGS.PL);
                    }}
                >
                    PL
                </button>
                <p className={pStyle}>/</p>
                <button
                    className={buttonStyle}
                    onClick={() => {
                        changeLang(LANGS.EN);
                    }}
                >
                    EN
                </button>
            </div>
        </header>
    );
};

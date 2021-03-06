import React from 'react';
import {Button} from '@material-ui/core';
import {useAppContext} from '../../hooks/useAppContext';
import {LANGS} from '../../helpers/types';
import {flex, buttonStyle, pStyle, headerStyle} from './Header.styles';

export const Header: React.FC = () => {
    const {changeLang, isLoggedin, logout} = useAppContext();

    const displayLogoutButton = () =>
        isLoggedin ? (
            <Button id="logout" onClick={logout}>
                LogOut
            </Button>
        ) : null;

    return (
        <header className={headerStyle}>
            {displayLogoutButton()}
            <div className={flex}>
                <button
                    id="pl"
                    className={buttonStyle}
                    onClick={() => {
                        changeLang(LANGS.PL);
                    }}
                >
                    PL
                </button>
                <p className={pStyle}>/</p>
                <button
                    id="en"
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

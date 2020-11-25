import React from 'react';
import {flex, buttonStyle, pStyle, headerStyle} from './Header.styles';
import {useAppContext} from '../../hooks/useAppContext';
import {LANGS} from '../../helpers/types';
import {Button} from '@material-ui/core';

export const Header: React.FC = () => {
    const {changeLang, isLoggedin, logout} = useAppContext();

    const displayLogoutButton = () => (isLoggedin ? <Button onClick={logout}>LogOut</Button> : null);

    return (
        <header className={headerStyle}>
            {displayLogoutButton()}
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

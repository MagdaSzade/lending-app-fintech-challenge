import {Button} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import {BiMenu} from 'react-icons/bi';
import {NavLink} from 'react-router-dom';
import {ROUTES} from '../../helpers/ROUTES';
import {ROLE} from '../../helpers/types';
import {useAppContext} from '../../hooks/useAppContext';
import {iconNavStyle, navbarConteinerStyle, displayNoneStyle, displayBlockStyle, centerIconStyle} from './NavBar.styles';

export const NavBar: React.FC = () => {
    const {userData} = useAppContext();
    const [linkStyle, setLinkStyle] = useState(displayNoneStyle);
    const [isNavBar, setIsNavBar] = useState(false);

    const toggle = () => {
        setIsNavBar(prevState => {
            return !prevState;
        });
    };

    useEffect(() => {
        const linkStyleDisplay = () => {
            return isNavBar ? displayBlockStyle : displayNoneStyle;
        };
        setLinkStyle(linkStyleDisplay());
    }, [isNavBar]);

    return (
        <nav className={navbarConteinerStyle}>
            <div onClick={toggle} className={iconNavStyle}>
                <BiMenu id="navbutton" size="1.5rem" className={centerIconStyle} />
            </div>
            {userData?.role === ROLE.BORROWER ? (
                <NavLink onClick={toggle} className={linkStyle} to={ROUTES.USER_MAKE_INQUIRIES}>
                    <Button id="newInquiryNav">Nowe zpytanie</Button>
                </NavLink>
            ) : (
                <NavLink onClick={toggle} className={linkStyle} to={ROUTES.USER_FIND_INQUIRIES}>
                    <Button id="getInquiriesNav">Sprawdź zapytania</Button>
                </NavLink>
            )}
            {userData?.role === ROLE.BORROWER ? (
                <NavLink onClick={toggle} className={linkStyle} to={ROUTES.USER_INQUIRIES}>
                    <Button id="inquiriesListNav">Zapytania ofertowe</Button>
                </NavLink>
            ) : (
                <NavLink onClick={toggle} className={linkStyle} to={ROUTES.USER_OFFERS}>
                    <Button id="offersListNav">Złożone oferty</Button>
                </NavLink>
            )}
            <NavLink onClick={toggle} className={linkStyle} to={ROUTES.USER_LOANS}>
                <Button id="loansNav">Pożyczki</Button>
            </NavLink>
            <NavLink onClick={toggle} className={linkStyle} to={ROUTES.USER_MESSAGES}>
                <Button id="messagesNav">Widomości</Button>
            </NavLink>
            <NavLink onClick={toggle} className={linkStyle} to={ROUTES.USER_ACCOUNT}>
                <Button id="bankAccountNav">Konto</Button>
            </NavLink>
            <NavLink onClick={toggle} className={linkStyle} to={ROUTES.USER_PROFILE}>
                <Button id="profileNav">Profil</Button>
            </NavLink>
        </nav>
    );
};

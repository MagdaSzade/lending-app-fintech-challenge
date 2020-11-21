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
        setLinkStyle(linkStyleDisplay());
    }, [isNavBar]);

    const linkStyleDisplay = () => {
        return isNavBar ? displayBlockStyle : displayNoneStyle;
    };

    if (userData?.role === ROLE.BORROWER) {
        return (
            <nav className={navbarConteinerStyle}>
                <div onClick={toggle} className={iconNavStyle}>
                    <BiMenu size="1.5rem" className={centerIconStyle} />
                </div>
                <NavLink onClick={toggle} className={linkStyle} to={ROUTES.USER_MAKE_INQUIRIES}>
                    <Button>Nowe zpytanie</Button>
                </NavLink>
                <NavLink onClick={toggle} className={linkStyle} to={ROUTES.USER_INQUIRIES}>
                    <Button>Zapytania ofertowe</Button>
                </NavLink>
                <NavLink onClick={toggle} className={linkStyle} to={ROUTES.USER_LOANS}>
                    <Button>Pożyczki</Button>
                </NavLink>
                <NavLink onClick={toggle} className={linkStyle} to={ROUTES.USER_MESSAGES}>
                    <Button>Widomości</Button>
                </NavLink>
                <NavLink onClick={toggle} className={linkStyle} to={ROUTES.USER_ACCOUNT}>
                    <Button>Konto</Button>
                </NavLink>
                <NavLink onClick={toggle} className={linkStyle} to={ROUTES.USER_PROFILE}>
                    <Button>Profil</Button>
                </NavLink>
            </nav>
        );
    } else {
        return (
            <nav className={navbarConteinerStyle}>
                <Button onClick={toggle} className={iconNavStyle}>
                    <BiMenu />
                </Button>
                <NavLink onClick={toggle} className={linkStyle} to={ROUTES.USER_MAKE_INQUIRIES}>
                    <Button>Nowe zpytanie</Button>
                </NavLink>
                <NavLink onClick={toggle} className={linkStyle} to={ROUTES.USER_INQUIRIES}>
                    <Button>Zapytania ofertowe</Button>
                </NavLink>
                <NavLink onClick={toggle} className={linkStyle} to={ROUTES.USER_LOANS}>
                    <Button>Pożyczki</Button>
                </NavLink>
                <NavLink onClick={toggle} className={linkStyle} to={ROUTES.USER_MESSAGES}>
                    <Button>Widomości</Button>
                </NavLink>
                <NavLink onClick={toggle} className={linkStyle} to={ROUTES.USER_ACCOUNT}>
                    <Button>Konto</Button>
                </NavLink>
                <NavLink onClick={toggle} className={linkStyle} to={ROUTES.USER_PROFILE}>
                    <Button>Profil</Button>
                </NavLink>
            </nav>
        );
    }
};

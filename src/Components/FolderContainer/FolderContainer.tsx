import {cx} from 'emotion';
import React, {useState} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import {LoginForm} from '../LoginForm/LoginForm';
import {RegisterForm} from '../RegisterForm/RegisterForm';
import {useAppContex} from '../Context/Context';
import {descriptions} from './FolderContainer.helpers';
import {
    markerContainerStyle,
    folderStyle,
    formContainerStyle,
    activeLink,
    markStyle,
    markPStyle,
    loginStyle,
    registerStyle,
} from './FolderContainer.styles';
import {ROUTES} from '../../helpers/ROUTES';

export const FolderContainer: React.FC = () => {
    const [formStyle, setFormStyle] = useState(cx(formContainerStyle, loginStyle));
    const {lang} = useAppContex();

    return (
        <div className={folderStyle}>
            <section className={markerContainerStyle}>
                <NavLink
                    to={ROUTES.LOGIN}
                    onClick={() => {
                        setFormStyle(cx(formContainerStyle, loginStyle));
                    }}
                    className={cx(markStyle, loginStyle)}
                    activeClassName={activeLink}
                >
                    <p className={markPStyle}>{descriptions[lang].login}</p>
                </NavLink>
                <NavLink
                    className={cx(markStyle, registerStyle)}
                    onClick={() => {
                        setFormStyle(cx(formContainerStyle, registerStyle));
                    }}
                    to={ROUTES.REGISTER}
                    activeClassName={activeLink}
                >
                    <p className={markPStyle}>{descriptions[lang].register}</p>
                </NavLink>
            </section>
            <section className={formStyle}>
                <div>
                    <Switch>
                        <Route path={ROUTES.LOGIN}>
                            <LoginForm />
                        </Route>
                        <Route path={ROUTES.REGISTER}>
                            <RegisterForm />
                        </Route>
                    </Switch>
                </div>
            </section>
        </div>
    );
};

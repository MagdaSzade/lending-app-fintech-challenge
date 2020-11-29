import React, {useEffect, useState} from 'react';
import {NavLink, Route, Switch, useLocation} from 'react-router-dom';
import {LoginForm} from '../../Forms/LoginForm/LoginForm';
import {RegisterForm} from '../../Forms/RegisterForm/RegisterForm';
import {cx} from 'emotion';
import {useAppContext} from '../../../hooks/useAppContext';
import {descriptions} from './FolderContainer.helpers';
import {ROUTES} from '../../../helpers/ROUTES';
import {
    markerContainerStyle,
    folderStyle,
    formContainerStyle,
    activeLink,
    markStyle,
    markPStyle,
    loginStyle,
    registerStyle,
    titleStyle,
    textStyle,
    overviewStyle,
    containerStyle,
} from './FolderContainer.styles';

export const FolderContainer: React.FC = () => {
    const {pathname} = useLocation();
    const routeStyle = pathname === ROUTES.LOGIN ? cx(formContainerStyle, loginStyle) : cx(formContainerStyle, registerStyle);
    const [formStyle, setFormStyle] = useState(routeStyle);
    const {lang} = useAppContext();

    useEffect(() => {
        setFormStyle(routeStyle);
    }, [pathname, routeStyle]);

    return (
        <div className={folderStyle}>
            <section className={overviewStyle}>
                <h2 className={titleStyle}>{descriptions[lang].overview.title}</h2>
                <h4 className={textStyle}>{descriptions[lang].overview.text}</h4>
            </section>
            <section className={containerStyle}>
                <div className={markerContainerStyle}>
                    <NavLink id="loginNav" to={ROUTES.LOGIN} className={cx(markStyle, loginStyle)} activeClassName={activeLink}>
                        <p className={markPStyle}>{descriptions[lang].login}</p>
                    </NavLink>
                    <NavLink id="registerNav" className={cx(markStyle, registerStyle)} to={ROUTES.REGISTER} activeClassName={activeLink}>
                        <p className={markPStyle}>{descriptions[lang].register}</p>
                    </NavLink>
                </div>
                <div className={formStyle}>
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
                </div>
            </section>
        </div>
    );
};

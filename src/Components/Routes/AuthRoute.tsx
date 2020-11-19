import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {ROUTES} from '../../helpers/ROUTES';
import {useAppContext} from '../../hooks/useAppContext';
import {RoutInterface} from './Routes.interface';

export const AuthRoute: React.FC<RoutInterface> = ({path, children}) => {
    const {isLoggedin} = useAppContext();

    if (isLoggedin) {
        return <Route path={path}>{children}</Route>;
    } else {
        return <Redirect to={ROUTES.LOGIN} />;
    }
};

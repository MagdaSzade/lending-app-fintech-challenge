import React from 'react';
import {Redirect, Route as ReactRoute} from 'react-router-dom';
import {ROUTES} from '../../helpers/ROUTES';
import {useAppContext} from '../../hooks/useAppContext';
import {RoutInterface} from './Routes.interface';

export const NoAuthRoute: React.FC<RoutInterface> = ({path, children}) => {
    const {isLoggedin} = useAppContext();

    if (!isLoggedin) {
        return <ReactRoute path={path}>{children}</ReactRoute>;
    } else {
        return <Redirect to={ROUTES.USER_MESSAGES} />;
    }
};

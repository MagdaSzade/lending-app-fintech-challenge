import {Button} from '@material-ui/core';
import React from 'react';
import {ROUTES} from '../../../helpers/ROUTES';
import {usePushToHistory} from '../../../hooks/usePushToHistory';
import {buttonStyle} from '../Profile/Profile.styles';

interface RedirectButtonInterface {
    path: ROUTES;
    children: JSX.Element | JSX.Element[] | string;
    id?: string;
}

export const RedirectButton: React.FC<RedirectButtonInterface> = ({children, path, id}) => {
    const pushToHistory = usePushToHistory();

    return (
        <Button
            id={id}
            className={buttonStyle}
            variant="outlined"
            onClick={() => {
                pushToHistory(path);
            }}
        >
            {children}
        </Button>
    );
};

import React from 'react';
import {Button} from '@material-ui/core';
import {usePushToHistory} from '../../../hooks/usePushToHistory';
import {ROUTES} from '../../../helpers/ROUTES';
import {buttonStyle} from './common.style';

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

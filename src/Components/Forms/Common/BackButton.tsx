import {Button} from '@material-ui/core';
import React from 'react';
import {backStyle, buttonStyle} from '../../Users/Profile/Profile.styles';
import {GoArrowLeft} from 'react-icons/go';
import {usePushToHistory} from '../../../hooks/usePushToHistory';
import {ROUTES} from '../../../helpers/ROUTES';

interface BackButtonInterface {
    path: ROUTES;
}

export const BackButton: React.FC<BackButtonInterface> = ({path}) => {
    const pushToHistory = usePushToHistory();

    return (
        <Button onClick={() => pushToHistory(path)} variant="outlined" className={buttonStyle}>
            <div className={backStyle}>
                <GoArrowLeft size="1rem" />
                wróć
            </div>
        </Button>
    );
};

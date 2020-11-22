import {Button} from '@material-ui/core';
import React from 'react';
import {backStyle, buttonStyle} from './Profile.styles';
import {GoArrowLeft} from 'react-icons/go';
import {usePushToHistory} from '../../../hooks/usePushToHistory';
import {ROUTES} from '../../../helpers/ROUTES';

export const BackButton: React.FC = () => {
    const pushToHistory = usePushToHistory();

    return (
        <Button onClick={() => pushToHistory(ROUTES.USER_PROFILE)} variant="outlined" className={buttonStyle}>
            <div className={backStyle}>
                <GoArrowLeft size="1rem" />
                wróć
            </div>
        </Button>
    );
};

import {Button} from '@material-ui/core';
import React from 'react';
import {useUsersActions} from '../../../hooks/usersActions/useUserActions';
import {buttonStyle, dangerStyle} from './Profile.styles';

export const DeleteAccount: React.FC = () => {
    const {deleteAccount} = useUsersActions();
    return (
        <div>
            <p>USUNIĘCIA KONTA JEST NIEODWRACALNE</p>
            <p>Aby usunięcie konta było skuteczne, upewnij się, że nie masz długów na swoim koncie bankowym.</p>
            <Button
                className={buttonStyle}
                variant="outlined"
                onClick={() => {
                    deleteAccount();
                }}
            >
                <p className={dangerStyle}>Usuń konto</p>
            </Button>
        </div>
    );
};

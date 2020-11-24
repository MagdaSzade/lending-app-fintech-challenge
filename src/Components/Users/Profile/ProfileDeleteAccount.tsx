import {Button} from '@material-ui/core';
import React from 'react';
import {useAppContext} from '../../../hooks/useAppContext';
import {useUsersActions} from '../../../hooks/usersActions/useUserActions';
import {buttonStyle, dangerStyle} from './Profile.styles';

export const DeleteAccount: React.FC = () => {
    const {userData, logout} = useAppContext();
    const {deleteAccount} = useUsersActions();
    if (userData?.userID) {
        return (
            <div>
                <p>USUNIĘCIA KONTA JEST NIEODWRACALNE</p>
                <p>Aby usunięcie konta było skuteczne, upewnij się, że nie masz długów na swoim koncie bankowym.</p>
                <Button
                    className={buttonStyle}
                    variant="outlined"
                    onClick={() => {
                        deleteAccount(userData.userID);
                    }}
                >
                    <p className={dangerStyle}>Usuń konto</p>
                </Button>
            </div>
        );
    } else {
        logout();
        return null;
    }
};

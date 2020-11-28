import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {EmailChangeForm} from '../../Forms/EmailChangeForm/EmailChangeForm';
import {PasswordChangeForm} from '../../Forms/PasswordChangeForm/PasswordChangeForm';
import {BackButton} from '../../Forms/Common/BackButton';
import {DeleteAccount} from './ProfileDeleteAccount';
import {RedirectButton} from '../Common/RedirectButton';
import {useAppContext} from '../../../hooks/useAppContext';
import {ROUTES} from '../../../helpers/ROUTES';
import {profileStyle, parStyle, dangerStyle} from './Profile.styles';

export const Profile: React.FC = () => {
    const {userData} = useAppContext();

    return (
        <div className={profileStyle}>
            <Switch>
                <Route path={ROUTES.USER_PROFILE_CHANGE_EMAIL}>
                    <BackButton path={ROUTES.USER_PROFILE} />
                    <EmailChangeForm />
                </Route>
                <Route path={ROUTES.USER_PROFILE_CHANGE_PASSWORD}>
                    <BackButton path={ROUTES.USER_PROFILE} />
                    <PasswordChangeForm />
                </Route>
                <Route path={ROUTES.USER_PROFILE_DELETE_ACCOUNT}>
                    <BackButton path={ROUTES.USER_PROFILE} />
                    <DeleteAccount />
                </Route>
                <Route path={ROUTES.USER_PROFILE} exact>
                    <div className={parStyle}>
                        {userData?.name} {userData?.surname}
                    </div>
                    <div className={parStyle}>{userData?.email}</div>
                    <RedirectButton path={ROUTES.USER_PROFILE_CHANGE_EMAIL}>Zmień email</RedirectButton>
                    <RedirectButton path={ROUTES.USER_PROFILE_CHANGE_PASSWORD}>Zmień hasło</RedirectButton>
                    <RedirectButton path={ROUTES.USER_PROFILE_DELETE_ACCOUNT}>
                        <p className={dangerStyle}>Usuń konto</p>
                    </RedirectButton>
                </Route>
            </Switch>
        </div>
    );
};

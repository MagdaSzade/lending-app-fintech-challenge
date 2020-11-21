import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ROUTES} from '../../../helpers/ROUTES';
import {MessagesList} from '../../Messages/MessagesList';
import {NavBar} from '../../NavBar/NavBar';
import {DetailsConteiner} from '../DetailContainer/DetailsConteiner';
import {userContainerStyle} from './UserPageContainer.styles';

export const UserPageContainer: React.FC = () => {
    return (
        <div className={userContainerStyle}>
            <NavBar />
            <Switch>
                <Route path={ROUTES.USER_MESSAGES}>
                    <DetailsConteiner title="Wiadomości">
                        <MessagesList />
                    </DetailsConteiner>
                </Route>
                <Route path={ROUTES.USER_PROFILE}>Profil Użytkownika</Route>
                <Route path={ROUTES.USER_ACCOUNT}>Konto bankowe użytkownika</Route>
                <Route path={ROUTES.USER_LOANS}>Pożyczki wzięte</Route>
                <Route path={ROUTES.USER_OFFERS}>Oferty</Route>
                <Route path={ROUTES.USER_INQUIRIES}>Zapytania ofertowe</Route>
                <Route path={ROUTES.USER_MAKE_INQUIRIES}>Stwórz nowe zapytanie ofertowe</Route>
                <Route path={ROUTES.USER_MAKE_OFFER}>Stwórz nową ofertę</Route>
                <Route path={ROUTES.USER_FIND_INQUIRIES}>ZNAJDŹ zapytania ofertowe</Route>
            </Switch>
        </div>
    );
};

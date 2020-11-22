import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ROUTES} from '../../../helpers/ROUTES';
import {MessagesList} from '../../Users/Messages/MessagesList';
import {Profile} from '../../Users/Profile/Profile';
import {LoansList} from '../../Users/Loans/LoansList';
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
                <Route path={ROUTES.USER_PROFILE}>
                    <DetailsConteiner title="Twoje konto">
                        <Profile />
                    </DetailsConteiner>
                </Route>
                <Route path={ROUTES.USER_ACCOUNT}>Konto bankowe użytkownika</Route>
                <Route path={ROUTES.USER_LOANS}>
                    <DetailsConteiner title="pożyczki">
                        <LoansList />
                    </DetailsConteiner>
                </Route>
                <Route path={ROUTES.USER_OFFERS}>Oferty</Route>
                <Route path={ROUTES.USER_INQUIRIES}>Zapytania ofertowe</Route>
                <Route path={ROUTES.USER_MAKE_INQUIRIES}>Stwórz nowe zapytanie ofertowe</Route>
                <Route path={ROUTES.USER_MAKE_OFFER}>Stwórz nową ofertę</Route>
                <Route path={ROUTES.USER_FIND_INQUIRIES}>ZNAJDŹ zapytania ofertowe</Route>
            </Switch>
        </div>
    );
};

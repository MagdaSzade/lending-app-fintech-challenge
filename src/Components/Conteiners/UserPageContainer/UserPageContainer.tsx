import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {ROUTES} from '../../../helpers/ROUTES';
import {MessagesList} from '../../Users/Messages/MessagesList';
import {Profile} from '../../Users/Profile/Profile';
import {LoansList} from '../../Users/Loans/LoansList';
import {NavBar} from '../../NavBar/NavBar';
import {DetailsConteiner} from '../DetailContainer/DetailsConteiner';
import {userContainerStyle} from './UserPageContainer.styles';
import {Account} from '../../Users/Account/Account';
import {useAsyncUserData} from '../../../hooks/usersActions/useAsyncUserData';
import {useAppContext} from '../../../hooks/useAppContext';
import {InquiryForm} from '../../Forms/InquiryForm/InquiryForm';
import {GetInquiries} from '../../GetInquieries/GetInqueries';

export const UserPageContainer: React.FC = () => {
    const getUser = useAsyncUserData();
    const {isLoggedin, userData} = useAppContext();

    useEffect(() => {
        if (isLoggedin && userData === null) {
            getUser();
        }
    }, [isLoggedin, getUser, userData]);

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
                <Route path={ROUTES.USER_ACCOUNT}>
                    <DetailsConteiner title="Twoje konto bankowe">
                        <Account />
                    </DetailsConteiner>
                </Route>
                <Route path={ROUTES.USER_LOANS}>
                    <DetailsConteiner title="pożyczki">
                        <LoansList />
                    </DetailsConteiner>
                </Route>
                <Route path={ROUTES.USER_OFFERS}>Oferty</Route>
                <Route path={ROUTES.USER_INQUIRIES}>Zapytania ofertowe</Route>
                <Route path={ROUTES.USER_MAKE_INQUIRIES}>
                    <DetailsConteiner title="Zapytaj o pożyczkę">
                        <InquiryForm />
                    </DetailsConteiner>
                </Route>
                <Route path={ROUTES.USER_MAKE_OFFER}>Stwórz nową ofertę</Route>
                <Route path={ROUTES.USER_FIND_INQUIRIES}>
                    <DetailsConteiner title="pożyczki">
                        <GetInquiries />
                    </DetailsConteiner>
                </Route>
            </Switch>
        </div>
    );
};

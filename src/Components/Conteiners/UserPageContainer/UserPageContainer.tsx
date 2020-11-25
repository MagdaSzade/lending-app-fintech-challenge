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
import {GetInquiries} from '../../Users/GetInquieries/GetInqueries';
import {DisplayInquiries} from '../../Users/DisplayInquiries/DisplayInquiries';
import {DisplayOffers} from '../../Users/DisplayOffers/DisplayOffers';
import {OfferForm} from '../../Forms/OfferForm/OfferForm';

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
                <Route path={ROUTES.USER_OFFERS}>
                    <DetailsConteiner title="Złożone oferty">
                        <DisplayOffers />
                    </DetailsConteiner>
                </Route>
                <Route path={ROUTES.USER_INQUIRIES}>
                    <DetailsConteiner title="Złożone zapytania">
                        <DisplayInquiries />
                    </DetailsConteiner>
                </Route>
                <Route path={ROUTES.USER_MAKE_INQUIRIES}>
                    <DetailsConteiner title="Zapytaj o pożyczkę">
                        <InquiryForm />
                    </DetailsConteiner>
                </Route>
                <Route path={ROUTES.USER_FIND_INQUIRIES}>
                    <DetailsConteiner title="Znajdź zapytania">
                        <GetInquiries />
                    </DetailsConteiner>
                </Route>
                <Route path={ROUTES.USER_MAKE_OFFER}>
                    <DetailsConteiner title="Złóż ofertę">
                        <OfferForm />
                    </DetailsConteiner>
                </Route>
            </Switch>
        </div>
    );
};

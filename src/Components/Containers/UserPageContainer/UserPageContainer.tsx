import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {MessagesList} from '../../Users/Messages/MessagesList';
import {Profile} from '../../Users/Profile/Profile';
import {LoansList} from '../../Users/Loans/LoansList';
import {NavBar} from '../../NavBar/NavBar';
import {DetailsContainer} from '../DetailContainer/DetailsContainer';
import {InquiryForm} from '../../Forms/InquiryForm/InquiryForm';
import {GetInquiries} from '../../Users/GetInquieries/GetInquiries';
import {DisplayInquiries} from '../../Users/DisplayInquiries/DisplayInquiries';
import {DisplayOffers} from '../../Users/DisplayOffers/DisplayOffers';
import {Account} from '../../Users/Account/Account';
import {OfferForm} from '../../Forms/OfferForm/OfferForm';
import {userContainerStyle} from './UserPageContainer.styles';
import {useAsyncUserData} from '../../../hooks/usersActions/useAsyncUserData';
import {ROUTES} from '../../../helpers/ROUTES';

export const UserPageContainer: React.FC = () => {
    const getUser = useAsyncUserData();

    setInterval(() => {
        getUser();
    }, 10000);

    return (
        <div className={userContainerStyle}>
            <NavBar />
            <Switch>
                <Route path={ROUTES.USER_MESSAGES}>
                    <DetailsContainer title="Wiadomości">
                        <MessagesList />
                    </DetailsContainer>
                </Route>
                <Route path={ROUTES.USER_PROFILE}>
                    <DetailsContainer title="Twoje konto">
                        <Profile />
                    </DetailsContainer>
                </Route>
                <Route path={ROUTES.USER_ACCOUNT}>
                    <DetailsContainer title="Twoje konto bankowe">
                        <Account />
                    </DetailsContainer>
                </Route>
                <Route path={ROUTES.USER_LOANS}>
                    <DetailsContainer title="pożyczki">
                        <LoansList />
                    </DetailsContainer>
                </Route>
                <Route path={ROUTES.USER_OFFERS}>
                    <DetailsContainer title="Złożone oferty">
                        <DisplayOffers />
                    </DetailsContainer>
                </Route>
                <Route path={ROUTES.USER_INQUIRIES}>
                    <DetailsContainer title="Złożone zapytania">
                        <DisplayInquiries />
                    </DetailsContainer>
                </Route>
                <Route path={ROUTES.USER_MAKE_INQUIRIES}>
                    <DetailsContainer title="Zapytaj o pożyczkę">
                        <InquiryForm />
                    </DetailsContainer>
                </Route>
                <Route path={ROUTES.USER_FIND_INQUIRIES} exact>
                    <DetailsContainer title="Zapytania ofertowe">
                        <GetInquiries />
                    </DetailsContainer>
                </Route>
                <Route path={ROUTES.USER_MAKE_OFFER}>
                    <DetailsContainer title="Złóż ofertę">
                        <OfferForm />
                    </DetailsContainer>
                </Route>
            </Switch>
        </div>
    );
};

import React from 'react';
import {UserPageContainer} from '../../../../src/Components/Containers/UserPageContainer/UserPageContainer';
import {screen} from '@testing-library/react';
import {mocked} from 'ts-jest/utils';
import {MessagesList} from '../../../../src/Components/Users/Messages/MessagesList';
import {Profile} from '../../../../src/Components/Users/Profile/Profile';
import {LoansList} from '../../../../src/Components/Users/Loans/LoansList';
import {NavBar} from '../../../../src/Components/NavBar/NavBar';
import {InquiryForm} from '../../../../src/Components/Forms/InquiryForm/InquiryForm';
import {GetInquiries} from '../../../../src/Components/Users/GetInquieries/GetInquiries';
import {DisplayInquiries} from '../../../../src/Components/Users/DisplayInquiries/DisplayInquiries';
import {DisplayOffers} from '../../../../src/Components/Users/DisplayOffers/DisplayOffers';
import {Account} from '../../../../src/Components/Users/Account/Account';
import {OfferForm} from '../../../../src/Components/Forms/OfferForm/OfferForm';
import {renderWithRouter} from '../../../helpers/renderWithRouter';
import {ROUTES} from '../../../../src/helpers/ROUTES';

jest.mock('../../../../src/Components/Users/Messages/MessagesList');
jest.mock('../../../../src/Components/Users/Profile/Profile');
jest.mock('../../../../src/Components/Users/Loans/LoansList');
jest.mock('../../../../src/Components/NavBar/NavBar');
jest.mock('../../../../src/Components/Forms/InquiryForm/InquiryForm');
jest.mock('../../../../src/Components/Users/GetInquieries/GetInquiries');
jest.mock('../../../../src/Components/Users/DisplayInquiries/DisplayInquiries');
jest.mock('../../../../src/Components/Users/DisplayOffers/DisplayOffers');
jest.mock('../../../../src/Components/Users/Account/Account');
jest.mock('../../../../src/Components/Forms/OfferForm/OfferForm');

describe('UserPageContainer', () => {
    beforeEach(() => {
        mocked(NavBar).mockReturnValue(<div>NavBar</div>);
        mocked(MessagesList).mockReturnValue(<div>MessageList</div>);
        mocked(Profile).mockReturnValue(<div>Profile</div>);
        mocked(LoansList).mockReturnValue(<div>LoansList</div>);
        mocked(InquiryForm).mockReturnValue(<div>InquiryForm</div>);
        mocked(GetInquiries).mockReturnValue(<div>GetInquiries</div>);
        mocked(DisplayInquiries).mockReturnValue(<div>DisplayInquiries</div>);
        mocked(DisplayOffers).mockReturnValue(<div>DisplayOffers</div>);
        mocked(Account).mockReturnValue(<div>Account</div>);
        mocked(OfferForm).mockReturnValue(<div>OfferForm</div>);
    });

    test.each([
        ['MessageList', ROUTES.USER_MESSAGES],
        ['Profile', ROUTES.USER_PROFILE],
        ['LoansList', ROUTES.USER_LOANS],
        ['InquiryForm', ROUTES.USER_MAKE_INQUIRIES],
        ['GetInquiries', ROUTES.USER_FIND_INQUIRIES],
        ['DisplayInquiries', ROUTES.USER_INQUIRIES],
        ['DisplayOffers', ROUTES.USER_OFFERS],
        ['Account', ROUTES.USER_ACCOUNT],
        ['OfferForm', ROUTES.USER_MAKE_OFFER],
    ])('it should display %s at %s', (text: string, path: ROUTES) => {
        renderWithRouter(<UserPageContainer />, [path]);
        expect(screen.getByText(text)).toBeInTheDocument();
        expect(screen.getByText('NavBar')).toBeInTheDocument();
    });
});

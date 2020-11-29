import React from 'react';
import {NavBar} from '../../../../src/Components/NavBar/NavBar';
import {screen} from '@testing-library/react';
import {mocked} from 'ts-jest/utils';
import {renderWithRouter} from '../../../helpers/renderWithRouter';
import {ROUTES} from '../../../../src/helpers/ROUTES';
import {useAppContext} from '../../../../src/hooks/useAppContext';
import {contextInterfaceFactory, userFactory} from '../../../helpers/factories';
import userEvent from '@testing-library/user-event';
import {ROLE} from '../../../../src/helpers/types';

jest.mock('../../../../src/Components/Users/Messages/MessagesList');
jest.mock('../../../../src/hooks/useAppContext');

describe('UserPageContainer', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test.each([
        ['Nowe zpytanie', ROUTES.USER_MAKE_INQUIRIES],
        ['Zapytania ofertowe', ROUTES.USER_INQUIRIES],
        ['Pożyczki', ROUTES.USER_LOANS],
        ['Widomości', ROUTES.USER_MESSAGES],
        ['Konto', ROUTES.USER_ACCOUNT],
        ['Profil', ROUTES.USER_PROFILE],
    ])('when clicked on  %s it should change path %s', (text: string, path: ROUTES) => {
        mocked(useAppContext).mockReturnValue(contextInterfaceFactory.build({userData: userFactory.build()}));

        renderWithRouter(<NavBar />);

        const {history} = renderWithRouter(<NavBar />);
        userEvent.click(screen.getAllByText(text)[1]);

        expect(history.location.pathname).toBe(path);
    });

    test.each([
        ['Sprawdź zapytania', ROUTES.USER_FIND_INQUIRIES],
        ['Złożone oferty', ROUTES.USER_OFFERS],
        ['Pożyczki', ROUTES.USER_LOANS],
        ['Widomości', ROUTES.USER_MESSAGES],
        ['Konto', ROUTES.USER_ACCOUNT],
        ['Profil', ROUTES.USER_PROFILE],
    ])('when clicked on  %s it should change path %s', (text: string, path: ROUTES) => {
        mocked(useAppContext).mockReturnValue(contextInterfaceFactory.build({userData: userFactory.build({role: ROLE.LENDER})}));

        renderWithRouter(<NavBar />);

        const {history} = renderWithRouter(<NavBar />);
        userEvent.click(screen.getAllByText(text)[1]);

        expect(history.location.pathname).toBe(path);
    });
});

import React from 'react';
import {Header} from '../../../../src/Components/Header/Header';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {mocked} from 'ts-jest/utils';
import {contextInterfaceFactory} from '../../../helpers/factories';
import {useAppContext} from '../../../../src/hooks/useAppContext';
import {LANGS} from '../../../../src/helpers/types';

jest.mock('../../../../src/hooks/useAppContext');

describe('Header', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('should not render logout button when isLoggedIn = false', () => {
        mocked(useAppContext).mockReturnValue(contextInterfaceFactory.build());
        render(<Header />);
        expect(screen.queryByText('LogOut')).not.toBeInTheDocument();
        expect(screen.getByText('PL')).toBeInTheDocument();
        expect(screen.getByText('EN')).toBeInTheDocument();
    });

    it('should render logout button when isLoggedIn = true', () => {
        const isLoggedin = true;
        mocked(useAppContext).mockReturnValue(contextInterfaceFactory.build({isLoggedin}));
        render(<Header />);
        expect(screen.getByText('LogOut')).toBeInTheDocument();
        expect(screen.getByText('PL')).toBeInTheDocument();
        expect(screen.getByText('EN')).toBeInTheDocument();
    });

    it('should logout button be removed from document after on logout click', async () => {
        let isLoggedin = true;
        const logout = jest.fn();
        mocked(logout).mockImplementation(() => (isLoggedin = false));
        mocked(useAppContext).mockReturnValue(contextInterfaceFactory.build({isLoggedin, logout}));
        render(<Header />);
        userEvent.click(screen.getByText('LogOut'));
        expect(logout).toBeCalled();
    });
});

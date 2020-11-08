import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {mocked} from 'ts-jest/utils';
import {LoginForm} from '../../../src/Components/LoginForm/LoginForm';
import {RegisterForm} from '../../../src/Components/RegisterForm/RegisterForm';
import {FolderContainer} from '../../../src/Components/FolderContainer/FolderContainer';
import {ROUTES} from '../../../src/helpers/ROUTES';
import {contextInterfaceFactory} from '../../helpers/factories';
import {useAppContex} from '../../../src/hooks/useAppContex';
import {LANGS} from '../../../src/helpers/types';

export const renderWithRouter = (ui: React.ReactNode, entries?: string[]) => {
    const history = createMemoryHistory({initialEntries: entries});
    const renderResult = render(<Router history={history}>{ui}</Router>);
    return {...renderResult, history};
};

jest.mock('../../../src/Components/LoginForm/LoginForm');
jest.mock('../../../src/Components/RegisterForm/RegisterForm');
jest.mock('../../../src/hooks/useAppContex');

describe('FolderComponent', () => {
    beforeEach(() => {
        mocked(LoginForm).mockReturnValue(<h1>LoginForm</h1>);
        mocked(RegisterForm).mockReturnValue(<h1>RegisterForm</h1>);
    });

    it('should render two marks and loginForm when on ROUTES.LOGIN', () => {
        mocked(useAppContex).mockReturnValue(contextInterfaceFactory.build());
        renderWithRouter(<FolderContainer />, [ROUTES.LOGIN]);
        expect(screen.getByRole('link', {name: /zaloguj/i})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: /zarejestruj/i})).toBeInTheDocument();
        expect(screen.getByText('LoginForm')).toBeInTheDocument();
    });

    it('should render two marks and registerForm when on ROUTES.REGISTER', () => {
        mocked(useAppContex).mockReturnValue(contextInterfaceFactory.build());
        renderWithRouter(<FolderContainer />, [ROUTES.REGISTER]);
        expect(screen.getByRole('link', {name: /zaloguj/i})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: /zarejestruj/i})).toBeInTheDocument();
        expect(screen.getByText('RegisterForm')).toBeInTheDocument();
    });

    it('should change to en if appContext give en lang', () => {
        mocked(useAppContex).mockReturnValue(contextInterfaceFactory.build({lang: LANGS.EN}));
        renderWithRouter(<FolderContainer />);
        expect(screen.getByRole('link', {name: /login/i})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: /register/i})).toBeInTheDocument();
    });

    it('should change from loginForm to registerForm after click on register link', () => {
        mocked(useAppContex).mockReturnValue(contextInterfaceFactory.build({lang: LANGS.EN}));
        const {history} = renderWithRouter(<FolderContainer />, [ROUTES.LOGIN]);
        userEvent.click(screen.getByRole('link', {name: /register/i}));
        expect(screen.getByText('RegisterForm')).toBeInTheDocument();
        expect(history.location.pathname).toBe(ROUTES.REGISTER);
    });

    it('should change from registerForm to loginForm after click on login link', () => {
        mocked(useAppContex).mockReturnValue(contextInterfaceFactory.build({lang: LANGS.EN}));
        const {history} = renderWithRouter(<FolderContainer />, [ROUTES.REGISTER]);
        userEvent.click(screen.getByRole('link', {name: /login/i}));
        expect(screen.getByText('LoginForm')).toBeInTheDocument();
        expect(history.location.pathname).toBe(ROUTES.LOGIN);
    });

    it('should show loginForm after click on register link then login link', () => {
        mocked(useAppContex).mockReturnValue(contextInterfaceFactory.build({lang: LANGS.EN}));
        const {history} = renderWithRouter(<FolderContainer />, [ROUTES.LOGIN]);
        userEvent.click(screen.getByRole('link', {name: /register/i}));
        userEvent.click(screen.getByRole('link', {name: /login/i}));
        expect(screen.getByText('LoginForm')).toBeInTheDocument();
        expect(history.location.pathname).toBe(ROUTES.LOGIN);
    });

    it('should show registerForm after click on login link then register link', () => {
        mocked(useAppContex).mockReturnValue(contextInterfaceFactory.build({lang: LANGS.EN}));
        const {history} = renderWithRouter(<FolderContainer />, [ROUTES.REGISTER]);
        userEvent.click(screen.getByRole('link', {name: /login/i}));
        userEvent.click(screen.getByRole('link', {name: /register/i}));
        expect(screen.getByText('RegisterForm')).toBeInTheDocument();
        expect(history.location.pathname).toBe(ROUTES.REGISTER);
    });
});

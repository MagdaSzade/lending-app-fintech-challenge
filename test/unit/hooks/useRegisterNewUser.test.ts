import {act} from 'react-dom/test-utils';
import {useRegisterNewUser} from '../../../src/hooks/useRegisterNewUser';
import {renderHook} from '@testing-library/react-hooks';
import * as appContext from '../../../src/hooks/useAppContex';
import * as history from '../../../src/hooks/usePushToHistory';
import * as register from '../../../src/api/apiUser';
import {contextInterfaceFactory, newUserFactory} from '../../helpers/factories';

describe('useRegisterNewUser', () => {
    const messageMock = jest.fn();
    const historyMock = jest.fn();

    beforeEach(() => {
        jest.spyOn(appContext, 'useAppContex').mockImplementation(() => {
            return contextInterfaceFactory.build({setMessage: messageMock});
        });
        jest.spyOn(history, 'usePushToHistory').mockImplementation(() => {
            return historyMock;
        });
    });

    it('should set message to "registration succesful" if 201 status given ', async () => {
        jest.spyOn(register, 'registerNewUser').mockReturnValue({status: 201} as any);
        const newUser = newUserFactory.build();
        const {result} = renderHook(() => useRegisterNewUser());

        await act(async () => {
            await result.current(newUser);
        });

        expect(historyMock).toBeCalledWith('/login');
        expect(messageMock).toBeCalledWith({
            type: 'info',
            title: {
                pl: 'rejestracja udana',
                en: 'registration successful',
            },
            message: {
                pl: 'zaloguj się',
                en: 'login',
            },
        });
    });

    it('should set message to "podany email już jest zarejestrowany" if 200 status given ', async () => {
        jest.spyOn(register, 'registerNewUser').mockReturnValue({status: 200} as any);
        const newUser = newUserFactory.build();
        const {result} = renderHook(() => useRegisterNewUser());

        await act(async () => {
            await result.current(newUser);
        });

        expect(historyMock).toBeCalledWith('/login');
        expect(messageMock).toBeCalledWith({
            type: 'info',
            title: {
                pl: 'podany email już jest zarejestrowany',
                en: 'given email is already registered',
            },
        });
    });

    it('should set message type: error if rejected promise', async () => {
        jest.spyOn(register, 'registerNewUser').mockRejectedValue({status: 400} as any);
        const newUser = newUserFactory.build();
        const {result} = renderHook(() => useRegisterNewUser());

        await act(async () => {
            await result.current(newUser);
        });

        expect(historyMock).toBeCalledWith('/login');
        expect(messageMock).toBeCalledWith({
            type: 'error',
            title: {
                pl: 'Coś poszło nie tak',
                en: 'Something went wrong',
            },
            message: {
                pl: 'spróbuj ponownie później',
                en: 'try again later',
            },
        });
    });
});
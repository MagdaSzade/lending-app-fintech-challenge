import {useRegisterNewUser} from '../../../src/hooks/useRegisterNewUser';
import {renderHook} from '@testing-library/react-hooks';
import {registerNewUserApi} from '../../../src/api/apiUser';
import {useAppContext} from '../../../src/hooks/useAppContext';
import {usePushToHistory} from '../../../src/hooks/usePushToHistory';
import {mocked} from 'ts-jest/utils';
import {newUserFactory} from '../../helpers/factories';
import {act} from 'react-dom/test-utils';
import {ROUTES} from '../../../src/helpers/ROUTES';
import {ReagisterNewUserForm} from '../../../src/helpers/types';

jest.mock('../../../src/api/apiUser', () => {
    return {
        registerNewUserApi: jest.fn(),
    };
});
jest.mock('../../../src/hooks/useAppContext');
jest.mock('../../../src/hooks/usePushToHistory');

describe('useRegisterNewUser', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('should registered new user (call api)', async () => {
        const data = {status: 201} as any;
        const newUser = newUserFactory.build();
        const newUserForm: ReagisterNewUserForm = {
            email: newUser.email,
            password: newUser.password,
            phone: newUser.phone,
            name: newUser.name,
            surname: newUser.surname,
            roles: [newUser.role],
        };
        const setIsFetching = jest.fn();
        const setMessage = jest.fn();
        const pushToHistoryMocked = jest.fn();
        mocked(registerNewUserApi).mockResolvedValue(data);
        mocked(useAppContext).mockReturnValue({setIsFetching, setMessage} as any);
        mocked(usePushToHistory).mockReturnValue(pushToHistoryMocked as any);
        const {result} = renderHook(() => useRegisterNewUser());
        await act(async () => {
            await result.current(newUser);
        });
        expect(pushToHistoryMocked).toHaveBeenCalledWith(ROUTES.LOGIN);
        expect(registerNewUserApi).toHaveBeenCalledWith(newUserForm);
        expect(setIsFetching).toHaveBeenCalledTimes(2);
        expect(setMessage).toHaveBeenCalledWith(expect.objectContaining({type: 'info'}));
    });

    it('should set an error message', async () => {
        const data = {status: 400} as any;
        const newUser = newUserFactory.build();
        const newUserForm: ReagisterNewUserForm = {
            email: newUser.email,
            password: newUser.password,
            phone: newUser.phone,
            name: newUser.name,
            surname: newUser.surname,
            roles: [newUser.role],
        };
        const setIsFetching = jest.fn();
        const setMessage = jest.fn();
        const pushToHistoryMocked = jest.fn();
        mocked(registerNewUserApi).mockRejectedValue(data);
        mocked(useAppContext).mockReturnValue({setIsFetching, setMessage} as any);
        mocked(usePushToHistory).mockReturnValue(pushToHistoryMocked as any);
        const {result} = renderHook(() => useRegisterNewUser());
        await act(async () => {
            await result.current(newUser);
        });
        expect(pushToHistoryMocked).toHaveBeenCalledWith(ROUTES.LOGIN);
        expect(registerNewUserApi).toHaveBeenCalledWith(newUserForm);
        expect(setIsFetching).toHaveBeenCalledTimes(2);
        expect(setMessage).toHaveBeenCalledWith(expect.objectContaining({type: 'error'}));
    });
});

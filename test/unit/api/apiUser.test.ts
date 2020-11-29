import {
    registerNewUserApi,
    loginUserApi,
    getAllUserDataApi,
    changeEmailApi,
    changePasswordApi,
    deleteUserApi,
} from '../../../src/api/apiUser';
import * as apiBackend from '../../../src/api/backend';
import {mocked} from 'ts-jest/utils';
import {changeEmailFactory, factoryReagisterNewUserForm} from '../../helpers/factories';
import {ChangePasswordForm} from '../../../src/helpers/types';

jest.mock('../../../src/api/backend', () => {
    return {
        backend: {
            post: jest.fn(),
            get: jest.fn(),
            delete: jest.fn(),
            put: jest.fn(),
        },
    };
});

describe('registerNewUserApi', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('calls registerNewUser', async () => {
        const data = {data: 'mocked data'};
        mocked(apiBackend.backend.post).mockResolvedValue(data);
        const newUser = factoryReagisterNewUserForm.build();
        const request = await registerNewUserApi(newUser);
        expect(request.data).toEqual(data.data);
        expect(apiBackend.backend.post).toHaveBeenCalledWith('/users/register', newUser);
    });
});

describe('loginUserApi', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('calls request for login token', async () => {
        const data = {data: 'mocked data'};
        const user = {
            username: 'email@email',
            password: 'password',
        } as any;
        mocked(apiBackend.backend.post).mockResolvedValue(data);

        const request = await loginUserApi(user);
        expect(request.data).toEqual(data.data);
        expect(apiBackend.backend.post).toHaveBeenCalledWith('/users/login', user);
    });
});

describe('getAllUserDataApi', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('calls request for all users data', async () => {
        const data = {data: 'mocked data'};
        const id = 'testId';
        mocked(apiBackend.backend.get).mockResolvedValue(data);

        const request = await getAllUserDataApi(id);
        expect(request.data).toEqual(data.data);
        expect(apiBackend.backend.get).toHaveBeenCalledWith(`/users/${id}`);
    });
});

describe('changeEmailApi', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('calls request for changing users email', async () => {
        const data = {status: 200};
        const id = 'testId';
        const newData = changeEmailFactory.build();
        mocked(apiBackend.backend.put).mockResolvedValue(data);

        const request = await changeEmailApi(id, newData);
        expect(request.status).toEqual(data.status);
        expect(apiBackend.backend.put).toHaveBeenCalledWith(`/users/${id}/change-email`, newData);
    });
});

describe('changePasswordApi', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('calls request for changing users password', async () => {
        const data = {status: 200};
        const id = 'testId';
        const changedPassword: ChangePasswordForm = {
            newPassword: 'newPassword',
            oldPassword: 'password',
        };
        mocked(apiBackend.backend.put).mockResolvedValue(data);

        const request = await changePasswordApi(id, changedPassword);
        expect(request.status).toEqual(data.status);
        expect(apiBackend.backend.put).toHaveBeenCalledWith(`/users/${id}/change-password`, changedPassword);
    });
});

describe('deleteUserApi', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('calls request for changing users password', async () => {
        const data = {status: 200};
        const id = 'testId';
        mocked(apiBackend.backend.delete).mockResolvedValue(data);

        const request = await deleteUserApi(id);
        expect(request.status).toEqual(data.status);
        expect(apiBackend.backend.delete).toHaveBeenCalledWith(`/users/${id}`);
    });
});

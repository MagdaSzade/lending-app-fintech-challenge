import {depositApi, withdrawalApi} from '../../../src/api/apiAccount';
import * as apiBackend from '../../../src/api/backend';
import {mocked} from 'ts-jest/utils';
import {accountActionInterfaceFactory} from '../../helpers/factories';

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

describe('depositApi', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('calls for deposit money', async () => {
        const data = {data: 'mocked data'};
        mocked(apiBackend.backend.post).mockResolvedValue(data);
        const newAction = accountActionInterfaceFactory.build();
        const expectedValue = {params: newAction};
        const id = 'testId';

        const request = await depositApi(newAction, id);
        expect(request.data).toEqual(data.data);
        expect(apiBackend.backend.post).toHaveBeenCalledWith(`/transactions/externalPayment/${id}`, expectedValue);
    });
});

describe('withdrwaltApi', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('calls for withdrwal money', async () => {
        const data = {data: 'mocked data'};
        mocked(apiBackend.backend.post).mockResolvedValue(data);
        const newAction = accountActionInterfaceFactory.build();
        const expectedValue = {params: newAction};
        const id = 'testId';

        const request = await withdrawalApi(newAction, id);
        expect(request.data).toEqual(data.data);
        expect(apiBackend.backend.post).toHaveBeenCalledWith(`/transactions/externalWithdrawal/${id}`, expectedValue);
    });
});

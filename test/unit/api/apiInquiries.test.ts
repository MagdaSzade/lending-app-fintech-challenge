import {newInquiryApi, getInquieiesApi} from '../../../src/api/apiInquiries';
import * as apiBackend from '../../../src/api/backend';
import {mocked} from 'ts-jest/utils';
import {getInquiryFormInterfaceFactory, inquiryFormInterfaceFactory} from '../../helpers/factories';

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

describe('newInquiryApi', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('calls for create new inquiry', async () => {
        const data = {data: 'mocked data'};
        mocked(apiBackend.backend.post).mockResolvedValue(data);
        const newInquiry = inquiryFormInterfaceFactory.build();

        const request = await newInquiryApi(newInquiry);
        expect(request.data).toEqual(data.data);
        expect(apiBackend.backend.post).toHaveBeenCalledWith('/inquiries', newInquiry);
    });
});

describe('getInquieiesApi', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('calls for get inquiries', async () => {
        const data = {data: 'mocked data'};
        mocked(apiBackend.backend.get).mockResolvedValue(data);
        const conditions = getInquiryFormInterfaceFactory.build();

        const request = await getInquieiesApi(conditions);
        expect(request.data).toEqual(data.data);
        expect(apiBackend.backend.get).toHaveBeenCalledWith('/inquiries', {params: conditions});
    });
});

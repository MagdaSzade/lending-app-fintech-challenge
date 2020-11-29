import {newOfferApi} from '../../../src/api/apiOffers';
import * as apiBackend from '../../../src/api/backend';
import {mocked} from 'ts-jest/utils';
import {offerFormInterfaceFactory} from '../../helpers/factories';

jest.mock('../../../src/api/backend', () => {
    return {
        backend: {
            post: jest.fn(),
        },
    };
});

describe('newOfferApi', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('calls for create new offer', async () => {
        const data = {data: 'mocked data'};
        mocked(apiBackend.backend.post).mockResolvedValue(data);
        const newOffer = offerFormInterfaceFactory.build();

        const request = await newOfferApi(newOffer);
        expect(request.data).toEqual(data.data);
        expect(apiBackend.backend.post).toHaveBeenCalledWith('/offers', newOffer);
    });
});

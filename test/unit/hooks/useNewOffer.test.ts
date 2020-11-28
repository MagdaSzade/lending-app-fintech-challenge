import {useNewOffer} from '../../../src/hooks/useNewOffer';
import {newOfferApi} from '../../../src/api/apiOffers';
import {useAppContext} from '../../../src/hooks/useAppContext';
import {usePushToHistory} from '../../../src/hooks/usePushToHistory';
import {offerFormInterfaceFactory} from '../../helpers/factories';
import {mocked} from 'ts-jest/utils';
import {act, renderHook} from '@testing-library/react-hooks';
import {ROUTES} from '../../../src/helpers/ROUTES';

jest.mock('../../../src/api/apiOffers', () => {
    return {
        newOfferApi: jest.fn(),
    };
});
jest.mock('../../../src/hooks/useAppContext');
jest.mock('../../../src/hooks/usePushToHistory');

describe('useNewOffer', () => {
    it('should set new offer', async () => {
        const data = {status: 200} as any;
        const newOffer = offerFormInterfaceFactory.build();
        const setIsFetching = jest.fn();
        const setMessage = jest.fn();
        const pushToHistoryMocked = jest.fn();
        mocked(newOfferApi).mockResolvedValue(data);
        mocked(useAppContext).mockReturnValue({setIsFetching, setMessage} as any);
        mocked(usePushToHistory).mockReturnValue(pushToHistoryMocked as any);
        const {result} = renderHook(() => useNewOffer());

        await act(async () => {
            await result.current(newOffer);
        });

        expect(pushToHistoryMocked).toHaveBeenCalledWith(ROUTES.USER_MESSAGES);
        expect(newOfferApi).toHaveBeenCalledWith(newOffer);
        expect(setIsFetching).toHaveBeenCalledTimes(2);
        expect(setMessage).toHaveBeenCalledWith(expect.objectContaining({type: 'info'}));
    });

    it('should set an error', async () => {
        const data = {status: 400} as any;
        const newOffer = offerFormInterfaceFactory.build();
        const setIsFetching = jest.fn();
        const setMessage = jest.fn();
        const pushToHistoryMocked = jest.fn();
        mocked(newOfferApi).mockRejectedValue(data);
        mocked(useAppContext).mockReturnValue({setIsFetching, setMessage} as any);
        mocked(usePushToHistory).mockReturnValue(pushToHistoryMocked as any);
        const {result} = renderHook(() => useNewOffer());

        await act(async () => {
            await result.current(newOffer);
        });

        expect(pushToHistoryMocked).toHaveBeenCalledTimes(0);
        expect(newOfferApi).toHaveBeenCalledWith(newOffer);
        expect(setIsFetching).toHaveBeenCalledTimes(2);
        expect(setMessage).toHaveBeenCalledWith(expect.objectContaining({type: 'error'}));
    });
});

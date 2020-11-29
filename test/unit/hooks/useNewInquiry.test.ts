import {useNewInquiry} from '../../../src/hooks/useNewInquiry';
import {mocked} from 'ts-jest/utils';
import {act, renderHook} from '@testing-library/react-hooks';
import {newInquiryApi} from '../../../src/api/apiInquiries';
import {useAppContext} from '../../../src/hooks/useAppContext';
import {usePushToHistory} from '../../../src/hooks/usePushToHistory';
import {inquiryFormInterfaceFactory} from '../../helpers/factories';
import {ROUTES} from '../../../src/helpers/ROUTES';

jest.mock('../../../src/api/apiInquiries', () => {
    return {
        newInquiryApi: jest.fn(),
    };
});
jest.mock('../../../src/hooks/useAppContext');
jest.mock('../../../src/hooks/usePushToHistory');

describe('useNewInquiry', () => {
    it('should set new inquiry', async () => {
        const data = {status: 200} as any;
        const newInquiry = inquiryFormInterfaceFactory.build();
        const setIsFetching = jest.fn();
        const setMessage = jest.fn();
        const pushToHistoryMocked = jest.fn();
        mocked(newInquiryApi).mockResolvedValue(data);
        mocked(useAppContext).mockReturnValue({setIsFetching, setMessage} as any);
        mocked(usePushToHistory).mockReturnValue(pushToHistoryMocked as any);
        const {result} = renderHook(() => useNewInquiry());

        await act(async () => {
            await result.current(newInquiry);
        });

        expect(pushToHistoryMocked).toHaveBeenCalledWith(ROUTES.USER_MESSAGES);
        expect(newInquiryApi).toHaveBeenCalledWith(newInquiry);
        expect(setIsFetching).toHaveBeenCalledTimes(2);
        expect(setMessage).toHaveBeenCalledWith(expect.objectContaining({type: 'info'}));
    });

    it('should set an error', async () => {
        const data = {status: 400} as any;
        const newOffer = inquiryFormInterfaceFactory.build();
        const setIsFetching = jest.fn();
        const setMessage = jest.fn();
        const pushToHistoryMocked = jest.fn();
        mocked(newInquiryApi).mockRejectedValue(data);
        mocked(useAppContext).mockReturnValue({setIsFetching, setMessage} as any);
        mocked(usePushToHistory).mockReturnValue(pushToHistoryMocked as any);
        const {result} = renderHook(() => useNewInquiry());

        await act(async () => {
            await result.current(newOffer);
        });

        expect(pushToHistoryMocked).toHaveBeenCalledTimes(0);
        expect(newInquiryApi).toHaveBeenCalledWith(newOffer);
        expect(setIsFetching).toHaveBeenCalledTimes(2);
        expect(setMessage).toHaveBeenCalledWith(expect.objectContaining({type: 'error'}));
    });
});

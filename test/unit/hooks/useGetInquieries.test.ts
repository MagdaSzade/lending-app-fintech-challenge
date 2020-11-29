import {useGetInquiries} from '../../../src/hooks/useGetInquiries';
import {mocked} from 'ts-jest/utils';
import {act, renderHook} from '@testing-library/react-hooks';
import {getInquieiesApi} from '../../../src/api/apiInquiries';
import {useAppContext} from '../../../src/hooks/useAppContext';
import {getInquiryFormInterfaceFactory, inquieryInterfaceFactory} from '../../helpers/factories';

jest.mock('../../../src/api/apiInquiries', () => {
    return {
        getInquieiesApi: jest.fn(),
    };
});
jest.mock('../../../src/hooks/useAppContext');

describe('useNewInquiry', () => {
    it('should set new inquiry', async () => {
        const getInquiries = getInquiryFormInterfaceFactory.build();
        const returnedList = inquieryInterfaceFactory.buildList(3);
        const data = {status: 200, data: returnedList} as any;
        const setIsFetching = jest.fn();
        mocked(getInquieiesApi).mockResolvedValue(data);
        mocked(useAppContext).mockReturnValue({setIsFetching} as any);
        const {result} = renderHook(() => useGetInquiries());

        await act(async () => {
            await result.current.getInquieries(getInquiries);
        });

        expect(getInquieiesApi).toHaveBeenCalledWith(getInquiries);
        expect(setIsFetching).toHaveBeenCalledTimes(2);
        expect(result.current.listOfInquieries?.length).toBe(3);
    });

    it('should set new inquiry', async () => {
        const getInquiries = getInquiryFormInterfaceFactory.build();
        const data = {status: 400} as any;
        const setIsFetching = jest.fn();
        const setMessage = jest.fn();
        mocked(getInquieiesApi).mockRejectedValue(data);
        mocked(useAppContext).mockReturnValue({setIsFetching, setMessage} as any);
        const {result} = renderHook(() => useGetInquiries());

        await act(async () => {
            await result.current.getInquieries(getInquiries);
        });

        expect(getInquieiesApi).toHaveBeenCalledWith(getInquiries);
        expect(setIsFetching).toHaveBeenCalledTimes(2);
        expect(setMessage).toHaveBeenCalledWith(expect.objectContaining({type: 'error'}));
    });
});

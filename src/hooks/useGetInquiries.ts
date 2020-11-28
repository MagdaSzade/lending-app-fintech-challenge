import {useAppContext} from './useAppContext';
import {getInquieiesApi} from '../api/apiInquiries';
import {InquieryInterface} from '../helpers/types';
import {useCallback, useState} from 'react';
import {GetInquiryFormInterface} from '../Components/Forms/GetInquiriesForm/GetInquiriesForm.interface';
import {fetchAPIError} from '../helpers/helpersText';

export const useGetInquiries = () => {
    const [listOfInquieries, setListOfInquieries] = useState<null | Array<InquieryInterface>>(null);
    const {setIsFetching, setMessage} = useAppContext();

    const getInquieries = useCallback(
        async (inquiryParams: GetInquiryFormInterface) => {
            setIsFetching(true);
            try {
                const result: any = await getInquieiesApi(inquiryParams);
                const newInquiries: Array<InquieryInterface> = [];
                result.data.forEach((inquiry: any) => {
                    const newInquiry: InquieryInterface = {
                        id: inquiry.id,
                        createdAt: inquiry.createdAt,
                        loanAmount: inquiry.loanAmount,
                        loanDuration: inquiry.loanDuration,
                        submissionDeadline: inquiry.submissionDeadline,
                        status: inquiry.status,
                    };
                    newInquiries.push(newInquiry);
                });
                setListOfInquieries(newInquiries);
            } catch (err) {
                setMessage(fetchAPIError);
            } finally {
                setIsFetching(false);
            }
        },
        [setListOfInquieries, setIsFetching, setMessage],
    );

    return {listOfInquieries, getInquieries};
};

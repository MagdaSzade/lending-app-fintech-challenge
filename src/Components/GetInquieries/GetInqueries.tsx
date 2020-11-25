import React from 'react';
import {useGetInquiries} from '../../hooks/useGetInquiries';
import {GetInquiriesForm} from '../Forms/GetInquiriesForm/GetInquiriesForm';
import {Record} from './GetInquiriesRecord';

export const GetInquiries: React.FC = () => {
    const {listOfInquieries, getInquieries} = useGetInquiries();

    return (
        <div>
            <GetInquiriesForm onSubmit={getInquieries} />
            <div>{listOfInquieries ? listOfInquieries.map(inq => <Record inquiry={inq} />) : null}</div>
        </div>
    );
};

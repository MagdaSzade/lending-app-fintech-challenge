import React from 'react';
import {InquieryInterface} from '../../../helpers/types';
import {useAppContext} from '../../../hooks/useAppContext';
import {Record} from './DisplayInquiriesRecord';

export const DisplayInquiries: React.FC = () => {
    const {userData} = useAppContext();
    if (userData && userData.ListOfInqueries.length > 0) {
        return (
            <div>
                {userData.ListOfInqueries.map((inq: InquieryInterface) => {
                    return <Record inquiry={inq} />;
                })}
            </div>
        );
    }
    return <div> Wyświetlanie chwilowo nie działa... </div>;
};

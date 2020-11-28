import React from 'react';
import {DisplayInquiriesRecord} from './DisplayInquiriesRecord';
import {useAppContext} from '../../../hooks/useAppContext';
import {InquieryInterface} from '../../../helpers/types';

export const DisplayInquiries: React.FC = () => {
    const {userData} = useAppContext();
    if (userData && userData.ListOfInqueries.length > 0) {
        return (
            <div>
                {userData.ListOfInqueries.map((inq: InquieryInterface) => {
                    return <DisplayInquiriesRecord inquiry={inq} />;
                })}
            </div>
        );
    }
    return <div> Nie masz żadnych złożonych zapytań ofertowych </div>;
};

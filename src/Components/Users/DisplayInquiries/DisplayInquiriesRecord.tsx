import React from 'react';
import {InquieryInterface} from '../../../helpers/types';
import {recordContainerStyle} from '../Loans/LoansList.styles';

interface RecordInterface {
    inquiry: InquieryInterface;
}

export const DisplayInquiriesRecord: React.FC<RecordInterface> = ({inquiry}) => {
    return (
        <div className={recordContainerStyle}>
            <div>
                <p>Stworzono:</p>
                <p>{inquiry.createdAt}</p>
                <p>Wybór oferty:</p>
                <p>{inquiry.submissionDeadline}</p>
            </div>
            <div>
                <p>Kwota pożyczki</p>
                <p>{inquiry.loanAmount.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'})}</p>
                <p>Czas pożyczki</p>
                <p>{inquiry.loanDuration}</p>
            </div>
            <div>
                <p>Status</p>
                <p>{inquiry.status} </p>
            </div>
        </div>
    );
};

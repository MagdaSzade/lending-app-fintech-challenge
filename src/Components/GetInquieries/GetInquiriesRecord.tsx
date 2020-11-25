import {Button} from '@material-ui/core';
import React from 'react';
import {InquieryInterface} from '../../helpers/types';
import {recordContainerStyle} from '../Users/Loans/LoansList.styles';

interface RecordInterface {
    inquiry: InquieryInterface;
}

export const Record: React.FC<RecordInterface> = ({inquiry}) => {
    console.log(inquiry);
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
            <Button> Aplikuj! </Button>
        </div>
    );
};

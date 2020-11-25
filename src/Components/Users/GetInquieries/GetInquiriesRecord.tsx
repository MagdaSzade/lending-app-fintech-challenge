import {Button} from '@material-ui/core';
import React from 'react';
import {ROUTES} from '../../../helpers/ROUTES';
import {InquieryInterface} from '../../../helpers/types';
import {usePushToHistory} from '../../../hooks/usePushToHistory';
import {recordContainerStyle} from '../Loans/LoansList.styles';

interface RecordInterface {
    inquiry: InquieryInterface;
}

export const Record: React.FC<RecordInterface> = ({inquiry}) => {
    const pushToHistory = usePushToHistory();

    const onRecordClick = () => {
        pushToHistory(ROUTES.USER_MAKE_OFFER + `/${inquiry.id}`);
    };

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
            <Button onClick={onRecordClick}> Aplikuj! </Button>
        </div>
    );
};

import React from 'react';
import {LoanInterface, LOAN_STATUS} from '../../../helpers/types';
import {recordContainerStyle} from './LoansList.styles';

export const Record: React.FC<LoanInterface> = ({
    ID,
    lenderName,
    borrowerName,
    loanWasTaken,
    willBePaidOff,
    amount,
    paidOff,
    totalLeft,
    status,
}) => {
    switch (status) {
        case LOAN_STATUS.PAID_OFF:
            return (
                <div className={recordContainerStyle}>
                    <div>
                        <p>Pożyczkobiorca:</p>
                        <p>{borrowerName}</p>
                        <p>Pożyczkodawca:</p>
                        <p>{lenderName}</p>
                    </div>
                    <div>
                        <p>wzięta:</p>
                        <p>{loanWasTaken}</p>
                        <p>spłacona:</p>
                        <p>{willBePaidOff}</p>
                    </div>
                    <div>
                        <p>Kwota pożyczki:</p>
                        <p>{amount.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'})}</p>
                        <p>Spłacono:</p>
                        <p>{paidOff.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'})}</p>
                    </div>
                </div>
            );
        case LOAN_STATUS.PENDING: {
            return (
                <div className={recordContainerStyle}>
                    <div>
                        <p>Pożyczkobiorca:</p>
                        <p>{borrowerName}</p>
                        <p>Pożyczkodawca:</p>
                        <p>{lenderName}</p>
                    </div>
                    <div>
                        <p>wzięta:</p>
                        <p>{loanWasTaken}</p>
                        <p>Zostanie spłacona:</p>
                        <p>{willBePaidOff}</p>
                    </div>
                    <div>
                        <p>Kwota pożyczki:</p>
                        <p>{amount.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'})}</p>
                        <p>Spłacono:</p>
                        <p>{paidOff.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'})}</p>
                        <p>Pozostało:</p>
                        <p>{totalLeft.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'})}</p>
                    </div>
                </div>
            );
        }
        default:
            return null;
    }
};

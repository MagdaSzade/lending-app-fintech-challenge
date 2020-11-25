import React from 'react';
import {OfferInterface} from '../../../helpers/types';
import {recordContainerStyle} from '../Loans/LoansList.styles';

interface RecordInterface {
    offer: OfferInterface;
}

export const Record: React.FC<RecordInterface> = ({offer}) => {
    return (
        <div className={recordContainerStyle}>
            <div>
                <p>Stworzono:</p>
                <p>{offer.createdAt}</p>
                <p>status:</p>
                <p>{offer.status}</p>
                <p>{offer.submitionDeadline}</p>
            </div>
            <div>
                <p>Kwota ofertowa</p>
                <p>{offer.loanAmountGiven.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'})}</p>
                <p>Czas ofertowy</p>
                <p>{offer.loanDurationGiven}</p>
                <p>Oprocentowanie roczne</p>
                <p>{offer.annualIntrestRateGiven}</p>
            </div>
            <div>
                <p>Kwota zapytania</p>
                <p>{offer.loanAmount.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'})}</p>
                <p>Czas zapytania</p>
                <p>{offer.loanDurationGiven}</p>
            </div>
        </div>
    );
};

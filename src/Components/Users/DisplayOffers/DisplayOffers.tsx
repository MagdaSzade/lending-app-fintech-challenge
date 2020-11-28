import React from 'react';
import {DisplayOffersRecord} from './DisplayOffersRecord';
import {useAppContext} from '../../../hooks/useAppContext';
import {OfferInterface} from '../../../helpers/types';

export const DisplayOffers: React.FC = () => {
    const {userData} = useAppContext();
    if (userData && userData.ListOfOffers.length > 0) {
        return (
            <div>
                {userData.ListOfOffers.map((offer: OfferInterface) => {
                    return <DisplayOffersRecord offer={offer} />;
                })}
            </div>
        );
    }
    return <div> Wyświetlanie chwilowo nie działa... </div>;
};

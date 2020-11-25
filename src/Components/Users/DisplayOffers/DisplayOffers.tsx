import React from 'react';
import {OfferInterface} from '../../../helpers/types';
import {useAppContext} from '../../../hooks/useAppContext';
import {Record} from './DisplayOffersRecord';

export const DisplayOffers: React.FC = () => {
    const {userData} = useAppContext();
    if (userData && userData.ListOfOffers.length > 0) {
        return (
            <div>
                {userData.ListOfOffers.map((offer: OfferInterface) => {
                    return <Record offer={offer} />;
                })}
            </div>
        );
    }
    return <div> Wyświetlanie chwilowo nie działa... </div>;
};

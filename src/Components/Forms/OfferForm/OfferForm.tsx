import React from 'react';
import {useHistory} from 'react-router-dom';

export const OfferForm: React.FC = () => {
    const {location} = useHistory();

    return <div>{location.pathname} </div>;
};

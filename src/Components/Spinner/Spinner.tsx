import React from 'react';
import {useAppContext} from '../../hooks/useAppContext';
import {spinnerConteinerStyle, spinnerStyle} from './Spinner.styles';

export const Spinner: React.FC = () => {
    const {isFetching} = useAppContext();

    if (isFetching) {
        return (
            <div className={spinnerConteinerStyle}>
                <div className={spinnerStyle}>
                    <i className="fas fa-snowflake fa-spin fa-8x"></i>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

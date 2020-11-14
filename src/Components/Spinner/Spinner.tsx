import React from 'react';
import {useAppContex} from '../../hooks/useAppContex';
import {spinnerConteinerStyle, spinnerStyle} from './Spinner.styles';

export const Spinner: React.FC = () => {
    const {isFetching} = useAppContex();

    if (isFetching) {
        return (
            <div className={spinnerConteinerStyle}>
                <div className={spinnerStyle}>
                    <i className="fas fa-snowflake fa-spin fa-8x"></i>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
};

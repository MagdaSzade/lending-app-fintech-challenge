import React from 'react';
import {detailsContainerStyle, headerStyle} from './DetaiContainer.styles';

interface DetailsContainerInterface {
    title: string;
    children?: JSX.Element | JSX.Element[];
}

export const DetailsContainer: React.FC<DetailsContainerInterface> = ({title, children}) => {
    return (
        <div className={detailsContainerStyle}>
            <div className={headerStyle}>{title}</div>
            {children}
        </div>
    );
};

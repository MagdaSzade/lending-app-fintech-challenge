import React from 'react';
import {detailsConteinerStyle, headerStyle} from './DetaiConteiner.styles';

interface DetailsConteinerInterface {
    title: string;
    children?: JSX.Element | JSX.Element[];
}

export const DetailsConteiner: React.FC<DetailsConteinerInterface> = ({title, children}) => {
    return (
        <div className={detailsConteinerStyle}>
            <div className={headerStyle}>{title}</div>
            {children}
        </div>
    );
};

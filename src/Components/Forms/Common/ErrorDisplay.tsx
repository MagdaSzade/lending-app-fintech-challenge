import React from 'react';
import {errorStyle} from './common.styles';

export const ErrorDisplay: React.FC<string> = error => {
    return <div className={errorStyle}>{error}</div>;
};

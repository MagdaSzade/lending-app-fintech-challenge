import {Input} from '@material-ui/core';
import React, {ChangeEvent} from 'react';
import NumberFormat from 'react-number-format';
import {inputContainer} from './common.styles';

interface PhoneInputInterface {
    label: string;
    name: string;
    value: number | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

export const PhoneInput: React.FC<PhoneInputInterface> = ({label, name, value, onChange, error}) => {
    return (
        <div className={inputContainer}>
            <label htmlFor={name}>{label}</label>
            <NumberFormat
                id={name}
                customInput={Input}
                value={value}
                allowNegative={false}
                format="+48 ###-###-###"
                mask="_"
                allowEmptyFormatting
                onChange={onChange}
            />
        </div>
    );
};

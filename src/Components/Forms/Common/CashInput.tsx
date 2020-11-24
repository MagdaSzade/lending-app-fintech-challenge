import {Input} from '@material-ui/core';
import {ErrorMessage} from 'formik';
import React from 'react';
import NumberFormat from 'react-number-format';
import {inputContainer} from './common.styles';
import {ErrorDisplay} from './ErrorDisplay';

interface CashInputInterface {
    label: string;
    name: string;
    value: number;
    onChange: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
    onBlur: (e: React.FocusEvent<any>) => void;
}

export const CashInput: React.FC<CashInputInterface> = ({label, name, value, onChange, onBlur}) => {
    return (
        <div className={inputContainer}>
            <label htmlFor={name}>{label}</label>
            <NumberFormat
                id={name}
                customInput={Input}
                value={value}
                allowNegative={false}
                thousandSeparator=" "
                suffix={' PLN'}
                allowEmptyFormatting
                onValueChange={({floatValue}) => {
                    if (floatValue) {
                        onChange(name, floatValue);
                    }
                }}
                onBlur={onBlur}
            />
            <ErrorMessage name={name} render={ErrorDisplay} />
        </div>
    );
};

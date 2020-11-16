import React from 'react';
import {Input} from '@material-ui/core';
import {ChangeEvent} from 'react';
import {inputContainer} from './common.styles';

interface TextInputInterface {
    label: string;
    name: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    type?: string;
}

export const TextInput: React.FC<TextInputInterface> = ({label, name, value, onChange, onBlur, type = 'text'}) => {
    return (
        <div className={inputContainer}>
            <label htmlFor={name}>{label}</label>
            <Input id={name} type={type} onBlur={onBlur} onChange={onChange} value={value}></Input>
        </div>
    );
};

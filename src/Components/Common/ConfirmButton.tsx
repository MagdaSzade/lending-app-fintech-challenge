import React from 'react';
import {FiSend} from 'react-icons/fi';
import {Button} from '@material-ui/core';

interface ConfirmButtonInterface {
    isValid: boolean;
    validText: string;
    inValidText: string;
}

export const ConfirmButton: React.FC<ConfirmButtonInterface> = ({isValid, inValidText, validText}) => {
    return isValid ? (
        <Button type="submit">
            {validText}
            <FiSend />
        </Button>
    ) : (
        <Button disabled>{inValidText}</Button>
    );
};

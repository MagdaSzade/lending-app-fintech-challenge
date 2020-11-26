import React from 'react';
import {FiSend} from 'react-icons/fi';
import {Button} from '@material-ui/core';

interface ConfirmButtonInterface {
    isValid: boolean;
}

export const ConfirmButton: React.FC<ConfirmButtonInterface> = ({isValid}) => {
    return isValid ? (
        <Button id="submit" type="submit">
            Wyślij
            <FiSend />
        </Button>
    ) : (
        <Button disabled>Jeszcze nie można wysłać...</Button>
    );
};

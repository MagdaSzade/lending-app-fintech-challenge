import React from 'react';
import {FiCircle, FiCheckCircle} from 'react-icons/fi';
import {ROLE} from '../../../helpers/types';
import {radioContainerStyle, radioStyle} from './RegisterForm.styles';

interface SelectRoleInterface {
    borrower: string;
    lender: string;
    value: ROLE;
    onChange: (name: string, value: ROLE) => void;
}

export const SelectRole: React.FC<SelectRoleInterface> = ({borrower, lender, value, onChange}) => {
    const isBorrowerChecked = value === ROLE.BORROWER;

    return (
        <div className={radioContainerStyle}>
            <label htmlFor="borrower" className={radioStyle}>
                {borrower}
                <input
                    type="radio"
                    value={ROLE.BORROWER}
                    name="role"
                    id="borrower"
                    checked={isBorrowerChecked}
                    onChange={() => onChange('role', ROLE.BORROWER)}
                />
                {isBorrowerChecked ? <FiCheckCircle></FiCheckCircle> : <FiCircle />}
            </label>
            <label htmlFor="lender" className={radioStyle}>
                {lender}
                <input
                    type="radio"
                    value={ROLE.LENDER}
                    name="role"
                    id="lender"
                    checked={!isBorrowerChecked}
                    onChange={() => onChange('role', ROLE.LENDER)}
                />
                {!isBorrowerChecked ? <FiCheckCircle></FiCheckCircle> : <FiCircle />}
            </label>
        </div>
    );
};

import React from 'react';
import {Formik, Form} from 'formik';
import {ConfirmButton} from '../Common/ConfirmButton';
import {TextInput} from '../Common/TextInput';
import {useAppContext} from '../../../hooks/useAppContext';
import {initialValues, bankingOperationFormValidation} from './BankingOperationForm.helpers';
import {formContainerStyle} from './BankingOperationsForm.styles';
import {useBankingAccountActions} from '../../../hooks/useBankingAccountActions';
import {useHistory} from 'react-router-dom';
import {ROUTES} from '../../../helpers/ROUTES';

export const LoginForm: React.FC = () => {
    const {lang} = useAppContext();
    const {deposit, withdrawal} = useBankingAccountActions();
    const {location} = useHistory();

    const onFormSubmit = location.pathname === ROUTES.USER_ACCOUNT_DEPOSIT ? deposit : withdrawal;
    return (
        <Formik onSubmit={onFormSubmit} initialValues={initialValues} validate={bankingOperationFormValidation}>
            {({values: {accountNumber, amount, password}, handleBlur, handleChange, isValid}) => (
                <Form className={formContainerStyle}>
                    <TextInput
                        label="numer konta"
                        name="accountNumber"
                        type="accountNumber"
                        value={accountNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <TextInput
                        label="Kwota"
                        name="amount"
                        type="number"
                        value={amount.toLocaleString()}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <TextInput label="Hasło" name="password" value={password} type="password" onChange={handleChange} onBlur={handleBlur} />
                    <ConfirmButton isValid={isValid} inValidText="nie wyślesz" validText="wyślij" />
                </Form>
            )}
        </Formik>
    );
};

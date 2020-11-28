import React from 'react';
import {Form, Formik} from 'formik';
import {BackButton} from '../Common/BackButton';
import {CashInput} from '../Common/CashInput';
import {ConfirmButton} from '../Common/ConfirmButton';
import {useAppContext} from '../../../hooks/useAppContext';
import {useHistory} from 'react-router-dom';
import {useBankingAccountActions} from '../../../hooks/useBankingAccountActions';
import {initialValues, accountFormValidation} from './AccountActionForm.helpers';
import {AccountActionInterface} from './AccountActionForm.interface';
import {ROUTES} from '../../../helpers/ROUTES';
import {formContainerStyle} from '../Common/common.styles';

export const AccountActionForm: React.FC = () => {
    const {withdrawal, deposit} = useBankingAccountActions();
    const {userData} = useAppContext();
    const {location} = useHistory();
    let onSubmit;
    let label = '';
    let validate;

    if (location.pathname === ROUTES.USER_ACCOUNT_DEPOSIT) {
        onSubmit = deposit;
        label = 'Wpłać';
        validate = accountFormValidation;
    } else {
        onSubmit = withdrawal;
        label = 'wypłać';
        validate = (values: AccountActionInterface) => {
            return accountFormValidation(values, userData?.account.accountState);
        };
    }

    return (
        <Formik onSubmit={onSubmit} initialValues={initialValues} validateOnChange validate={validate}>
            {({values: {value}, handleBlur, setFieldValue, isValid}) => (
                <Form className={formContainerStyle}>
                    <CashInput label={label} name="value" value={value} onChange={setFieldValue} onBlur={handleBlur} />
                    <BackButton path={ROUTES.USER_ACCOUNT} />
                    <ConfirmButton isValid={isValid} />
                </Form>
            )}
        </Formik>
    );
};

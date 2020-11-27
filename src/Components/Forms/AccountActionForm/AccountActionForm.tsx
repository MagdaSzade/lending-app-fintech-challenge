import {Form, Formik} from 'formik';
import React from 'react';
import {useHistory} from 'react-router-dom';
import {ROUTES} from '../../../helpers/ROUTES';
import {useBankingAccountActions} from '../../../hooks/useBankingAccountActions';
import {BackButton} from '../Common/BackButton';
import {CashInput} from '../Common/CashInput';
import {ConfirmButton} from '../Common/ConfirmButton';
import {formContainerStyle} from '../LoginForm/LoginForm.styles';
import {initialValues} from './AccountActionForm.helpers';

export const AccountActionForm: React.FC = () => {
    const {withdrawal, deposit} = useBankingAccountActions();
    const {location} = useHistory();
    let onSubmit;
    let label = '';

    if (location.pathname === ROUTES.USER_ACCOUNT_DEPOSIT) {
        onSubmit = deposit;
        label = 'Wpłać';
    } else {
        onSubmit = withdrawal;
        label = 'wypłać';
    }

    return (
        <Formik onSubmit={onSubmit} initialValues={initialValues}>
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

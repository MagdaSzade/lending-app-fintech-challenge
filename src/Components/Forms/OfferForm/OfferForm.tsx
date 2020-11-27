import {Form, Formik} from 'formik';
import React from 'react';
import {useHistory} from 'react-router-dom';
import {ROUTES} from '../../../helpers/ROUTES';
import {useNewOffer} from '../../../hooks/useNewOffer';
import {BackButton} from '../Common/BackButton';
import {CashInput} from '../Common/CashInput';
import {ConfirmButton} from '../Common/ConfirmButton';
import {NumberInput} from '../Common/NumberInput';
import {formContainerStyle} from '../LoginForm/LoginForm.styles';
import {initialValues} from './OfferForm.helpers';
import {OfferFormInterface} from './OfferForm.interface';

export const OfferForm: React.FC = () => {
    const newOffer = useNewOffer();
    const {location} = useHistory();
    const init: OfferFormInterface = initialValues(location.pathname);

    return (
        <Formik onSubmit={newOffer} initialValues={init}>
            {({values: {annualIntrestRate, proposedAmount}, handleBlur, setFieldValue, isValid}) => (
                <Form className={formContainerStyle}>
                    <CashInput
                        label="Proponowana kwota pożyczki"
                        name="proposedAmount"
                        value={proposedAmount}
                        onChange={setFieldValue}
                        onBlur={handleBlur}
                    />
                    <NumberInput
                        label="Oprocentowanie roczne"
                        name="annualIntrestRate"
                        sufix=" %"
                        value={annualIntrestRate}
                        onChange={setFieldValue}
                        onBlur={handleBlur}
                    />
                    <BackButton path={ROUTES.USER_FIND_INQUIRIES} />
                    <ConfirmButton isValid={isValid} />
                </Form>
            )}
        </Formik>
    );
};

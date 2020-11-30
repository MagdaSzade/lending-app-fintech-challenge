import React from 'react';
import {Form, Formik} from 'formik';
import {useHistory} from 'react-router-dom';
import {useNewOffer} from '../../../hooks/useNewOffer';
import {BackButton} from '../Common/BackButton';
import {CashInput} from '../Common/CashInput';
import {ConfirmButton} from '../Common/ConfirmButton';
import {NumberInput} from '../Common/NumberInput';
import {initialValues, offerFormValidation} from './OfferForm.helpers';
import {ROUTES} from '../../../helpers/ROUTES';
import {OfferFormInterface} from './OfferForm.interface';
import {formContainerStyle} from '../Common/common.styles';

export const OfferForm: React.FC = () => {
    const newOffer = useNewOffer();
    const {location} = useHistory();
    const init: OfferFormInterface = initialValues(location.pathname);

    return (
        <Formik onSubmit={newOffer} initialValues={init} validateOnChange validate={offerFormValidation}>
            {({values: {annualInterestRate, proposedAmount, propposedDuration}, handleBlur, setFieldValue, isValid}) => (
                <Form className={formContainerStyle}>
                    <CashInput
                        label="Proponowana kwota pożyczki"
                        name="proposedAmount"
                        value={proposedAmount}
                        onChange={setFieldValue}
                        onBlur={handleBlur}
                    />
                    <NumberInput
                        label="Długość pożyczki"
                        name="propposedDuration"
                        sufix=" mies."
                        value={propposedDuration}
                        onChange={setFieldValue}
                        onBlur={handleBlur}
                    />
                    <NumberInput
                        label="Oprocentowanie roczne"
                        name="annualInterestRate"
                        sufix=" %"
                        value={annualInterestRate}
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

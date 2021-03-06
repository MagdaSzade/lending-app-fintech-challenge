import React from 'react';
import {Form, Formik} from 'formik';
import {useNewInquiry} from '../../../hooks/useNewInquiry';
import {CashInput} from '../Common/CashInput';
import {ConfirmButton} from '../Common/ConfirmButton';
import {NumberInput} from '../Common/NumberInput';
import {initialValues, inquiryFormValidate} from './InquiryForm.helpers';
import {formContainerStyle} from '../Common/common.styles';

export const InquiryForm: React.FC = () => {
    const newInquiry = useNewInquiry();

    return (
        <Formik onSubmit={newInquiry} initialValues={initialValues} validate={inquiryFormValidate}>
            {({values: {loanAmount, loanDuration, submissionDeadline}, handleBlur, setFieldValue, isValid}) => (
                <Form className={formContainerStyle}>
                    <CashInput label="Kwota pożyczki" name="loanAmount" value={loanAmount} onChange={setFieldValue} onBlur={handleBlur} />
                    <NumberInput
                        label="Długość pożyczki"
                        name="loanDuration"
                        sufix=" mies."
                        value={loanDuration}
                        onChange={setFieldValue}
                        onBlur={handleBlur}
                    />
                    <NumberInput
                        label="Ilość dni na zbieranie ofert"
                        name="submissionDeadline"
                        sufix=" dni"
                        value={submissionDeadline}
                        onChange={setFieldValue}
                        onBlur={handleBlur}
                    />
                    <ConfirmButton isValid={isValid} />
                </Form>
            )}
        </Formik>
    );
};

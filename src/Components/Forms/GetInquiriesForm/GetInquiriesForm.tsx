import {Form, Formik} from 'formik';
import React from 'react';
import {CashInput} from '../Common/CashInput';
import {ConfirmButton} from '../Common/ConfirmButton';
import {NumberInput} from '../Common/NumberInput';
import {formContainerStyle} from '../EmailChangeForm/EmailChangeForm.styles';
import {initialValues} from './GetInquiriesForm.helpers';
import {GetInquiryFormInterface} from './GetInquiriesForm.interface';

interface GetInquiriesFormPropsInterface {
    onSubmit: (values: GetInquiryFormInterface) => void;
}

export const GetInquiriesForm: React.FC<GetInquiriesFormPropsInterface> = ({onSubmit}) => {
    return (
        <Formik onSubmit={onSubmit} initialValues={initialValues}>
            {({values: {minAmount, maxAmount, minLoanDuration, maxLoanDuration}, handleBlur, setFieldValue, isValid}) => (
                <Form className={formContainerStyle}>
                    <CashInput
                        label="minimalna kwata pożyczki"
                        name="minAmount"
                        value={minAmount}
                        onChange={setFieldValue}
                        onBlur={handleBlur}
                    />
                    <CashInput
                        label="maksymalna kwata pożyczki"
                        name="maxAmount"
                        value={maxAmount}
                        onChange={setFieldValue}
                        onBlur={handleBlur}
                    />
                    <NumberInput
                        label="maksymalna długość pożyczki"
                        name="maxLoanDuration"
                        sufix=" mies."
                        value={maxLoanDuration}
                        onChange={setFieldValue}
                        onBlur={handleBlur}
                    />
                    <NumberInput
                        label="minimalna długość pożyczki"
                        name="minLoanDuration"
                        sufix=" mies."
                        value={minLoanDuration}
                        onChange={setFieldValue}
                        onBlur={handleBlur}
                    />
                    <ConfirmButton isValid={isValid} />
                </Form>
            )}
        </Formik>
    );
};

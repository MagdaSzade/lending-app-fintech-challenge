import React from 'react';
import {Formik, Form} from 'formik';
import {ConfirmButton} from '../Common/ConfirmButton';
import {TextInput} from '../Common/TextInput';
import {useUsersActions} from '../../../hooks/usersActions/useUserActions';
import {initialValues, emailChangeFormValidation} from './EmailChangeForm.helpers';
import {formContainerStyle} from './EmailChangeForm.styles';

export const EmailChangeForm: React.FC = () => {
    const {changeEmail} = useUsersActions();

    return (
        <Formik onSubmit={changeEmail} initialValues={initialValues} validate={emailChangeFormValidation}>
            {({values: {newEmail, password}, handleBlur, handleChange, isValid}) => (
                <Form className={formContainerStyle}>
                    <TextInput
                        label="Nowy email"
                        name="newEmail"
                        value={newEmail}
                        type="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <TextInput label="Hasło" name="password" value={password} type="password" onChange={handleChange} onBlur={handleBlur} />
                    <ConfirmButton isValid={isValid} inValidText="nie można wysłać..." validText="wyślij" />
                </Form>
            )}
        </Formik>
    );
};

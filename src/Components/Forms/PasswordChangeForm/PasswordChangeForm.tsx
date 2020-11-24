import React from 'react';
import {Formik, Form} from 'formik';
import {ConfirmButton} from '../Common/ConfirmButton';
import {TextInput} from '../Common/TextInput';
import {useUsersActions} from '../../../hooks/usersActions/useUserActions';
import {initialValues, passwordChangeFormValidation} from './PasswordChangeForm.helpers';
import {formContainerStyle} from './PasswordChangeForm.styles';

export const PasswordChangeForm: React.FC = () => {
    const {changePassword} = useUsersActions();

    return (
        <Formik onSubmit={changePassword} initialValues={initialValues} validate={passwordChangeFormValidation}>
            {({values: {newPassword1, newPassword2, password}, handleBlur, handleChange, isValid}) => (
                <Form className={formContainerStyle}>
                    <TextInput
                        label="Nowe hasło"
                        name="newPassword2"
                        value={newPassword1}
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <TextInput
                        label="Powtórz nowe hasło"
                        name="newPassword2"
                        value={newPassword2}
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <TextInput
                        label="Aktualne hasło"
                        name="password"
                        value={password}
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <ConfirmButton isValid={isValid} inValidText="nie można wysłać..." validText="wyślij" />
                </Form>
            )}
        </Formik>
    );
};

import React from 'react';
import {Formik, Form} from 'formik';
import {TextInput} from '../Common/TextInput';
import {Button} from '@material-ui/core';
import {useAppContex} from '../../hooks/useAppContex';
import {initialValues, loginFormValidation, descriptions} from './LoginForm.helpers';
import {formContainerStyle} from './LoginForm.styles';
import {useLoginNewUser} from '../../hooks/useLoginNewUser';

export const LoginForm: React.FC = () => {
    const {lang} = useAppContex();
    const login = useLoginNewUser();

    return (
        <Formik onSubmit={login} initialValues={initialValues} validate={loginFormValidation}>
            {({values: {email, password}, errors, handleChange, isValid}) => (
                <Form className={formContainerStyle}>
                    <TextInput
                        label={descriptions[lang].email}
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                        error={errors.email}
                    />
                    <TextInput
                        label={descriptions[lang].password}
                        name="password"
                        value={password}
                        type="password"
                        onChange={handleChange}
                        error={errors.password}
                    />
                    <Button type="submit" disabled={!isValid}>
                        {descriptions[lang].button}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

import React from 'react';
import {Formik, Form, ErrorMessage} from 'formik';
import {TextInput} from '../Common/TextInput';
import {Button} from '@material-ui/core';
import {useAppContex} from '../../hooks/useAppContex';
import {initialValues, loginFormValidation, descriptions} from './LoginForm.helpers';
import {formContainerStyle} from './LoginForm.styles';
import {useLoginNewUser} from '../../hooks/useLoginNewUser';
import {LoginUserInterface} from './LoginForm.interface';

export const LoginForm: React.FC = () => {
    const {lang} = useAppContex();
    const login = useLoginNewUser();
    const loginFormValidationLang = (values: LoginUserInterface) => loginFormValidation(values, lang);

    return (
        <Formik onSubmit={login} initialValues={initialValues} validate={loginFormValidationLang}>
            {({values: {email, password}, handleBlur, handleChange, isValid}) => (
                <Form className={formContainerStyle}>
                    <TextInput
                        label={descriptions[lang].email}
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <ErrorMessage name="email" />
                    <TextInput
                        label={descriptions[lang].password}
                        name="password"
                        value={password}
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <ErrorMessage name="password" />
                    <Button type="submit" disabled={!isValid}>
                        {descriptions[lang].button}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

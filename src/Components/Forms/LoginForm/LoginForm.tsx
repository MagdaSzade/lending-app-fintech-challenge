import React from 'react';
import {Formik, Form} from 'formik';
import {ConfirmButton} from '../Common/ConfirmButton';
import {TextInput} from '../Common/TextInput';
import {useAppContext} from '../../../hooks/useAppContext';
import {initialValues, loginFormValidation, descriptions} from './LoginForm.helpers';
import {formContainerStyle} from './LoginForm.styles';
import {useLoginNewUser} from '../../../hooks/useLoginNewUser';
import {LoginUserInterface} from './LoginForm.interface';

export const LoginForm: React.FC = () => {
    const {lang} = useAppContext();
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
                    <TextInput
                        label={descriptions[lang].password}
                        name="password"
                        value={password}
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <ConfirmButton isValid={isValid} inValidText={descriptions[lang].buttonInValid} validText={descriptions[lang].button} />
                </Form>
            )}
        </Formik>
    );
};

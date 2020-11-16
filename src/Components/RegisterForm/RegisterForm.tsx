import React from 'react';
import {Formik, Form, ErrorMessage} from 'formik';
import {TextInput} from '../Common/TextInput';
import {PhoneInput} from '../Common/PhoneInput';
import {SelectRole} from './RegisterFormSelectRole';
import {Button} from '@material-ui/core';
import {useAppContex} from '../../hooks/useAppContex';
import {useRegisterNewUser} from '../../hooks/useRegisterNewUser';
import {initialValues, registerFormValidation, descriptions} from './RegisterForm.helpers';
import {formContainerStyle} from './RegisterForm.styles';
import {NewUserInterface} from './RegisterForm.interface';

export const RegisterForm: React.FC = () => {
    const {lang} = useAppContex();
    const registerUser = useRegisterNewUser();
    const registerFormValidationLang = (values: NewUserInterface) => registerFormValidation(values, lang);

    return (
        <Formik validateOnBlur onSubmit={registerUser} initialValues={initialValues} validate={registerFormValidationLang}>
            {({values: {name, surname, email, phone, password, password2, role}, handleChange, setFieldValue, handleBlur, isValid}) => (
                <Form className={formContainerStyle}>
                    <SelectRole
                        borrower={descriptions[lang].borrower}
                        lender={descriptions[lang].lender}
                        value={role}
                        onChange={setFieldValue}
                    />
                    <TextInput label={descriptions[lang].name} name="name" value={name} onChange={handleChange} onBlur={handleBlur} />
                    <ErrorMessage name="name" />
                    <TextInput
                        label={descriptions[lang].surname}
                        name="surname"
                        value={surname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <ErrorMessage name="surname" />
                    <PhoneInput label={descriptions[lang].phone} name="phone" value={phone} onChange={handleChange} />
                    <ErrorMessage name="phone" />
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
                    <TextInput
                        label={descriptions[lang].password2}
                        name="password2"
                        value={password2}
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <ErrorMessage name="password2" />
                    <Button type="submit" disabled={!isValid}>
                        {descriptions[lang].button}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

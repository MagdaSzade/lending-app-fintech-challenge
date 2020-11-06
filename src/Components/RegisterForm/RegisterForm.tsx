import React from 'react';
import {Formik, Form} from 'formik';
import {TextInput} from '../Common/TextInput';
import {PhoneInput} from '../Common/PhoneInput';
import {SelectRole} from './RegisterFormSelectRole';
import {Button} from '@material-ui/core';
import {useAppContex} from '../Context/Context';
import {initialValues, registerFormValidation, descriptions} from './RegisterForm.helpers';
import {formContainerStyle} from './RegisterForm.styles';

export const RegisterForm: React.FC = () => {
    const onSubmit = (values: any) => {
        console.log(values);
    };
    const {lang} = useAppContex();

    return (
        <Formik onSubmit={onSubmit} initialValues={initialValues} validate={registerFormValidation}>
            {({values: {name, surname, email, phone, password, password2, role}, errors, handleChange, setFieldValue, isValid}) => (
                <Form className={formContainerStyle}>
                    <SelectRole
                        borrower={descriptions[lang].borrower}
                        lender={descriptions[lang].lender}
                        value={role}
                        onChange={setFieldValue}
                    />
                    <TextInput label={descriptions[lang].name} name="name" value={name} onChange={handleChange} error={errors.name} />
                    <TextInput
                        label={descriptions[lang].surname}
                        name="surname"
                        value={surname}
                        onChange={handleChange}
                        error={errors.surname}
                    />
                    <PhoneInput label={descriptions[lang].phone} name="phone" value={phone} onChange={handleChange} error={errors.phone} />
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
                    <TextInput
                        label={descriptions[lang].password2}
                        name="password2"
                        value={password2}
                        type="password"
                        onChange={handleChange}
                        error={errors.password2}
                    />
                    <Button type="submit" disabled={!isValid}>
                        {descriptions[lang].button}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

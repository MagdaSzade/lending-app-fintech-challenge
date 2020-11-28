import React from 'react';
import {Formik, Form} from 'formik';
import {TextInput} from '../Common/TextInput';
import {SelectRole} from './RegisterFormSelectRole';
import {ConfirmButton} from '../Common/ConfirmButton';
import {useAppContext} from '../../../hooks/useAppContext';
import {useRegisterNewUser} from '../../../hooks/useRegisterNewUser';
import {initialValues, registerFormValidation, descriptions} from './RegisterForm.helpers';
import {NewUserInterface} from './RegisterForm.interface';
import {formContainerStyle} from '../Common/common.styles';

export const RegisterForm: React.FC = () => {
    const {lang} = useAppContext();
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
                    <TextInput
                        label={descriptions[lang].surname}
                        name="surname"
                        value={surname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
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
                    <TextInput
                        label={descriptions[lang].password2}
                        name="password2"
                        value={password2}
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <ConfirmButton isValid={isValid} />
                </Form>
            )}
        </Formik>
    );
};

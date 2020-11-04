import {cx} from 'emotion';
import React, {useState} from 'react';
import {LoginForm} from '../LoginForm/LoginForm';
import {RegisterForm} from '../RegisterForm/RegisterForm';
import {useAppContex} from '../Context/Context';
import {PAGES, descriptions} from './FolderContainer.helpers';
import {
    markerContainerStyle,
    markerStyle,
    loginColor,
    registerColor,
    borderRadius,
    loginBorderColor,
    registerBorderColor,
    sectionStyle,
    folderStyle,
    formStyle,
} from './FolderContainer.styles';
import {CSS_COLORS} from '../../helpers/globalCss';

export const FolderContainer: React.FC = () => {
    const [whatToDisplay, setWhatToDisplay] = useState(PAGES.LOGIN);
    const [sectionClass, setSectionClass] = useState(cx(loginColor, sectionStyle));
    const [zIndexLogin, setZIndexLogin] = useState({zIndex: 15});
    const [zIndexRegister, setZIndexRegister] = useState({zIndex: 0});

    const loginClass = cx(loginColor, borderRadius, loginBorderColor);
    const registerClass = cx(registerColor, borderRadius, registerBorderColor);

    const {lang} = useAppContex();

    const display = () => {
        switch (whatToDisplay) {
            case PAGES.LOGIN:
                return <LoginForm />;
            case PAGES.REGISTER:
                return <RegisterForm />;
        }
    };

    const onRegisterClick = () => {
        setZIndexRegister({zIndex: 15});
        setZIndexLogin({zIndex: 0});
        setWhatToDisplay(PAGES.REGISTER);
        setSectionClass(cx(registerColor, sectionStyle));
    };

    const onLoginClick = () => {
        setZIndexRegister({zIndex: 0});
        setZIndexLogin({zIndex: 15});
        setWhatToDisplay(PAGES.LOGIN);
        setSectionClass(cx(loginColor, sectionStyle));
    };

    return (
        <div className={folderStyle}>
            <section className={markerContainerStyle}>
                <div onClick={onLoginClick} className={loginClass}>
                    <div className={cx(markerStyle(CSS_COLORS.LOGIN), borderRadius)} style={zIndexLogin}>
                        {descriptions[lang].login}
                    </div>
                </div>
                <div onClick={onRegisterClick} className={registerClass}>
                    <div className={cx(markerStyle(CSS_COLORS.REGISTER), borderRadius)} style={zIndexRegister}>
                        {descriptions[lang].register}
                    </div>
                </div>
            </section>
            <section className={sectionClass}>
                <div className={formStyle}>{display()}</div>
            </section>
        </div>
    );
};

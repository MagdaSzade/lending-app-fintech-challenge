import React from 'react';
import {useAppContex} from '../Context/Context';
import {flex, buttonStyle, pStyle} from './Header.styles';
import {LANGS} from '../Context/Contex.helpers';

export const Header: React.FC = () => {
    const {changeLang} = useAppContex();

    return (
        <div className={flex}>
            <button
                className={buttonStyle}
                onClick={() => {
                    changeLang(LANGS.PL);
                }}
            >
                PL
            </button>
            <p className={pStyle}>/</p>
            <button
                className={buttonStyle}
                onClick={() => {
                    changeLang(LANGS.EN);
                }}
            >
                EN
            </button>
        </div>
    );
};

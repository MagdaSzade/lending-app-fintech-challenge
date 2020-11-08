import React from 'react';
import {flex, buttonStyle, pStyle} from './Header.styles';
import {useAppContex} from '../../hooks/useAppContex';
import {LANGS} from '../../helpers/types';

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

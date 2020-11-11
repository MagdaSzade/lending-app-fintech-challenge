import {injectGlobal} from 'emotion';

export enum CSS_COLORS {
    LOGIN = '#87bdd8',
    REGISTER = '#b7d7e8',
    DETAIL = '#3e4444',
    LANG = '#405d27',
    BACKGROUND = '#F5F0F6',
    TEXT_BACKGROUND = '#e3eaa7',
    TEXT_COLOR = '#3e4444',
}

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    background-color: 'none';
    letter-spacing: 0.07em;
    box-sizing: border-box;
    font-size: 16px;
    color: ${CSS_COLORS.DETAIL};
    font-family: 'Varta', sans-serif;
  }
`;

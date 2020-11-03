import {injectGlobal} from 'emotion';

export enum CSS_COLORS {
    LOGIN = '#95AD5C',
    REGISTER = '#6386BB',
    DETAIL = '#F5F0F6',
    LANG = '#95AD5C',
    BACKGROUND = '#F5F0F6',
}

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    background-color: 'none';
    letter-spacing: 0.07em;
    box-sizing: border-box;
    font-size: 12px;
    color: ${CSS_COLORS.DETAIL};
  }
`;

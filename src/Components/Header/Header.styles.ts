import {css} from 'emotion';
import {CSS_COLORS} from '../../helpers/globalCss';

export const headerStyle = css({
    display: 'flex',
    justifyContent: 'flex-end',
});

export const flex = css({
    display: 'flex',
    padding: '1rem',
    justifyContent: 'flex-end',
    alignItems: 'center',
});

export const buttonStyle = css({
    color: CSS_COLORS.LANG,
    padding: '0.2rem',
    border: 'none',
    backgroundColor: 'inherit',
});

export const pStyle = css({
    color: CSS_COLORS.LANG,
});

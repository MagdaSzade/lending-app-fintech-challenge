import {css} from 'emotion';
import {CSS_COLORS} from '../../helpers/globalCss';

export const navbarConteinerStyle = css({
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 690px)': {
        flexDirection: 'column',
        backgroundColor: CSS_COLORS.BACKGROUND,
    },
});

export const iconNavStyle = css({
    display: 'none',
    '@media(max-width: 690px)': {
        position: 'fixed',
        left: 0,
        top: 0,
        padding: '1rem 2rem',
        display: 'block',
    },
});

export const displayNoneStyle = css({
    display: 'block',
    '@media (max-width: 690px)': {
        position: 'absolute',
        display: 'none',
    },
});

export const displayBlockStyle = css({
    display: 'block',
});

export const centerIconStyle = css({
    display: 'flex',
    alignItems: 'center',
});

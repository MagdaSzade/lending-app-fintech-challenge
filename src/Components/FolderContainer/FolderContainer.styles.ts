import {css} from 'emotion';
import {CSS_COLORS} from '../../helpers/globalCss';

export const folderStyle = css({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '2.5rem 12rem',
});

export const formContainerStyle = css({
    position: 'relative',
    border: `solid 2px ${CSS_COLORS.DETAIL}`,
    padding: '0.5rem',
    zIndex: 1,
});

export const markerContainerStyle = css({
    display: 'grid',
    gridTemplateColumns: '50% 50%',
});

export const markStyle = css({
    position: 'relative',
    height: '32px',
    borderTopRightRadius: '15px',
    borderTopLeftRadius: '15px',
    border: `solid 2px ${CSS_COLORS.DETAIL}`,
    borderBottom: 'none',
});

export const loginStyle = css({
    backgroundColor: CSS_COLORS.LOGIN,
});

export const registerStyle = css({
    backgroundColor: CSS_COLORS.REGISTER,
});

export const markPStyle = css({
    padding: '0.5rem',
    textAlign: 'center',
});

export const activeLink = css({
    zIndex: 3,
});

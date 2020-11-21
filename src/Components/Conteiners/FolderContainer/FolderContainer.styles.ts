import {css} from 'emotion';
import {CSS_COLORS} from '../../../helpers/globalCss';

export const folderStyle = css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '0.5rem',
    gridTemplateRows: 'auto 2.5rem auto',
    maxWidth: '720px',
    minWidth: '700px',
    margin: '0 auto',
    '@media(max-width: 700px)': {
        gridTemplateColumns: '1fr',
        minWidth: '350px',
    },
});

export const containerStyle = css({
    display: 'grid',
    gridTemplateRows: '2.5rem auto',
});

export const formContainerStyle = css({
    position: 'relative',
    border: `solid 2px ${CSS_COLORS.BACKGROUND}`,
    padding: '0.5rem',
    zIndex: 1,
});

export const markerContainerStyle = css({
    display: 'grid',
    gridTemplateColumns: '50% 50%',
});

export const markStyle = css({
    position: 'relative',
    height: '42px',
    borderTopRightRadius: '15px',
    borderTopLeftRadius: '15px',
    border: `solid 2px ${CSS_COLORS.BACKGROUND}`,
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

export const titleStyle = css({
    textAlign: 'center',
    color: CSS_COLORS.TEXT_COLOR,
    fontSize: '1.1rem',
    letterSpacing: '0.15rem',
    padding: '0.5rem',
    lineHeight: '1.9rem',
    fontFamily: 'Josefin Sans, sans-serif',
});

export const textStyle = css({
    textAlign: 'center',
    color: CSS_COLORS.TEXT_COLOR,
    fontSize: '0.9rem',
    letterSpacing: '0.1rem',
    padding: '1rem',
    lineHeight: '1.5rem',
    fontFamily: 'Josefin Sans, sans-serif',
});

export const overviewStyle = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: CSS_COLORS.TEXT_BACKGROUND,
});

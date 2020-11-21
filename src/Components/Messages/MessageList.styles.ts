import {css} from 'emotion';
import {CSS_COLORS} from '../../helpers/globalCss';

export const messageListStyle = css({
    position: 'relative',
});

export const recordStyle = css({
    display: 'felx',
    justifyContent: 'center',
    alignItems: 'center',
    border: `1px solid ${CSS_COLORS.DETAIL}`,
    borderRadius: '5px',
    marginBottom: '0.3rem',
    padding: '0.2rem',
});

export const dateStyle = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.3rem 1rem',
});

export const displayNoneStyle = css({
    display: 'none',
});

export const displayBlockStyle = css({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: CSS_COLORS.BACKGROUND,
});

export const toUpperCaseStyle = css({
    textTransform: 'uppercase',
});

export const shrinkStyle = css({
    '@media(max-width: 442px)': {
        width: '40%',
    },
});

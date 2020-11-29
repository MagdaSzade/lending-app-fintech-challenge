import {css} from 'emotion';
import {CSS_COLORS} from '../../helpers/globalCss';

export const messageContainerStyle = css({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 40,
});

export const messageStyle = css({
    position: 'relative',
    maxWidth: '400px',
    margin: '1rem auto',
    border: '1px solid',
    borderColor: CSS_COLORS.DETAIL,
    backgroundColor: CSS_COLORS.MESSAGE_BACKGROUND,
});

export const titleStyle = css({
    padding: '0.4rem',
    color: CSS_COLORS.BACKGROUND,
    fontSize: '1.2rem',
    textAlign: 'center',
    textTransform: 'uppercase',
});

export const textStyle = css({
    color: CSS_COLORS.BACKGROUND,
    padding: '0.4rem',
    textAlign: 'center',
});

export const closeMessageStyle = css({
    position: 'absolute',
    padding: '0.3rem',
    right: 0,
});

export const xStyle = css({
    fill: CSS_COLORS.BACKGROUND,
    size: '2',
    verticalAlign: 'middle',
});

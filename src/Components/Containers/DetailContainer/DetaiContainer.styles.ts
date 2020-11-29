import {css} from 'emotion';
import {CSS_COLORS} from '../../../helpers/globalCss';

export const detailsContainerStyle = css({
    display: 'grid',
    gridTemplateRows: '3rem auto',
    width: '100%',
    maxWidth: '720px',
    margin: ' 0 auto',
    '@media(max-width: 690px)': {
        margin: '1.5rem 0',
    },
});

export const headerStyle = css({
    textAlign: 'center',
    fontFamily: 'Josefin Sans, sans-serif',
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    textShadow: `1px 1px 15px ${CSS_COLORS.LANG}`,
});

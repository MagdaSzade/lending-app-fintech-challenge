import {css} from 'emotion';
import {CSS_COLORS} from '../../../helpers/globalCss';

export const userContainerStyle = css({
    maxWidth: '750px',
    minHeight: '92vh',
    margin: '0 auto',
    display: 'grid',
    gridTemplateRows: '3rem auto',
    backgroundColor: CSS_COLORS.USER_BACKGROUND,
    '@media(max-width: 690px)': {
        gridTemplateRows: '1rem auto',
        padding: '0rem 1rem',
    },
});

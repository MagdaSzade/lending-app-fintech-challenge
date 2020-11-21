import {css} from 'emotion';

export const userContainerStyle = css({
    maxWidth: '750px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateRows: '3rem auto',
    '@media(max-width: 690px)': {
        gridTemplateRows: 'auto',
        padding: '0rem 1rem',
    },
});

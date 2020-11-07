import {css} from 'emotion';

export const radioContainerStyle = css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
});

export const radioStyle = css({
    display: 'grid',
    gridTemplateColumns: '7fr 1fr',
    justifyItems: 'center',
    alignItems: 'center',
    position: 'relative',
    cursor: 'pointer',
    padding: '0.4rem',
    userSelect: 'none',
    input: {
        position: 'absolute',
        opacity: 0,
        cursor: 'pointer',
    },
});

export const formContainerStyle = css({
    display: 'grid',
    gridTemplateRows: 'repeat(8, 3rem)',
    justifyItems: 'center',
});

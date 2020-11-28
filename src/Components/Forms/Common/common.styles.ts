import {css} from 'emotion';

export const formContainerStyle = css({
    display: 'grid',
    gridTemplateRows: '3rem',
    justifyItems: 'center',
});

export const inputContainer = css({
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '8rem 5fr',
    justifyItems: 'left',
    alignItems: 'center',
});

export const errorStyle = css({
    position: 'absolute',
    fontSize: '0.8rem',
    color: 'red',
    top: '2.5rem',
});

export const backStylePosition = css({
    position: 'fixed',
    top: '0.5rem',
    left: '5.5rem',
});

export const backStyle = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export const buttonStyle = css({
    marginBottom: '0.3rem !important',
    width: '100px',
});

import {css} from 'emotion';

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

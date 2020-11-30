import {css} from 'emotion';

export const accountDetailStyle = css({
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    width: '100%',
    margin: '0 auto',
    gridTemplateRows: 'auto',
});

export const spanStyle = css({
    gridColumn: '1/ span 2',
});

export const redStyle = css({
    color: 'red',
    fontWeight: 'bold',
});

export const greenStyle = css({
    color: 'green',
    fontWeight: 'bold',
});

export const buttonsStyle = css({
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    justifyItems: 'center',
});

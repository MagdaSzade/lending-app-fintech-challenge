import {css} from 'emotion';
import {CSS_COLORS} from '../../../helpers/globalCss';

export const recordContainerStyle = css({
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    border: `1px solid ${CSS_COLORS.DETAIL}`,
    padding: '0.5rem',
    marginBottom: '0.5rem',
    borderRadius: '5px',
    p: {
        textAlign: 'center',
    },
    'p:nth-child(2n)': {
        fontWeight: 'bold',
    },
});

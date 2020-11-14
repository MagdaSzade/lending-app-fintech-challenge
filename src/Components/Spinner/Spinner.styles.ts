import {css} from 'emotion';
import {CSS_COLORS} from '../../helpers/globalCss';

export const spinnerConteinerStyle = css({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 15,
    backgroundColor: CSS_COLORS.SPINNER_BACKGROUND,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const spinnerStyle = css({});

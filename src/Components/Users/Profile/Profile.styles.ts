import {css} from 'emotion';
import {CSS_COLORS} from '../../../helpers/globalCss';

export const profileStyle = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
});

export const parStyle = css({
    padding: '0.3rem',
    textAlign: 'center',
});

export const dangerStyle = css({
    color: 'red !important',
});

export const buttonStyle = css({
    marginBottom: '0.3rem !important',
    width: '200px',
});

export const popUpStyle = css({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: CSS_COLORS.BACKGROUND,
});

export const backStyle = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

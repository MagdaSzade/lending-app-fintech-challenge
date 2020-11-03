import {css} from 'emotion';
import {CSS_COLORS} from '../../helpers/globalCss';

export const folderStyle = css({
    position: 'relative',
});

export const markerContainerStyle = css({
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    top: '6px',
});

export const markerStyle = (color: CSS_COLORS) => {
    return css({
        position: 'relative',
        borderColor: CSS_COLORS.DETAIL,
        padding: '0.5rem',
        textAlign: 'center',
        backgroundColor: color,
        borderBottomColor: color,
    });
};

export const loginColor = css({
    backgroundColor: CSS_COLORS.LOGIN,
});

export const registerColor = css({
    backgroundColor: CSS_COLORS.REGISTER,
});

export const borderRadius = css({
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
    borderStyle: 'solid',
    borderWidth: '2px',
});

export const loginBorderColor = css({
    borderColor: CSS_COLORS.LOGIN,
});

export const registerBorderColor = css({
    borderColor: CSS_COLORS.REGISTER,
});

export const sectionStyle = css({
    position: 'relative',
    width: '100%',
    height: '200px',
    zIndex: 10,
});

export const formStyle = css({
    border: `solid 2px ${CSS_COLORS.DETAIL}`,
    height: '198px',
    margin: '2px',
    padding: '0.5rem',
});

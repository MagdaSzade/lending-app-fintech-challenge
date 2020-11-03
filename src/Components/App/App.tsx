import React from 'react';
import {css} from 'emotion';
import {AppContextProvider} from '../Context/Context';
import {FolderContainer} from '../FolderConteiner/FolderContainer';
import '../../helpers/globalCss';
import {Header} from '../Header/Header';
import {CSS_COLORS} from '../../helpers/globalCss';

const header = css({
    width: '100%',
    margin: '0 auto',
    backgroundColor: CSS_COLORS.BACKGROUND,
});

const test = css({
    width: '50%',
    height: '500px',
    margin: '0 auto',
});

export const App = () => {
    return (
        <AppContextProvider>
            <Header />
            <div className={header}>
                <div className={test}>
                    <FolderContainer />
                </div>
            </div>
        </AppContextProvider>
    );
};

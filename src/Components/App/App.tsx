import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {AppContextProvider} from '../Context/Context';
import {FolderContainer} from '../FolderContainer/FolderContainer';
import {Header} from '../Header/Header';
import {Spinner} from '../Spinner/Spinner';
import {DisplayMessage} from '../DisplayMessage/DisplayMessage';
import {ROUTES} from '../../helpers/ROUTES';
import {test} from './App.styles';
import '../../helpers/globalCss';

export const App = () => {
    return (
        <Router>
            <AppContextProvider>
                <div className={test}>
                    <Header />
                    <Switch>
                        <Route path={ROUTES.HOME} exact>
                            <Redirect to={ROUTES.LOGIN} />
                        </Route>
                        <Route path={[ROUTES.LOGIN, ROUTES.REGISTER]}>
                            <FolderContainer />
                        </Route>
                    </Switch>
                    <DisplayMessage />
                    <Spinner />
                </div>
            </AppContextProvider>
        </Router>
    );
};

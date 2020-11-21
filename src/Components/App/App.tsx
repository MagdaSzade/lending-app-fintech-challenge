import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {AppContextProvider} from '../Context/Context';
import {AuthRoute} from '../Routes/AuthRoute';
import {NoAuthRoute} from '../Routes/NoAuthRoute';
import {FolderContainer} from '../Conteiners/FolderContainer/FolderContainer';
import {Header} from '../Header/Header';
import {Spinner} from '../Spinner/Spinner';
import {DisplayMessage} from '../DisplayMessage/DisplayMessage';
import {ROUTES} from '../../helpers/ROUTES';
import {test} from './App.styles';
import '../../helpers/globalCss';
import {UserPageContainer} from '../Conteiners/UserPageContainer/UserPageContainer';

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
                        <NoAuthRoute path={[ROUTES.LOGIN, ROUTES.REGISTER]}>
                            <FolderContainer />
                        </NoAuthRoute>
                        <AuthRoute path={ROUTES.USER_HOME}>
                            <UserPageContainer />
                        </AuthRoute>
                    </Switch>
                    <DisplayMessage />
                    <Spinner />
                </div>
            </AppContextProvider>
        </Router>
    );
};

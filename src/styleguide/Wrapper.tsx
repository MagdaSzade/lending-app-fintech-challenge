import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppContextProvider} from '../Components/Context/Context';

const Wrapper: React.FC = ({children}) => {
    return (
        <Router>
            <AppContextProvider>{children}</AppContextProvider>
        </Router>
    );
};

export default Wrapper;

import {useContext} from 'react';
import {AppContext} from '../Components/Context/Contex.helpers';

export const useAppContext = () => {
    return useContext(AppContext);
};

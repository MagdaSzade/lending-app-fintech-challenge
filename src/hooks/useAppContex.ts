import {useContext} from 'react';
import {AppContext} from '../context/AppContext';

export const useAppContex = () => {
    return useContext(AppContext);
};

import {useContext} from 'react';
import {AppContext} from '../Components/Context/Contex.helpers';

export const useAppContex = () => {
    return useContext(AppContext);
};

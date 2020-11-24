import {USER_REDUCER_ACTIONS} from '../../helpers/reducers';
import {useAppContext} from '../useAppContext';
import {getAlldata} from './userActions.helpers';

export const useAsyncUserData = () => {
    const {setUsersData} = useAppContext();

    const getUser = async () => {
        const result = await getAlldata();
        setUsersData({type: USER_REDUCER_ACTIONS.NEW_USER, payload: result});
    };

    return getUser;
};

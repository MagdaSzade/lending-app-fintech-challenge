import {useCallback} from 'react';
import {USER_REDUCER_ACTIONS} from '../../helpers/reducers';
import {useAppContext} from '../useAppContext';
import {getAlldata} from './userActions.helpers';

export const useAsyncUserData = () => {
    const {setUsersData} = useAppContext();

    const getUser = useCallback(async () => {
        const result = await getAlldata();
        setUsersData({type: USER_REDUCER_ACTIONS.NEW_USER, payload: result});
    }, [setUsersData]);

    return getUser;
};

import {UserBorrowerInterface, UserLenderInterface} from './types';

export interface UserActionInterface {
    type: USER_REDUCER_ACTIONS;
    payload?: any;
}

export enum USER_REDUCER_ACTIONS {
    NEW_USER = 'newUser',
    REMOVE_DATA = 'removeUser',
}

interface UserReducerInterface {
    (user: UserBorrowerInterface | UserLenderInterface | null, action: UserActionInterface):
        | UserBorrowerInterface
        | UserLenderInterface
        | null;
}

export const userReducer: UserReducerInterface = (user, action) => {
    switch (action.type) {
        case USER_REDUCER_ACTIONS.NEW_USER:
            return action.payload;
        case USER_REDUCER_ACTIONS.REMOVE_DATA:
            return null;
    }
};

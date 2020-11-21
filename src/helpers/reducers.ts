import {UserActionInterface, UserBorrowerInterface, UserLenderInterface} from './types';

interface UserReducerInterface {
    (user: UserBorrowerInterface | UserLenderInterface | null, action: UserActionInterface):
        | UserBorrowerInterface
        | UserLenderInterface
        | null;
}

export const userReducer: UserReducerInterface = (user, action) => {
    switch (action.type) {
        case 'newUser':
            return action.payload;
        case 'removeUser':
            return null;
    }
};

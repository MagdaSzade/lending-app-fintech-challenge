import {UserActionInterface} from '../../helpers/reducers';
import {LANGS, Message, UserBorrowerInterface, UserLenderInterface} from '../../helpers/types';

export interface ContextInterface {
    lang: LANGS;
    changeLang: (lang: LANGS) => void;
    message: Message | null;
    setMessage: (message: Message | null) => void;
    isFetching: boolean;
    setIsFetching: (isFetching: boolean) => void;
    isLoggedin: boolean;
    login: () => void;
    logout: () => void;
    userData: UserBorrowerInterface | UserLenderInterface | null;
    setUsersData: (action: UserActionInterface) => void;
}

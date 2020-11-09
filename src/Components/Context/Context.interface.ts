import {LANGS, Message} from '../../helpers/types';

export interface ContextInterface {
    lang: LANGS;
    changeLang: (lang: LANGS) => void;
    message: Message | null;
    setMessage: (message: Message | null) => void;
    isFetching: boolean;
    setIsFetching: (isFetching: boolean) => void;
}

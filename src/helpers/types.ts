import {LANGS} from '../Components/Context/Contex.helpers';

export interface ContextInterface {
    lang: LANGS;
    changeLang: (lang: LANGS) => {};
}
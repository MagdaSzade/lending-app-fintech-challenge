import * as Factory from 'factory.ts';
import {LANGS} from '../../src/Components/Context/Contex.helpers';
import {ContextInterface} from '../../src/helpers/types';

export const contextInterfaceFactory = Factory.Sync.makeFactory<ContextInterface>({
    lang: LANGS.PL,
    changeLang: lang => {
        return {};
    },
});

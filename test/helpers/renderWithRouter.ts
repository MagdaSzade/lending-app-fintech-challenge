import React from 'react';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';

//I copied following pice of code from Łukasz Nowak github repository and I'm getting this error:
//    Conversion of type 'MemoryHistory<unknown>' to type 'Router' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.ts(2352).
// If i copy - paste same pice of code into test (FolderContainer.test) it works fine.
//Send help! ;-)

//export const renderWithRouter = (ui: React.ReactNode, entries?: string[]) => {
//    const history = createMemoryHistory({initialEntries: entries});
//    const renderResult = render(<Router history={history}>{ui}</Router>);
//    return {...renderResult, history};
//};

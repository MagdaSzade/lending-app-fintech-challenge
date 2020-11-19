import {ROUTES} from '../../helpers/ROUTES';

export interface RoutInterface {
    path: ROUTES | Array<ROUTES>;
    children: JSX.Element[] | JSX.Element;
}

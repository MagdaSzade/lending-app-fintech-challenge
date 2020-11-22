import {ROUTES} from '../../../helpers/ROUTES';
import {LOAN_STATUS} from '../../../helpers/types';

export const startingFilters = (pathname: string) => {
    switch (pathname) {
        case ROUTES.USER_LOANS:
            return LOAN_STATUS.ALL;
        case ROUTES.USER_LOANS_PAID_OFF:
            return LOAN_STATUS.PAID_OFF;
        case ROUTES.USER_LOANS_PENDING:
            return LOAN_STATUS.PENDING;
    }
};

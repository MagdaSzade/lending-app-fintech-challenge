import {startingFilters} from '../../../src/Components/Users/Loans/LoansList.helpers';
import {ROUTES} from '../../../src/helpers/ROUTES';
import {LOAN_STATUS} from '../../../src/helpers/types';

describe('startingFilters', () => {
    test.each([
        [ROUTES.USER_LOANS, LOAN_STATUS.ALL],
        [ROUTES.USER_LOANS_PAID_OFF, LOAN_STATUS.PAID_OFF],
        [ROUTES.USER_LOANS_PENDING, LOAN_STATUS.PENDING],
    ])('for path %s should return %s', (path: ROUTES, loanStatus: LOAN_STATUS) => {
        const result = startingFilters(path);
        expect(result).toMatch(loanStatus);
    });
});

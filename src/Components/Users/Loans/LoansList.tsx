import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {LoanListRecord} from './LoansListRecord';
import {useAppContext} from '../../../hooks/useAppContext';
import {usePushToHistory} from '../../../hooks/usePushToHistory';
import {startingFilters} from './LoansList.helpers';
import {ROUTES} from '../../../helpers/ROUTES';
import {LOAN_STATUS} from '../../../helpers/types';
import {LoanStub} from './LoanStub';

export const LoansList: React.FC = () => {
    const {userData} = useAppContext();
    const pushToHistry = usePushToHistory();
    const {location} = useHistory();
    const [filter, handleFilterChange] = useState(startingFilters(location.pathname));

    const onSelectChange = (e: any) => {
        handleFilterChange(e.target.value);
        switch (e.target.value) {
            case LOAN_STATUS.ALL:
                pushToHistry(ROUTES.USER_LOANS);
                break;
            case LOAN_STATUS.PAID_OFF:
                pushToHistry(ROUTES.USER_LOANS_PAID_OFF);
                break;
            case LOAN_STATUS.PENDING:
                pushToHistry(ROUTES.USER_LOANS_PENDING);
                break;
        }
    };
    if (userData && !userData.ListOfLoans) {
        return <LoanStub />;
    } else if (userData && userData.ListOfLoans.length > 0) {
        return (
            <div>
                <select name="loanState" id="loanState" onChange={onSelectChange} value={filter}>
                    <option value={LOAN_STATUS.PENDING}>{LOAN_STATUS.PENDING}</option>
                    <option value={LOAN_STATUS.PAID_OFF}>{LOAN_STATUS.PAID_OFF}</option>
                    <option value={LOAN_STATUS.ALL}>Wszystkie</option>
                </select>
                <ul>
                    {userData.ListOfLoans.map(loan => {
                        if (loan.status === filter || filter === LOAN_STATUS.ALL) {
                            return <LoanListRecord {...loan} />;
                        }
                        return null;
                    })}
                </ul>
            </div>
        );
    } else {
        return <div>Nie masz wziętych pożyczek</div>;
    }
};

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ROUTES} from '../../../helpers/ROUTES';
import {useAppContext} from '../../../hooks/useAppContext';
import {AccountActionForm} from '../../Forms/AccountActionForm/AccountActionForm';
import {RedirectButton} from '../Common/RedirectButton';
import {redStyle, greenStyle, accountDetailStyle, spanStyle, buttonsStyle} from './Account.styles';

export const Account: React.FC = () => {
    const {userData} = useAppContext();
    if (userData) {
        const {account} = userData;
        const stateStyle = account.accountState >= 0 ? greenStyle : redStyle;

        return (
            <div>
                <Switch>
                    <Route path={ROUTES.USER_ACCOUNT} exact>
                        <div className={accountDetailStyle}>
                            <p className={spanStyle}>Numer konta: {account.accountNumber}</p>
                            <p>Stan konta:</p>
                            <p className={stateStyle}>
                                {account.accountState.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'})}
                            </p>
                        </div>
                        <div className={buttonsStyle}>
                            <RedirectButton id="payOutNav" path={ROUTES.USER_ACCOUNT_PAY_OUT}>
                                wypłać
                            </RedirectButton>
                            <RedirectButton id="depositNav" path={ROUTES.USER_ACCOUNT_DEPOSIT}>
                                wpłać
                            </RedirectButton>
                        </div>
                    </Route>
                    <Route path={[ROUTES.USER_ACCOUNT_PAY_OUT, ROUTES.USER_ACCOUNT_DEPOSIT]}>
                        <AccountActionForm />
                    </Route>
                </Switch>
            </div>
        );
    } else {
        return null;
    }
};

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ROUTES} from '../../../helpers/ROUTES';
import {useAppContext} from '../../../hooks/useAppContext';
import {BackButton} from '../Common/BackButton';
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
                            <RedirectButton path={ROUTES.USER_ACCOUNT_PAY_OUT}>wypłać</RedirectButton>
                            <RedirectButton path={ROUTES.USER_ACCOUNT_DEPOSIT}>wpłać</RedirectButton>
                        </div>
                    </Route>
                    <Route path={ROUTES.USER_ACCOUNT_PAY_OUT}>
                        <BackButton path={ROUTES.USER_ACCOUNT} />
                        <div>cokolwiek1</div>
                    </Route>
                    <Route path={ROUTES.USER_ACCOUNT_DEPOSIT}>
                        <BackButton path={ROUTES.USER_ACCOUNT} />
                        <div>cokolwiek2</div>
                    </Route>
                </Switch>
            </div>
        );
    } else {
        return null;
    }
};

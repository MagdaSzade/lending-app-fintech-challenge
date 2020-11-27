import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import {ROUTES} from '../../../helpers/ROUTES';
import {useGetInquiries} from '../../../hooks/useGetInquiries';
import {GetInquiriesForm} from '../../Forms/GetInquiriesForm/GetInquiriesForm';
import {OfferForm} from '../../Forms/OfferForm/OfferForm';
import {Record} from './GetInquiriesRecord';
import {initialValues} from '../../Forms/GetInquiriesForm/GetInquiriesForm.helpers';

export const GetInquiries: React.FC = () => {
    const {listOfInquieries, getInquieries} = useGetInquiries();

    useEffect(() => {
        getInquieries(initialValues);
    }, [getInquieries]);

    return (
        <div>
            <Switch>
                <Route path={ROUTES.USER_FIND_INQUIRIES} exact>
                    <GetInquiriesForm onSubmit={getInquieries} />
                    <div>
                        {listOfInquieries && listOfInquieries.length > 0 ? (
                            listOfInquieries.map(inq => <Record inquiry={inq} />)
                        ) : (
                            <div>Zmień parametry wyszukania</div>
                        )}
                    </div>
                </Route>
                <Route path={ROUTES.USER_MAKE_OFFER}>
                    <OfferForm />
                </Route>
            </Switch>
        </div>
    );
};

import React, {ChangeEvent, useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import {ROUTES} from '../../../helpers/ROUTES';
import {useGetInquiries} from '../../../hooks/useGetInquiries';
import {GetInquiriesForm} from '../../Forms/GetInquiriesForm/GetInquiriesForm';
import {OfferForm} from '../../Forms/OfferForm/OfferForm';
import {Record} from './GetInquiriesRecord';
import {FILTERS, selectSortFunction} from './GetInquiries.helpers';
import {initialValues} from '../../Forms/GetInquiriesForm/GetInquiriesForm.helpers';
import {InquieryInterface} from '../../../helpers/types';

export const GetInquiries: React.FC = () => {
    const {listOfInquieries, getInquieries} = useGetInquiries();
    const [filter, setFilter] = useState(FILTERS.AMOUNT_MIN);
    const [filteredList, setFilteredList] = useState<InquieryInterface[] | null>([]);

    useEffect(() => {
        getInquieries(initialValues);
    }, [getInquieries]);

    useEffect(() => {
        if (listOfInquieries) {
            const sortedList = listOfInquieries;
            const sortFunction = selectSortFunction(filter);
            console.log(sortFunction);
            setFilteredList(() => sortedList.sort(sortFunction));
        }
    }, [setFilteredList, listOfInquieries, filter]);

    const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedFilter = e.target.value as FILTERS;
        setFilter(selectedFilter);
    };

    return (
        <div>
            <Switch>
                <Route path={ROUTES.USER_FIND_INQUIRIES} exact>
                    <GetInquiriesForm onSubmit={getInquieries} />
                    <select name="sortInquiries" id="sortInquiries" onChange={handleFilterChange} value={filter}>
                        <option value={FILTERS.AMOUNT_MAX}>{FILTERS.AMOUNT_MAX}</option>
                        <option value={FILTERS.AMOUNT_MIN}>{FILTERS.AMOUNT_MIN}</option>
                        <option value={FILTERS.DURATION_MAX}>{FILTERS.DURATION_MAX}</option>
                        <option value={FILTERS.DURATION_MIN}>{FILTERS.DURATION_MIN}</option>
                    </select>
                    <div>
                        {filteredList && filteredList.length > 0 ? (
                            filteredList.map(inq => <Record inquiry={inq} key={inq.id} />)
                        ) : (
                            <div>Nie ma ofert do wyświetlenia</div>
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

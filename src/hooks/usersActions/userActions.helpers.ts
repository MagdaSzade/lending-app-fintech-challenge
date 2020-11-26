import {getAllUserDataApi} from '../../api/apiUser';
import jwt_decode from 'jwt-decode';
import {ROLE, UserBorrowerInterface, UserLenderInterface} from '../../helpers/types';

export const getAlldata = async () => {
    const token = window.sessionStorage.getItem('x-auth');
    if (token) {
        const decoded: any = jwt_decode(token);
        const {data} = await getAllUserDataApi(decoded['user-id']);
        let user: UserBorrowerInterface | UserLenderInterface | null = null;
        if (data.roles[0].name === ROLE.BORROWER) {
            user = {
                email: data.email,
                name: data.name,
                surname: data.surname,
                ListOfInqueries: data.inquiries,
                ListOfLoans: data.loans,
                ListOfMessages: [],
                ListOfOffers: [],
                userID: data.id,
                phone: data.phone,
                role: ROLE.BORROWER,
                account: {
                    ID: 'accountID',
                    accountNumber: '1234123412341234',
                    accountState: 0,
                },
            };
        } else if (data.roles[0].name === ROLE.LENDER) {
            user = {
                email: data.email,
                name: data.name,
                surname: data.surname,
                ListOfOffers: data.offers,
                ListOfLoans: data.loans,
                ListOfInqueries: [],
                ListOfMessages: [],
                userID: data.id,
                phone: data.phone,
                role: ROLE.LENDER,
                account: {
                    ID: 'accountID',
                    accountNumber: '1234123412341234',
                    accountState: 0,
                },
            };
        }
        return user;
    }
    return null;
};

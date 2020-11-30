import {getAllUserDataApi} from '../../api/apiUser';
import jwt_decode from 'jwt-decode';
import {UserInterface} from '../../helpers/types';

export const getAlldata = async () => {
    const token = window.sessionStorage.getItem('x-auth');
    if (token) {
        const decoded: any = jwt_decode(token);
        const {data} = await getAllUserDataApi(decoded['user-id']);
        console.log(data);
        let user: UserInterface | null = null;
        user = {
            email: data.email,
            name: data.name,
            surname: data.surname,
            ListOfInqueries: data.inquiries,
            ListOfLoans: data.loans,
            ListOfMessages: data.messages,
            ListOfOffers: createListOFOffers(data.offers),
            userID: data.id,
            phone: data.phone,
            role: data.roles[0].name,
            account: {
                accountNumber: data.accountNumber,
                accountState: data.moneyAmount,
            },
        };
        console.log(user);
        return user;
    }
    return null;
};

const createListOFOffers = (list: Array<any>) => {
    const listOfOffers: Array<any> = [];
    list.forEach(offer => {
        listOfOffers.push({
            id: offer.id,
            status: offer.status,
            loanAmountGiven: offer.loanAmount,
            annualIntrestRateGiven: offer.annualInterestRate,
            loanDurationGiven: offer.inquiry.loanDuration,
            loanAmount: offer.loanAmount,
            loanDuration: offer.inquiry.loanDuration,
            submitionDeadline: offer.inquiry.submissionDeadline,
        });
    });
    return listOfOffers;
};

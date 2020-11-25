import {AccountInterface, LoanInterface, LOAN_STATUS, ROLE, UserBorrowerInterface, UserMessageInterface} from './types';

const testMessages1: UserMessageInterface = {
    title: 'TO JEST TESTOWA MESSAGE',
    message: 'jesteś w trakcie tesowania',
    hasBeenRead: false,
    date: new Date().toISOString(),
    ID: 'string1',
};

const testMessages2: UserMessageInterface = {
    title: 'TO JEST TESTOWA MESSAGE',
    message: 'jesteś w trakcie tesowania',
    hasBeenRead: true,
    date: new Date().toISOString(),
    ID: 'string2',
};

const testMessages3: UserMessageInterface = {
    title: 'TO JEST TESTOWA MESSAGE',
    message: 'jesteś w trakcie tesowania',
    hasBeenRead: false,
    date: new Date().toISOString(),
    ID: 'string3',
};

const testLoan1: LoanInterface = {
    ID: 'loan1',
    borrowerName: 'test borrower',
    lenderName: 'test lender',
    loanWasTaken: '20.11.2020',
    willBePaidOff: '20.11.2021',
    amount: 10000,
    paidOff: 200,
    totalLeft: 875,
    status: LOAN_STATUS.PENDING,
};

const testLoan2: LoanInterface = {
    ID: 'loan2',
    borrowerName: 'test borrower',
    lenderName: 'test lender',
    loanWasTaken: '20.11.2019',
    willBePaidOff: '20.11.2020',
    amount: 10000,
    paidOff: 10700,
    totalLeft: 0,
    status: LOAN_STATUS.PAID_OFF,
};

const testAccount: AccountInterface = {
    ID: 'string',
    accountNumber: '0000 0000 0000 0000',
    accountState: -1200,
};

export const testUser: UserBorrowerInterface = {
    userID: 'testID',
    name: 'testName',
    surname: 'testSurname',
    phone: '111111111',
    email: 'test@test.pl',
    role: ROLE.LENDER,
    account: testAccount,
    ListOfMessages: [testMessages1, testMessages2, testMessages3],
    ListOfInqueries: [],
    ListOfOffers: [],
    ListOfLoans: [testLoan1, testLoan2],
};

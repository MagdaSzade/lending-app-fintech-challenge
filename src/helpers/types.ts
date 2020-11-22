export enum ROLE {
    BORROWER = 'BORROWER',
    LENDER = 'LENDER',
}

export enum LANGS {
    PL = 'pl',
    EN = 'en',
}

export enum LOAN_STATUS {
    PENDING = 'PENDING',
    PAID_OFF = 'PAID_OFF',
    ALL = 'ALL',
}

export interface LangInterface {
    pl: string;
    en: string;
}

export interface UserActionInterface {
    type: 'newUser' | 'removeUser';
    payload?: any;
}

export interface Message {
    type: 'error' | 'info';
    title: LangInterface;
    message?: LangInterface;
}

export interface UserMessageInterface {
    date: string;
    title: string;
    message: string;
    hasBeenRead: boolean;
    ID: string;
}

export interface InquieryInterface {
    inquieryID: string;
    loanAmount: number;
    loanDuration: number;
    submissionDeadline: Date;
    createdAt: Date;
}

export interface OfferInterface {
    offertID: string;
    lenderID: string;
    inquieryID: string;
    loadnAmount: number;
    annualIntrestRate: number;
    paymentFrequency: string;
}

export interface LoanInterface {
    ID: string;
    lenderName: string;
    borrowerName: string;
    loanWasTaken: string;
    willBePaidOff: string;
    amount: number;
    paidOff: number;
    totalLeft: number;
    status: LOAN_STATUS;
}

interface UserInterface {
    userID: string;
    name: string;
    surname: string;
    phone: string;
    email: string;
    role: 'BORROWER' | 'LENDER';
    ListOfMessages: Array<UserMessageInterface>;
    ListOfLoans: Array<LoanInterface>;
}

export interface UserBorrowerInterface extends UserInterface {
    ListOfInqueries: Array<InquieryInterface>;
}

export interface UserLenderInterface extends UserInterface {
    ListOfOffers: Array<OfferInterface>;
}

export interface ReagisterNewUserForm {
    name: string;
    surname: string;
    email: string;
    phone: number | undefined;
    password: string;
    roles: Array<ROLE>;
}

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

export enum INQIRY_STATUS {
    PENDING = 'pending',
    RESOLVED = 'resolved',
}

export interface LangInterface {
    pl: string;
    en: string;
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
    id: string;
    loanAmount: number;
    loanDuration: number;
    submissionDeadline: string;
    createdAt: string;
    status: INQIRY_STATUS;
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

export interface AccountInterface {
    ID: string;
    accountNumber: string;
    accountState: number;
}

interface UserInterface {
    userID: string;
    name: string;
    surname: string;
    phone?: string;
    email: string;
    role: 'BORROWER' | 'LENDER';
    account: AccountInterface;
    ListOfMessages: Array<UserMessageInterface>;
    ListOfLoans: Array<LoanInterface>;
    ListOfOffers: Array<OfferInterface>;
    ListOfInqueries: Array<InquieryInterface>;
}

export interface UserBorrowerInterface extends UserInterface {}

export interface UserLenderInterface extends UserInterface {}

export interface ReagisterNewUserForm {
    name: string;
    surname: string;
    email: string;
    phone: number | undefined;
    password: string;
    roles: Array<ROLE>;
}

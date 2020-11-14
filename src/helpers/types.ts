export enum ROLE {
    BORROWER = 'BORROWER',
    LENDER = 'LENDER',
}

export enum LANGS {
    PL = 'pl',
    EN = 'en',
}

export interface Message {
    type: 'error' | 'info';
    title: {
        pl: string;
        en: string;
    };
    message?: {
        pl: string;
        en: string;
    };
}

export interface UserMessageInterface {
    title: string;
    message: string;
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

interface UserInterface {
    userID: string;
    name: string;
    surname: string;
    phone: string;
    email: string;
    role: 'BORROWER' | 'LENDER';
    ListOfMessages: Array<UserMessageInterface>;
}

export interface UserBorrowerInterface extends UserInterface {
    ListOfInqueries: Array<InquieryInterface>;
}

export interface UserLenderInterface extends UserInterface {
    ListOfOffers: Array<OfferInterface>;
}

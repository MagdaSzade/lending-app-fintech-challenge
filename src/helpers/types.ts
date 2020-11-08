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

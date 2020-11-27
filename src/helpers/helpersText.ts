import {Message} from './types';

export const fetchAPIError: Message = {
    type: 'error',
    title: {
        pl: 'Coś poszło nie tak',
        en: 'Something went wrong',
    },
    message: {
        pl: 'spróbuj ponownie później',
        en: 'try again later',
    },
};

export const loginSuccesText: Message = {
    type: 'info',
    title: {
        pl: 'Udane logowanie',
        en: 'Successful login',
    },
    message: {
        pl: 'Nastąpi przekierowanie do twojego konta',
        en: 'You will be redirected to your account',
    },
};

export const newInquirySuccesText: Message = {
    type: 'info',
    title: {
        pl: 'Wysłano zapytanie',
        en: 'Inquiry was send',
    },
    message: {
        pl: 'Nastąpi przekierowanie do wiadomości',
        en: 'You will be redirected to your messages',
    },
};

export const newOfferSuccesText: Message = {
    type: 'info',
    title: {
        pl: 'Złożono ofertę',
        en: 'Offer was send',
    },
    message: {
        pl: 'Nastąpi przekierowanie do wiadomości',
        en: 'You will be redirected to your messages',
    },
};

export const changePasswordSuccesText: Message = {
    type: 'info',
    title: {
        pl: 'Hasło zmieniono',
        en: 'Password was changed',
    },
    message: {
        pl: 'Zaloguj się podownie nowym hasłem',
        en: 'login with new password',
    },
};

export const changeEmailSuccesText: Message = {
    type: 'info',
    title: {
        pl: 'Email zmieniono',
        en: 'Email was changed',
    },
    message: {
        pl: 'Zaloguj się podnownie',
        en: 'login with new email',
    },
};

export const deleteAccountSuccesText: Message = {
    type: 'info',
    title: {
        pl: 'Konto zostało usunięte',
        en: 'Account was deleted',
    },
    message: {
        pl: 'Mamy nadzieję, że jeszcze nas odwiedzisz!',
        en: 'Have a nice day!',
    },
};

export const deleteAccountFailText: Message = {
    type: 'info',
    title: {
        pl: 'Nie usunięto konta',
        en: 'Yours account was not deleted',
    },
    message: {
        pl: 'Aby usunąć konto należy wypłacić wszystkie pieniądze ze swojego konta lub spłacić długi',
        en: 'To delete an account, you must withdraw all money from your account or pay off debts',
    },
};

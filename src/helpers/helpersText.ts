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

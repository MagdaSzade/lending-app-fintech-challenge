import {ROLE} from '../../../helpers/types';

export interface NewUserInterface {
    name: string;
    surname: string;
    email: string;
    phone: number | undefined;
    password: string;
    password2: string;
    role: ROLE;
}

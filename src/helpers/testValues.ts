import {ROLE, UserBorrowerInterface} from './types';

export const testUser: UserBorrowerInterface = {
    userID: 'testID',
    name: 'testName',
    surname: 'testSurname',
    phone: '111111111',
    email: 'test@test.pl',
    role: ROLE.BORROWER,
    ListOfMessages: [],
    ListOfInqueries: [],
};

import {ROLE, UserBorrowerInterface, UserMessageInterface} from './types';

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

export const testUser: UserBorrowerInterface = {
    userID: 'testID',
    name: 'testName',
    surname: 'testSurname',
    phone: '111111111',
    email: 'test@test.pl',
    role: ROLE.LENDER,
    ListOfMessages: [testMessages1, testMessages2, testMessages3],
    ListOfInqueries: [],
};

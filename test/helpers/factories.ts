import * as Factory from 'factory.ts';
import {ContextInterface} from '../../src/Components/Context/Context.interface';
import {AccountActionInterface} from '../../src/Components/Forms/AccountActionForm/AccountActionForm.interface';
import {EmailChangeInterface} from '../../src/Components/Forms/EmailChangeForm/EmailChange.interface';
import {GetInquiryFormInterface} from '../../src/Components/Forms/GetInquiriesForm/GetInquiriesForm.interface';
import {InquiryFormInterface} from '../../src/Components/Forms/InquiryForm/InquiryForm.interface';
import {LoginUserInterface} from '../../src/Components/Forms/LoginForm/LoginForm.interface';
import {OfferFormInterface} from '../../src/Components/Forms/OfferForm/OfferForm.interface';
import {PasswordChangeInterface} from '../../src/Components/Forms/PasswordChangeForm/PasswordChangeForm.interface';
import {NewUserInterface} from '../../src/Components/Forms/RegisterForm/RegisterForm.interface';
import {
    AccountInterface,
    INQIRY_STATUS,
    InquieryInterface,
    LANGS,
    ReagisterNewUserForm,
    ROLE,
    UserInterface,
} from '../../src/helpers/types';

export const contextInterfaceFactory = Factory.Sync.makeFactory<ContextInterface>({
    lang: LANGS.PL,
    changeLang: lang => {},
    message: null,
    setMessage: error => {},
    isFetching: false,
    setIsFetching: isFetching => {},
    isLoggedin: false,
    login: () => {},
    logout: () => {},
    userData: null,
    setUsersData: () => {},
});

export const accountFactory = Factory.Sync.makeFactory<AccountInterface>({
    ID: 'string',
    accountNumber: '0000 0000 0000 0000',
    accountState: 0,
});

export const userFactory = Factory.Sync.makeFactory<UserInterface>({
    userID: 'testID',
    name: 'testName',
    surname: 'testSurname',
    phone: '111111111',
    email: 'test@test.pl',
    role: ROLE.BORROWER,
    account: accountFactory.build(),
    ListOfMessages: [],
    ListOfInqueries: [],
    ListOfOffers: [],
    ListOfLoans: [],
});

export const factoryReagisterNewUserForm = Factory.Sync.makeFactory<ReagisterNewUserForm>({
    surname: 'surname',
    name: 'name',
    email: 'test@test',
    phone: undefined,
    password: 'password',
    roles: [ROLE.BORROWER],
});

export const changeEmailFactory = Factory.Sync.makeFactory<EmailChangeInterface>({
    newEmail: 'email@email',
    password: 'password',
});

export const inquiryFormInterfaceFactory = Factory.Sync.makeFactory<InquiryFormInterface>({
    loanDuration: 12,
    loanAmount: 1000,
    submissionDeadline: 3,
});

export const getInquiryFormInterfaceFactory = Factory.Sync.makeFactory<GetInquiryFormInterface>({
    maxLoanDuration: 10,
    minLoanDuration: 5,
    maxAmount: 1000,
    minAmount: 500,
});

export const offerFormInterfaceFactory = Factory.Sync.makeFactory<OfferFormInterface>({
    annualIntrestRate: 10,
    proposedAmount: 1000,
    inquiryID: 'testID',
    propposedDuration: 24,
});

export const accountActionInterfaceFactory = Factory.Sync.makeFactory<AccountActionInterface>({
    value: 1000,
});

export const newUserFactory = Factory.Sync.makeFactory<NewUserInterface>({
    name: 'Test_data',
    surname: 'test_data',
    email: 'test@testdata.pl',
    phone: 222222222,
    password: 'password123@',
    password2: 'password123@',
    role: ROLE.BORROWER,
});

export const loginUserFactory = Factory.Sync.makeFactory<LoginUserInterface>({
    email: 'magda123@email.com',
    password: 'wisnia123',
});

export const passwordChangeInterfaceFactory = Factory.Sync.makeFactory<PasswordChangeInterface>({
    newPassword1: 'newPassword',
    newPassword2: 'newPassword',
    password: 'password',
});

export const inquieryInterfaceFactory = Factory.Sync.makeFactory<InquieryInterface>({
    id: 'inquiry.id',
    createdAt: 'inquiry.createdAt',
    loanAmount: 3000,
    loanDuration: 25,
    submissionDeadline: 'inquiry.submissionDeadline',
    status: INQIRY_STATUS.PENDING,
});

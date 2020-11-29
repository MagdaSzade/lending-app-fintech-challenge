import {InquieryInterface} from '../../../helpers/types';

export enum FILTERS {
    AMOUNT_MIN = 'od najmniejszych',
    AMOUNT_MAX = 'od największych',
    DURATION_MIN = 'od najkrótszych',
    DURATION_MAX = 'od najdłuższych',
}

export const selectSortFunction = (filter: FILTERS) => {
    switch (filter) {
        case FILTERS.AMOUNT_MAX:
            return (inquiryA: InquieryInterface, inquiryB: InquieryInterface) => {
                return inquiryB.loanAmount - inquiryA.loanAmount;
            };
        case FILTERS.AMOUNT_MIN:
            return (inquiryA: InquieryInterface, inquiryB: InquieryInterface) => {
                return inquiryA.loanAmount - inquiryB.loanAmount;
            };
        case FILTERS.DURATION_MAX:
            return (inquiryA: InquieryInterface, inquiryB: InquieryInterface) => {
                return inquiryB.loanDuration - inquiryA.loanDuration;
            };
        case FILTERS.DURATION_MIN:
            return (inquiryA: InquieryInterface, inquiryB: InquieryInterface) => {
                return inquiryA.loanDuration - inquiryB.loanDuration;
            };
    }
};

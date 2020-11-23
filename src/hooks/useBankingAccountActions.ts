import {BankingOperationInterface} from '../Components/Forms/BankingOperationForm/BankingOperationForm.interface';

export const useBankingAccountActions = () => {
    const deposit = (values: BankingOperationInterface) => {
        console.log(values);
    };
    const withdrawal = (values: BankingOperationInterface) => {
        console.log(values);
    };

    return {deposit, withdrawal};
};

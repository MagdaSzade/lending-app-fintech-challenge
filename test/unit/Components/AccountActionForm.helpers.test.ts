import {accountFormValidation} from '../../../src/Components/Forms/AccountActionForm/AccountActionForm.helpers';

describe('accountFormValidation', () => {
    test.each([
        [0, undefined],
        [0, 3000],
        [5000, 3000],
        [600000, undefined],
    ])('it should return error.value for value %s and valueMax %d', (value: number, valueMax: number | undefined) => {
        const values = {
            value,
        };
        const result = accountFormValidation(values, valueMax);
        expect(result.value).toBeDefined();
    });

    test.each([
        [1000, undefined],
        [3000, 3000],
    ])('it should not return error.value for value %s and valueMax %d', (value: number, valueMax: number | undefined) => {
        const values = {
            value,
        };
        const result = accountFormValidation(values, valueMax);
        expect(result.value).toBeUndefined();
    });
});

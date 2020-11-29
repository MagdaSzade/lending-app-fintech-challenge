import React from 'react';
import {DisplayMessage} from '../../../../src/Components/DisplayMessage/DisplayMessage';
import {queryByText, render, screen, waitFor, waitForElementToBeRemoved} from '@testing-library/react';
import {mocked} from 'ts-jest/utils';
import {useAppContext} from '../../../../src/hooks/useAppContext';
import {contextInterfaceFactory} from '../../../helpers/factories';
import {Message} from '../../../../src/helpers/types';
import userEvent from '@testing-library/user-event';

jest.mock('../../../../src/hooks/useAppContext');

describe('DisplayMessage', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('should display given message', () => {
        let message: Message | null = {
            type: 'error',
            title: {
                pl: 'test1',
                en: 'test1',
            },
            message: {
                pl: 'test2',
                en: 'test2',
            },
        };
        const setMessage = (newMessage: Message | null) => {
            message = newMessage;
        };
        mocked(useAppContext).mockReturnValue(contextInterfaceFactory.build({message, setMessage}));
        render(<DisplayMessage />);
        expect(screen.getByText('test1')).toBeInTheDocument();
        expect(screen.getByText('test2')).toBeInTheDocument();
    });

    it('should close given message when clicked', async () => {
        let message: Message | null = {
            type: 'error',
            title: {
                pl: 'test1',
                en: 'test1',
            },
            message: {
                pl: 'test2',
                en: 'test2',
            },
        };
        const setMessage = jest.fn();
        mocked(setMessage).mockReturnValue((newMessage: Message | null) => (message = newMessage));
        mocked(useAppContext).mockReturnValue(contextInterfaceFactory.build({message, setMessage}));
        render(<DisplayMessage />);
        userEvent.click(screen.getByText('test1'));
        await waitFor(() => {
            expect(screen.queryByText('test')).not.toBeInTheDocument();
        });
        expect(setMessage).toBeCalledWith(null);
    });

    it('should close given message when clicked', async () => {
        let message: Message | null = {
            type: 'error',
            title: {
                pl: 'test1',
                en: 'test1',
            },
            message: {
                pl: 'test2',
                en: 'test2',
            },
        };
        const setMessage = jest.fn();
        mocked(setMessage).mockReturnValue((newMessage: Message | null) => (message = newMessage));
        mocked(useAppContext).mockReturnValue(contextInterfaceFactory.build({message, setMessage}));
        render(<DisplayMessage />);
        await waitFor(() => {
            setTimeout(() => {
                expect(screen.queryByText('test')).not.toBeInTheDocument();
                expect(setMessage).toBeCalledWith(null);
            }, 10005);
        });
    });
});

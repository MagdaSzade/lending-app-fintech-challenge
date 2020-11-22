import React from 'react';
import {useAppContext} from '../../../hooks/useAppContext';
import {messageListStyle} from './MessageList.styles';
import {Record} from './MessageListRecord';

export const MessagesList: React.FC = () => {
    const {userData} = useAppContext();

    if (userData?.ListOfMessages.length === 0) {
        return <div>Nie masz żadnych wiadomości</div>;
    }

    return (
        <ul className={messageListStyle}>
            {userData?.ListOfMessages.map(message => {
                return <Record key={message.ID} {...message} />;
            })}
        </ul>
    );
};
